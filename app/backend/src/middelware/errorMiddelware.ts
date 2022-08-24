import { NextFunction, Request, Response } from 'express';

interface middlewareError extends Error {
  status: number;
}

export default function ErrorMiddelware(
  error: middlewareError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  res.status(error.status || 500).json({ message: error.message });
}
