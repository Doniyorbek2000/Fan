import { Router } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { authenticate, requireAdmin } from '../middleware/auth.middleware';
import {
  getDashboardStats, getUsers, updateUserStatus, verifyUser,
  getBookings, getAnalytics, getContent, deleteContent,
} from '../controllers/admin.controller';

export const adminRouter = Router();

adminRouter.use(authenticate, requireAdmin);
adminRouter.get('/dashboard', asyncHandler(getDashboardStats));
adminRouter.get('/users', asyncHandler(getUsers));
adminRouter.patch('/users/:id/status', asyncHandler(updateUserStatus));
adminRouter.patch('/users/:id/verify', asyncHandler(verifyUser));
adminRouter.get('/bookings', asyncHandler(getBookings));
adminRouter.get('/analytics', asyncHandler(getAnalytics));
adminRouter.get('/content', asyncHandler(getContent));
adminRouter.delete('/content/:id', asyncHandler(deleteContent));
