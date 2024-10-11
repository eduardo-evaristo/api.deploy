import { Request, Response } from 'express';
import AppError from '../utils/AppError';

export default function ErrorHandler(
  err: Error | AppError,
  req: Request,
  res: Response
) {
  const statusCode = (err instanceof AppError ? err.statusCode : 500) || 500;
  const status = (err instanceof AppError ? err.statusCode : 500) || 'fail';

  res.status(statusCode).json({ status: status, message: err.message });
}
