import { Router } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { authenticate } from '../middleware/auth.middleware';
import { getNotifications, markAllRead, markOneRead } from '../controllers/notification.controller';

export const notificationRouter = Router();
notificationRouter.use(authenticate);

notificationRouter.get('/', asyncHandler(getNotifications));
notificationRouter.patch('/read-all', asyncHandler(markAllRead));
notificationRouter.patch('/:id/read', asyncHandler(markOneRead));
