import { Router } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import {
  register, login, refresh, logout,
  forgotPassword, resetPassword,
} from '../controllers/auth.controller';
import { authRateLimiter } from '../middleware/rateLimit.middleware';

export const authRouter = Router();

authRouter.post('/register', authRateLimiter, asyncHandler(register));
authRouter.post('/login', authRateLimiter, asyncHandler(login));
authRouter.post('/refresh', asyncHandler(refresh));
authRouter.post('/logout', asyncHandler(logout));
authRouter.post('/forgot-password', authRateLimiter, asyncHandler(forgotPassword));
authRouter.post('/reset-password', authRateLimiter, asyncHandler(resetPassword));
