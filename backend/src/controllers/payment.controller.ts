import { Response } from 'express';
import { prisma } from '../utils/prisma';
import { AuthRequest } from '../middleware/auth.middleware';
import { AppError } from '../middleware/error.middleware';

export const getPaymentHistory = async (req: AuthRequest, res: Response) => {
  const wallet = await prisma.wallet.findUnique({ where: { userId: req.user!.id } });
  if (!wallet) throw new AppError(404, 'Hamyon topilmadi');
  const transactions = await prisma.transaction.findMany({
    where: { walletId: wallet.id },
    orderBy: { createdAt: 'desc' },
    take: 50,
  });
  res.json({ wallet, transactions });
};

export const deposit = async (req: AuthRequest, res: Response) => {
  const { amount, method } = req.body;
  if (amount < 10000) throw new AppError(400, 'Minimum 10,000 so\'m');
  const wallet = await prisma.wallet.findUnique({ where: { userId: req.user!.id } });
  if (!wallet) throw new AppError(404, 'Hamyon topilmadi');
  await prisma.$transaction([
    prisma.wallet.update({ where: { id: wallet.id }, data: { balance: { increment: amount }, totalEarned: { increment: amount } } }),
    prisma.transaction.create({ data: { walletId: wallet.id, type: 'DEPOSIT', amount, description: `${method} orqali to\'ldirish` } }),
  ]);
  res.json({ message: `${amount.toLocaleString()} so\'m muvaffaqiyatli qo\'shildi` });
};

export const withdraw = async (req: AuthRequest, res: Response) => {
  const { amount, cardNumber } = req.body;
  const wallet = await prisma.wallet.findUnique({ where: { userId: req.user!.id } });
  if (!wallet) throw new AppError(404, 'Hamyon topilmadi');
  if (wallet.balance < amount) throw new AppError(400, 'Yetarli mablag\' yo\'q');
  await prisma.$transaction([
    prisma.wallet.update({ where: { id: wallet.id }, data: { balance: { decrement: amount }, totalSpent: { increment: amount } } }),
    prisma.transaction.create({ data: { walletId: wallet.id, type: 'WITHDRAWAL', amount: -amount, description: `Karta ${cardNumber?.slice(-4)} ga yechish` } }),
  ]);
  res.json({ message: 'Yechib olish so\'rovi qabul qilindi' });
};
