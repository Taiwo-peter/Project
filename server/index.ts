import express, { type Request, Response, NextFunction } from "express";
import * as fs from "fs";
import * as path from "path";
import * as https from "https";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client
  const port = 5000;
  const httpsPort = 5443;
  
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`HTTP server listening on port ${port}`);
  });

  try {
    // Setup HTTPS server with certificates
    const httpsOptions = {
      key: fs.readFileSync(path.join(process.cwd(), 'certificates/key.pem')),
      cert: fs.readFileSync(path.join(process.cwd(), 'certificates/cert.pem'))
    };
    
    const httpsServer = https.createServer(httpsOptions, app);
    httpsServer.listen(httpsPort, "0.0.0.0", () => {
      log(`HTTPS server listening on port ${httpsPort}`);
    });
  } catch (error) {
    log(`Error setting up HTTPS: ${error.message}`);
  }
})();
