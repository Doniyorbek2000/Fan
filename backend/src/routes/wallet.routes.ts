import { Router } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { authenticate } from '../middleware/auth.middleware';
import { prisma } from '../utils/prisma';

export const walletRouter = Router();
walletRouter.use(authenticate);

walletRouter.get('/', asyncHandler(async (req: any, res) => {
  const wallet = await prisma.wallet.findUnique({
    where: { userId: req.user.id },
    include: { transactions: { orderBy: { createdAt: 'desc' }, take: 20 } },
  });
  res.json(wallet);
}));
