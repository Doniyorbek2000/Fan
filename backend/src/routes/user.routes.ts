import { Router } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { authenticate } from '../middleware/auth.middleware';
import { prisma } from '../utils/prisma';
import { AppError } from '../middleware/error.middleware';

export const userRouter = Router();
userRouter.use(authenticate);

userRouter.get('/me', asyncHandler(async (req: any, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user.id },
    include: { profile: true, wallet: true, fan: true, celebrity: true },
  });
  if (!user) throw new AppError(404, 'Topilmadi');
  res.json({ ...user, passwordHash: undefined });
}));

userRouter.put('/me', asyncHandler(async (req: any, res) => {
  const { firstName, lastName, bio, displayName, avatarUrl, phone } = req.body;
  const [profile, user] = await Promise.all([
    prisma.profile.update({
      where: { userId: req.user.id },
      data: { firstName, lastName, bio, displayName, avatarUrl },
    }),
    phone ? prisma.user.update({ where: { id: req.user.id }, data: { phone } }) : Promise.resolve(null),
  ]);
  res.json(profile);
}));

userRouter.put('/me/password', asyncHandler(async (req: any, res) => {
  const bcrypt = await import('bcryptjs');
  const { currentPassword, newPassword } = req.body;
  const user = await prisma.user.findUnique({ where: { id: req.user.id } });
  if (!user) throw new AppError(404, 'Topilmadi');
  const valid = await bcrypt.compare(currentPassword, user.passwordHash);
  if (!valid) throw new AppError(400, 'Joriy parol noto\'g\'ri');
  const hash = await bcrypt.hash(newPassword, 12);
  await prisma.user.update({ where: { id: req.user.id }, data: { passwordHash: hash } });
  res.json({ message: 'Parol o\'zgartirildi' });
}));
