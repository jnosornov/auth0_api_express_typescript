// debug.middleware.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const debugLogger = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  console.log("Authorization header:", authHeader);
  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];
    try {
      const decoded = jwt.decode(token, { complete: true });
      console.log("Decoded JWT payload:", decoded?.payload);
    } catch (err) {
      console.error("Error decoding JWT:", err);
    }
  }
  next();
};
