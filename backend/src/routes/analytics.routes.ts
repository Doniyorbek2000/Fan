import { Router } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { authenticate, requireCelebrity } from '../middleware/auth.middleware';
import { getOverview } from '../controllers/analytics.controller';

export const analyticsRouter = Router();
analyticsRouter.use(authenticate, requireCelebrity);

analyticsRouter.get('/overview', asyncHandler(getOverview));
