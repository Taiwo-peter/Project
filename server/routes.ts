import type { Express } from "express";
import { createServer, type Server } from "http";
import * as https from "https";
import * as fs from "fs";
import * as path from "path";
import { storage } from "./storage";
import { insertContactSchema, insertUserSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Add a test endpoint for HTTPS
  app.get("/api/test-https", (req, res) => {
    res.json({ 
      secure: req.secure,
      protocol: req.protocol,
      headers: {
        host: req.headers.host,
        "x-forwarded-proto": req.headers["x-forwarded-proto"]
      }
    });
  });
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      await storage.createContactMessage(contactData);
      res.json({ message: "Message sent successfully" });
    } catch (error) {
      res.status(400).json({ error: "Invalid contact form data" });
    }
  });

  app.post("/api/signup", async (req, res) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      const user = await storage.createUser(userData);
      res.json({ message: "User created successfully", user });
    } catch (error) {
      res.status(400).json({ error: "Invalid signup data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
