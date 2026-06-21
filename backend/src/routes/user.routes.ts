import { Router } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { authenticate } from '../middleware/auth.middleware';
import { getMe, updateMe, changePassword } from '../controllers/user.controller';

export const userRouter = Router();
userRouter.use(authenticate);

userRouter.get('/me', asyncHandler(getMe));
userRouter.put('/me', asyncHandler(updateMe));
userRouter.put('/me/password', asyncHandler(changePassword));
