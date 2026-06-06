import { Request, Response, NextFunction } from 'express';

export class AppError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public details?: unknown
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error('Error:', err);

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: err.message,
      details: err.details,
    });
  }

  if (err.name === 'PrismaClientKnownRequestError') {
    return res.status(400).json({ error: 'Ma\'lumotlar bazasi xatosi' });
  }

  if (err.name === 'ZodError') {
    return res.status(400).json({ error: 'Noto\'g\'ri ma\'lumotlar', details: err.message });
  }

  return res.status(500).json({ error: 'Ichki server xatosi' });
};
