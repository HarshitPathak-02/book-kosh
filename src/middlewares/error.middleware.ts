import { Request, Response, NextFunction } from "express";
import ExpressError from "../utils/ExpressError";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!(err instanceof ExpressError)) {
    console.error("Unexpected Error:", err);
  }

  const status = err.statusCode || 500;
  const message = err.message || "Something went wrong!";

  res.status(status).json({
    ok: false,
    status,
    message,
  });
};
