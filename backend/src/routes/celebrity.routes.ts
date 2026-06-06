import { Router } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { authenticate, requireCelebrity } from '../middleware/auth.middleware';
import {
  getCelebrities, getCelebrity, getMyCelebrityProfile,
  updateCelebrityProfile, updateCelebrityServices, getCelebrityStats,
} from '../controllers/celebrity.controller';

export const celebrityRouter = Router();

celebrityRouter.get('/', asyncHandler(getCelebrities));
celebrityRouter.get('/me', authenticate, requireCelebrity, asyncHandler(getMyCelebrityProfile));
celebrityRouter.get('/me/stats', authenticate, requireCelebrity, asyncHandler(getCelebrityStats));
celebrityRouter.get('/:id', asyncHandler(getCelebrity));
celebrityRouter.put('/me/profile', authenticate, requireCelebrity, asyncHandler(updateCelebrityProfile));
celebrityRouter.put('/me/services', authenticate, requireCelebrity, asyncHandler(updateCelebrityServices));
