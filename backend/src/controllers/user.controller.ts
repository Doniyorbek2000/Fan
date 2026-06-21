import { Response } from 'express';
import bcrypt from 'bcryptjs';
import { prisma } from '../utils/prisma';
import { AuthRequest } from '../middleware/auth.middleware';
import { AppError } from '../middleware/error.middleware';

export const getMe = async (req: AuthRequest, res: Response) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user!.id },
    include: { profile: true, wallet: true, fan: true, celebrity: true },
  });
  if (!user) throw new AppError(404, 'Topilmadi');
  res.json({ ...user, passwordHash: undefined });
};

export const updateMe = async (req: AuthRequest, res: Response) => {
  const { firstName, lastName, bio, displayName, avatarUrl, phone } = req.body;
  const [profile] = await Promise.all([
    prisma.profile.update({
      where: { userId: req.user!.id },
      data: { firstName, lastName, bio, displayName, avatarUrl },
    }),
    phone ? prisma.user.update({ where: { id: req.user!.id }, data: { phone } }) : Promise.resolve(null),
  ]);
  res.json(profile);
};

export const changePassword = async (req: AuthRequest, res: Response) => {
  const { currentPassword, newPassword } = req.body;
  const user = await prisma.user.findUnique({ where: { id: req.user!.id } });
  if (!user) throw new AppError(404, 'Topilmadi');
  const valid = await bcrypt.compare(currentPassword, user.passwordHash);
  if (!valid) throw new AppError(400, 'Joriy parol noto\'g\'ri');
  const hash = await bcrypt.hash(newPassword, 12);
  await prisma.user.update({ where: { id: req.user!.id }, data: { passwordHash: hash } });
  res.json({ message: 'Parol o\'zgartirildi' });
};
