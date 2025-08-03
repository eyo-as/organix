import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const jwtSecret = process.env.jwt_secret;

interface jwtPayload {
  id: string;
}

export const authMiddleware = (
  req: Request & { userId?: string },
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "No token provided",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, jwtSecret as string) as jwtPayload;
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
