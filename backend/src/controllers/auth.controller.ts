import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { prisma } from '../utils/prisma';
import { signAccessToken, signRefreshToken, verifyRefreshToken } from '../utils/jwt';
import { AppError } from '../middleware/error.middleware';
import { z } from 'zod';

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  role: z.enum(['FAN', 'CELEBRITY']).default('FAN'),
  phone: z.string().optional(),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const register = async (req: Request, res: Response) => {
  const data = registerSchema.parse(req.body);

  const existing = await prisma.user.findUnique({ where: { email: data.email } });
  if (existing) throw new AppError(409, 'Bu email allaqachon ro\'yxatdan o\'tgan');

  const passwordHash = await bcrypt.hash(data.password, 12);

  const user = await prisma.$transaction(async (tx) => {
    const u = await tx.user.create({
      data: {
        email: data.email,
        phone: data.phone,
        passwordHash,
        role: data.role,
        profile: {
          create: { firstName: data.firstName, lastName: data.lastName },
        },
        wallet: { create: {} },
      },
    });

    if (data.role === 'FAN') {
      await tx.fan.create({ data: { userId: u.id } });
    } else if (data.role === 'CELEBRITY') {
      await tx.celebrity.create({ data: { userId: u.id, category: 'Boshqa' } });
    }
    return u;
  });

  const accessToken = signAccessToken(user.id);
  const refreshToken = signRefreshToken(user.id);

  await prisma.session.create({
    data: {
      userId: user.id,
      token: refreshToken,
      device: req.headers['user-agent'],
      ip: req.ip,
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    },
  });

  res.status(201).json({
    message: 'Muvaffaqiyatli ro\'yxatdan o\'tildi',
    accessToken,
    refreshToken,
    user: { id: user.id, email: user.email, role: user.role },
  });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = loginSchema.parse(req.body);

  const user = await prisma.user.findUnique({
    where: { email },
    include: { profile: true },
  });
  if (!user) throw new AppError(401, 'Email yoki parol noto\'g\'ri');
  if (user.status === 'SUSPENDED') throw new AppError(403, 'Hisob bloklangan');

  const isValid = await bcrypt.compare(password, user.passwordHash);
  if (!isValid) throw new AppError(401, 'Email yoki parol noto\'g\'ri');

  const accessToken = signAccessToken(user.id);
  const refreshToken = signRefreshToken(user.id);

  await prisma.session.create({
    data: {
      userId: user.id,
      token: refreshToken,
      device: req.headers['user-agent'],
      ip: req.ip,
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    },
  });

  res.json({
    accessToken,
    refreshToken,
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
      name: `${user.profile?.firstName} ${user.profile?.lastName}`,
      avatarUrl: user.profile?.avatarUrl,
    },
  });
};

export const refresh = async (req: Request, res: Response) => {
  const { refreshToken } = req.body;
  if (!refreshToken) throw new AppError(401, 'Refresh token taqdim etilmagan');

  const payload = verifyRefreshToken(refreshToken);
  const session = await prisma.session.findUnique({ where: { token: refreshToken } });

  if (!session || session.expiresAt < new Date()) {
    throw new AppError(401, 'Token muddati tugagan');
  }

  const accessToken = signAccessToken(payload.userId);
  res.json({ accessToken });
};

export const logout = async (req: Request, res: Response) => {
  const { refreshToken } = req.body;
  if (refreshToken) {
    await prisma.session.deleteMany({ where: { token: refreshToken } });
  }
  res.json({ message: 'Muvaffaqiyatli chiqildi' });
};

export const forgotPassword = async (req: Request, res: Response) => {
  const { email } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return res.json({ message: 'Agar email mavjud bo\'lsa, OTP yuborildi' });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  await prisma.passwordReset.create({
    data: {
      userId: user.id,
      otp,
      expiresAt: new Date(Date.now() + 15 * 60 * 1000),
    },
  });

  // In production: send OTP via email/SMS
  console.log(`OTP for ${email}: ${otp}`);
  res.json({ message: 'OTP yuborildi' });
};

export const resetPassword = async (req: Request, res: Response) => {
  const { email, otp, newPassword } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new AppError(404, 'Foydalanuvchi topilmadi');

  const reset = await prisma.passwordReset.findFirst({
    where: {
      userId: user.id,
      otp,
      isUsed: false,
      expiresAt: { gt: new Date() },
    },
  });
  if (!reset) throw new AppError(400, 'OTP noto\'g\'ri yoki muddati tugagan');

  const passwordHash = await bcrypt.hash(newPassword, 12);
  await prisma.$transaction([
    prisma.user.update({ where: { id: user.id }, data: { passwordHash } }),
    prisma.passwordReset.update({ where: { id: reset.id }, data: { isUsed: true } }),
    prisma.session.deleteMany({ where: { userId: user.id } }),
  ]);

  res.json({ message: 'Parol muvaffaqiyatli o\'zgartirildi' });
};
