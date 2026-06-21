import { Router } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { authenticate } from '../middleware/auth.middleware';
import { getWallet } from '../controllers/wallet.controller';

export const walletRouter = Router();
walletRouter.use(authenticate);

walletRouter.get('/', asyncHandler(getWallet));
