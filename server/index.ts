import express, { type Request, Response, NextFunction } from "express";
import https from "https";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { sslConfig } from "./config/ssl";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Health check endpoint
app.get('/health', (_req: Request, res: Response) => {
  res.status(200).send('OK');
});

// Request logging middleware
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
  try {
    const server = await registerRoutes(app);

    // Error handling middleware
    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";
      log(`Error: ${message}`);
      res.status(status).json({ message });
      throw err;
    });

    if (app.get("env") === "development") {
      await setupVite(app, server);
    } else {
      serveStatic(app);
    }

    const port = 5000;

    try {
      // Start HTTP server first
      server.listen({
        port,
        host: "0.0.0.0",
        reusePort: true,
      }, () => {
        log(`serving on port ${port} (HTTP)`);

        // Only attempt HTTPS after HTTP is confirmed working
        try {
          const httpsServer = https.createServer(sslConfig, app);
          httpsServer.listen({
            port: port + 1,  // Use a different port for HTTPS
            host: "0.0.0.0",
            reusePort: true,
          }, () => {
            log(`serving on port ${port + 1} (HTTPS)`);
          });

          httpsServer.on('error', (error) => {
            log(`HTTPS Server Error: ${error.message}`);
          });
        } catch (error) {
          log(`Failed to start HTTPS server: ${error instanceof Error ? error.message : String(error)}`);
          log('Continuing with HTTP only');
        }
      });

      // Handle HTTP server errors
      server.on('error', (error) => {
        log(`HTTP Server Error: ${error.message}`);
        process.exit(1);
      });

    } catch (error) {
      log(`Failed to start HTTP server: ${error instanceof Error ? error.message : String(error)}`);
      process.exit(1);
    }
  } catch (error) {
    log(`Application startup error: ${error instanceof Error ? error.message : String(error)}`);
    process.exit(1);
  }
})();