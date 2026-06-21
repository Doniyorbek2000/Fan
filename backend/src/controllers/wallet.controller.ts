import { Response } from 'express';
import { prisma } from '../utils/prisma';
import { AuthRequest } from '../middleware/auth.middleware';

export const getWallet = async (req: AuthRequest, res: Response) => {
  const wallet = await prisma.wallet.findUnique({
    where: { userId: req.user!.id },
    include: { transactions: { orderBy: { createdAt: 'desc' }, take: 20 } },
  });
  res.json(wallet);
};
