import { PrismaClient, UserRole, UserStatus, VerificationStatus, BookingStatus, BookingType, PaymentStatus, TransactionType, ContentType, SubscriptionPlan } from '@prisma/client';

const prisma = new PrismaClient();

// Pre-hashed value for "Password123!" using bcryptjs with 10 rounds
const PASSWORD_HASH = '$2a$10$8KzaNdKwh2sMhUztic4VYeUyrSJdMBSTPf4F4gFJBnqKMYwG7NmLi';

async function main() {
  console.log('Seeding database...');

  // Clean existing data in reverse dependency order
  await prisma.notification.deleteMany();
  await prisma.message.deleteMany();
  await prisma.conversation.deleteMany();
  await prisma.review.deleteMany();
  await prisma.payment.deleteMany();
  await prisma.booking.deleteMany();
  await prisma.transaction.deleteMany();
  await prisma.content.deleteMany();
  await prisma.liveStream.deleteMany();
  await prisma.celebrityService.deleteMany();
  await prisma.celebrity.deleteMany();
  await prisma.fan.deleteMany();
  await prisma.adminProfile.deleteMany();
  await prisma.wallet.deleteMany();
  await prisma.session.deleteMany();
  await prisma.passwordReset.deleteMany();
  await prisma.profile.deleteMany();
  await prisma.user.deleteMany();

  console.log('Cleaned existing data.');

  // ─── ADMIN USERS ───────────────────────────────────────────
  const adminUsers = await Promise.all([
    prisma.user.create({
      data: {
        email: 'admin@fanmeet.uz',
        phone: '+998901001010',
        passwordHash: PASSWORD_HASH,
        role: UserRole.ADMIN,
        status: UserStatus.ACTIVE,
        verificationStatus: VerificationStatus.VERIFIED,
        profile: { create: { firstName: 'Rustam', lastName: 'Karimov', displayName: 'Admin Rustam', bio: 'FanMeet platformasi bosh administratori', avatarUrl: 'https://i.pravatar.cc/300?u=admin1' } },
        wallet: { create: { balance: 0, totalEarned: 0, totalSpent: 0 } },
        adminProfile: { create: { permissions: ['MANAGE_USERS', 'MANAGE_BOOKINGS', 'MANAGE_PAYMENTS', 'MANAGE_CONTENT', 'VIEW_ANALYTICS'] } },
      },
    }),
    prisma.user.create({
      data: {
        email: 'moderator@fanmeet.uz',
        phone: '+998901001011',
        passwordHash: PASSWORD_HASH,
        role: UserRole.ADMIN,
        status: UserStatus.ACTIVE,
        verificationStatus: VerificationStatus.VERIFIED,
        profile: { create: { firstName: 'Dilnoza', lastName: 'Umarova', displayName: 'Moderator Dilnoza', bio: 'Kontent moderatsiya bo\'limi', avatarUrl: 'https://i.pravatar.cc/300?u=admin2' } },
        wallet: { create: { balance: 0, totalEarned: 0, totalSpent: 0 } },
        adminProfile: { create: { permissions: ['MANAGE_USERS', 'MANAGE_CONTENT'] } },
      },
    }),
    prisma.user.create({
      data: {
        email: 'support@fanmeet.uz',
        phone: '+998901001012',
        passwordHash: PASSWORD_HASH,
        role: UserRole.ADMIN,
        status: UserStatus.ACTIVE,
        verificationStatus: VerificationStatus.VERIFIED,
        profile: { create: { firstName: 'Bobur', lastName: 'Toshmatov', displayName: 'Support Bobur', bio: 'Foydalanuvchi qo\'llab-quvvatlash', avatarUrl: 'https://i.pravatar.cc/300?u=admin3' } },
        wallet: { create: { balance: 0, totalEarned: 0, totalSpent: 0 } },
        adminProfile: { create: { permissions: ['MANAGE_USERS', 'VIEW_ANALYTICS'] } },
      },
    }),
  ]);

  console.log(`Created ${adminUsers.length} admin users.`);

  // ─── CELEBRITY USERS ───────────────────────────────────────
  const celebData = [
    { email: 'sherzod@fanmeet.uz', phone: '+998901002001', firstName: 'Sherzod', lastName: 'Abdullayev', displayName: 'Sherzod Official', bio: 'O\'zbek estrada yulduzi, xalq artisti', category: 'Musiqa', avatarUrl: 'https://i.pravatar.cc/300?u=celeb1', rating: 4.8, totalReviews: 156, followerCount: 52000 },
    { email: 'malika@fanmeet.uz', phone: '+998901002002', firstName: 'Malika', lastName: 'Rahimova', displayName: 'Malika R', bio: 'Aktrisa va model, kino yulduzi', category: 'Kino', avatarUrl: 'https://i.pravatar.cc/300?u=celeb2', rating: 4.6, totalReviews: 89, followerCount: 38000 },
    { email: 'jasur@fanmeet.uz', phone: '+998901002003', firstName: 'Jasur', lastName: 'Mirzayev', displayName: 'Jasur Stand-Up', bio: 'Stand-up komediyachi va shoumen', category: 'Komediya', avatarUrl: 'https://i.pravatar.cc/300?u=celeb3', rating: 4.9, totalReviews: 203, followerCount: 75000 },
    { email: 'nargiza@fanmeet.uz', phone: '+998901002004', firstName: 'Nargiza', lastName: 'Saidova', displayName: 'Nargiza Fit', bio: 'Fitness murabbiy va sog\'lom turmush tarzi blogeri', category: 'Sport', avatarUrl: 'https://i.pravatar.cc/300?u=celeb4', rating: 4.7, totalReviews: 67, followerCount: 29000 },
    { email: 'ulugbek@fanmeet.uz', phone: '+998901002005', firstName: 'Ulugbek', lastName: 'Nazarov', displayName: 'Ulugbek Tech', bio: 'IT mutaxassis va texnologiya blogeri', category: 'Texnologiya', avatarUrl: 'https://i.pravatar.cc/300?u=celeb5', rating: 4.5, totalReviews: 45, followerCount: 21000 },
  ];

  const celebrities: Array<{ userId: string; celebId: string }> = [];

  for (const c of celebData) {
    const user = await prisma.user.create({
      data: {
        email: c.email,
        phone: c.phone,
        passwordHash: PASSWORD_HASH,
        role: UserRole.CELEBRITY,
        status: UserStatus.ACTIVE,
        verificationStatus: VerificationStatus.VERIFIED,
        profile: { create: { firstName: c.firstName, lastName: c.lastName, displayName: c.displayName, bio: c.bio, avatarUrl: c.avatarUrl, location: 'Toshkent, O\'zbekiston', website: `https://${c.firstName.toLowerCase()}.uz` } },
        wallet: { create: { balance: Math.floor(Math.random() * 5000000) + 1000000, totalEarned: Math.floor(Math.random() * 20000000) + 5000000, totalSpent: 0 } },
        celebrity: {
          create: {
            category: c.category,
            rating: c.rating,
            totalReviews: c.totalReviews,
            isAvailable: true,
            responseTime: '24 soat ichida',
            totalEarnings: Math.floor(Math.random() * 15000000) + 3000000,
            monthlyEarnings: Math.floor(Math.random() * 3000000) + 500000,
            totalBookings: Math.floor(Math.random() * 200) + 50,
            completedBookings: Math.floor(Math.random() * 150) + 30,
            followerCount: c.followerCount,
          },
        },
      },
      include: { celebrity: true },
    });
    celebrities.push({ userId: user.id, celebId: user.celebrity!.id });
  }

  console.log(`Created ${celebrities.length} celebrity users.`);

  // ─── CELEBRITY SERVICES ────────────────────────────────────
  const servicePrices: Record<BookingType, { min: number; max: number; duration: number }> = {
    VIDEO_CALL: { min: 200000, max: 500000, duration: 30 },
    CHAT: { min: 50000, max: 150000, duration: 60 },
    VIDEO_MESSAGE: { min: 100000, max: 300000, duration: 5 },
    LIVE_MEETUP: { min: 500000, max: 2000000, duration: 60 },
  };

  const serviceTypes: BookingType[] = [BookingType.VIDEO_CALL, BookingType.CHAT, BookingType.VIDEO_MESSAGE];

  for (const celeb of celebrities) {
    for (const type of serviceTypes) {
      const priceRange = servicePrices[type];
      await prisma.celebrityService.create({
        data: {
          celebrityId: celeb.celebId,
          type,
          price: Math.floor(Math.random() * (priceRange.max - priceRange.min) + priceRange.min),
          duration: priceRange.duration,
          description: type === 'VIDEO_CALL' ? 'Shaxsiy video qo\'ng\'iroq' : type === 'CHAT' ? 'Xabar orqali muloqot' : 'Shaxsiy video xabar',
          isActive: true,
        },
      });
    }
  }

  console.log('Created celebrity services.');

  // ─── FAN USERS ─────────────────────────────────────────────
  const fanData = [
    { email: 'aziz@mail.uz', phone: '+998901003001', firstName: 'Aziz', lastName: 'Qodirov', displayName: 'Aziz_fan' },
    { email: 'gulnora@mail.uz', phone: '+998901003002', firstName: 'Gulnora', lastName: 'Tursunova', displayName: 'Guli_2000' },
    { email: 'sardor@mail.uz', phone: '+998901003003', firstName: 'Sardor', lastName: 'Olimov', displayName: 'Sardor_OG' },
    { email: 'kamola@mail.uz', phone: '+998901003004', firstName: 'Kamola', lastName: 'Yusupova', displayName: 'Kamola_Y' },
    { email: 'bekzod@mail.uz', phone: '+998901003005', firstName: 'Bekzod', lastName: 'Hamidov', displayName: 'Bek_fan' },
    { email: 'zulfiya@mail.uz', phone: '+998901003006', firstName: 'Zulfiya', lastName: 'Ergasheva', displayName: 'Zulya_UZ' },
    { email: 'timur@mail.uz', phone: '+998901003007', firstName: 'Timur', lastName: 'Sharipov', displayName: 'Timur_007' },
    { email: 'madina@mail.uz', phone: '+998901003008', firstName: 'Madina', lastName: 'Aliyeva', displayName: 'Madina_A' },
    { email: 'doston@mail.uz', phone: '+998901003009', firstName: 'Doston', lastName: 'Ruziyev', displayName: 'Doston_R' },
    { email: 'nodira@mail.uz', phone: '+998901003010', firstName: 'Nodira', lastName: 'Kamalova', displayName: 'Nodira_K' },
  ];

  const subscriptions = [SubscriptionPlan.BASIC, SubscriptionPlan.PREMIUM, SubscriptionPlan.VIP, null];
  const fans: Array<{ userId: string; fanId: string }> = [];

  for (let i = 0; i < fanData.length; i++) {
    const f = fanData[i];
    const sub = subscriptions[i % subscriptions.length];
    const user = await prisma.user.create({
      data: {
        email: f.email,
        phone: f.phone,
        passwordHash: PASSWORD_HASH,
        role: UserRole.FAN,
        status: UserStatus.ACTIVE,
        verificationStatus: i < 6 ? VerificationStatus.VERIFIED : VerificationStatus.UNVERIFIED,
        profile: { create: { firstName: f.firstName, lastName: f.lastName, displayName: f.displayName, bio: `FanMeet foydalanuvchisi - ${f.firstName}`, avatarUrl: `https://i.pravatar.cc/300?u=fan${i + 1}`, location: 'O\'zbekiston' } },
        wallet: { create: { balance: Math.floor(Math.random() * 2000000) + 100000, totalEarned: Math.floor(Math.random() * 5000000), totalSpent: Math.floor(Math.random() * 3000000) } },
        fan: {
          create: {
            subscription: sub,
            subscriptionEnd: sub ? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) : undefined,
            xpPoints: Math.floor(Math.random() * 5000),
          },
        },
      },
      include: { fan: true },
    });
    fans.push({ userId: user.id, fanId: user.fan!.id });
  }

  console.log(`Created ${fans.length} fan users.`);

  // ─── BOOKINGS ──────────────────────────────────────────────
  const bookingStatuses: BookingStatus[] = [BookingStatus.PENDING, BookingStatus.CONFIRMED, BookingStatus.COMPLETED, BookingStatus.CANCELLED, BookingStatus.REFUNDED];
  const bookingTypes: BookingType[] = [BookingType.VIDEO_CALL, BookingType.CHAT, BookingType.VIDEO_MESSAGE];

  const bookings: Array<{ id: string; fanId: string; celebrityId: string; price: number; status: BookingStatus }> = [];

  for (let i = 0; i < 15; i++) {
    const fan = fans[i % fans.length];
    const celeb = celebrities[i % celebrities.length];
    const status = bookingStatuses[i % bookingStatuses.length];
    const type = bookingTypes[i % bookingTypes.length];
    const price = Math.floor(Math.random() * 400000) + 100000;
    const scheduledAt = new Date(Date.now() + (i - 7) * 24 * 60 * 60 * 1000);

    const booking = await prisma.booking.create({
      data: {
        fanId: fan.fanId,
        celebrityId: celeb.celebId,
        type,
        status,
        price,
        scheduledAt,
        completedAt: status === BookingStatus.COMPLETED ? new Date(scheduledAt.getTime() + 30 * 60 * 1000) : undefined,
        message: `Salom! Siz bilan ${type === 'VIDEO_CALL' ? 'video qo\'ng\'iroq' : type === 'CHAT' ? 'chat' : 'video xabar'} orqali bog\'lanmoqchiman.`,
        notes: status === BookingStatus.CANCELLED ? 'Muxlis tomonidan bekor qilindi' : status === BookingStatus.COMPLETED ? 'Muvaffaqiyatli yakunlandi' : undefined,
      },
    });

    bookings.push({ id: booking.id, fanId: fan.fanId, celebrityId: celeb.celebId, price, status });
  }

  console.log(`Created ${bookings.length} bookings.`);

  // ─── PAYMENTS ──────────────────────────────────────────────
  const paymentStatuses: PaymentStatus[] = [PaymentStatus.COMPLETED, PaymentStatus.COMPLETED, PaymentStatus.PENDING, PaymentStatus.FAILED, PaymentStatus.REFUNDED];
  const paymentMethods = ['WALLET', 'PAYME', 'CLICK', 'UZCARD', 'HUMO'];

  for (let i = 0; i < 10; i++) {
    const booking = bookings[i];
    const paymentStatus = paymentStatuses[i % paymentStatuses.length];

    await prisma.payment.create({
      data: {
        bookingId: booking.id,
        amount: booking.price,
        status: paymentStatus,
        method: paymentMethods[i % paymentMethods.length],
        transactionId: `TXN-${Date.now()}-${i.toString().padStart(4, '0')}`,
        processedAt: paymentStatus === PaymentStatus.COMPLETED ? new Date() : undefined,
      },
    });
  }

  console.log('Created 10 payments.');

  // ─── CONVERSATIONS & MESSAGES ──────────────────────────────
  const conversationPairs = [
    { fanIdx: 0, celebIdx: 0 },
    { fanIdx: 1, celebIdx: 1 },
    { fanIdx: 2, celebIdx: 2 },
    { fanIdx: 3, celebIdx: 0 },
    { fanIdx: 4, celebIdx: 3 },
  ];

  const sampleMessages = [
    'Assalomu alaykum! Sizning ijodingizni juda yaxshi ko\'raman!',
    'Rahmat! Menga murojaat qilganingizdan xursandman.',
    'Video qo\'ng\'iroq qachon bo\'lishi mumkin?',
    'Ertaga soat 15:00 da bo\'sh vaqtim bor.',
    'Ajoyib! Men tayyor bo\'laman.',
    'Yangi qo\'shig\'ingiz juda zo\'r chiqdi!',
    'Rahmat, yana yangiliklari bo\'ladi!',
    'Siz bilan uchrashish mening orzuyim edi.',
    'Orzularingiz amalga oshsin!',
    'Keyingi konsertingiz qachon bo\'ladi?',
  ];

  for (const pair of conversationPairs) {
    const fan = fans[pair.fanIdx];
    const celeb = celebrities[pair.celebIdx];

    const conversation = await prisma.conversation.create({
      data: {
        fanId: fan.userId,
        celebrityId: celeb.userId,
        lastMessage: sampleMessages[1],
        lastMessageAt: new Date(),
        fanUnreadCount: 1,
        celUnreadCount: 0,
      },
    });

    // Create 2-4 messages per conversation
    const messageCount = 2 + Math.floor(Math.random() * 3);
    for (let m = 0; m < messageCount; m++) {
      const isFanSender = m % 2 === 0;
      await prisma.message.create({
        data: {
          conversationId: conversation.id,
          senderId: isFanSender ? fan.userId : celeb.userId,
          content: sampleMessages[(pair.fanIdx * 2 + m) % sampleMessages.length],
          isRead: m < messageCount - 1,
          readAt: m < messageCount - 1 ? new Date() : undefined,
          createdAt: new Date(Date.now() - (messageCount - m) * 3600 * 1000),
        },
      });
    }
  }

  console.log('Created 5 conversations with messages.');

  // ─── NOTIFICATIONS ─────────────────────────────────────────
  const notificationTypes = [
    { type: 'NEW_BOOKING', title: 'Yangi band qilish', body: 'Sizda yangi video qo\'ng\'iroq so\'rovi mavjud' },
    { type: 'BOOKING_CONFIRMED', title: 'Band qilish tasdiqlandi', body: 'Sizning band qilishingiz mashhur tomonidan tasdiqlandi' },
    { type: 'BOOKING_COMPLETED', title: 'Band qilish yakunlandi', body: 'Video qo\'ng\'iroq muvaffaqiyatli yakunlandi' },
    { type: 'PAYMENT_RECEIVED', title: 'To\'lov qabul qilindi', body: 'Hamyoningizga mablag\' tushdi' },
    { type: 'NEW_MESSAGE', title: 'Yangi xabar', body: 'Sizga yangi xabar keldi' },
    { type: 'LIVE_STREAM', title: 'Jonli efir', body: 'Sizning yoqtirgan mashhur jonli efir boshladi' },
    { type: 'NEW_REVIEW', title: 'Yangi sharh', body: 'Sizga yangi sharh qoldirildi' },
    { type: 'SUBSCRIPTION_EXPIRING', title: 'Obuna tugaydi', body: 'Sizning obunangiz 3 kun ichida tugaydi' },
    { type: 'WELCOME', title: 'Xush kelibsiz!', body: 'FanMeet platformasiga xush kelibsiz!' },
    { type: 'PROMOTION', title: 'Maxsus taklif', body: 'Premium obunaga 20% chegirma!' },
  ];

  for (let i = 0; i < 10; i++) {
    const isForFan = i % 2 === 0;
    const userId = isForFan ? fans[i % fans.length].userId : celebrities[i % celebrities.length].userId;
    const notif = notificationTypes[i];

    await prisma.notification.create({
      data: {
        userId,
        type: notif.type,
        title: notif.title,
        body: notif.body,
        data: i < 5 ? { bookingId: bookings[i]?.id } : undefined,
        isRead: i < 5,
        readAt: i < 5 ? new Date() : undefined,
        createdAt: new Date(Date.now() - i * 3600 * 1000),
      },
    });
  }

  console.log('Created 10 notifications.');

  // ─── LIVE STREAMS ──────────────────────────────────────────
  const streamData = [
    { celebIdx: 0, title: 'Yangi albom haqida suhbat', description: 'Yangi albomim haqida suhbatlashamiz va savollaringizga javob beraman', isPremium: false, isLive: true },
    { celebIdx: 2, title: 'Stand-up shou - Maxsus efir', description: 'Bugungi maxsus stand-up shou!', isPremium: true, isLive: true },
    { celebIdx: 3, title: 'Ertalabki mashqlar', description: 'Birga ertalabki mashqlarni bajaramiz', isPremium: false, isLive: false },
  ];

  for (const s of streamData) {
    await prisma.liveStream.create({
      data: {
        celebrityId: celebrities[s.celebIdx].celebId,
        title: s.title,
        description: s.description,
        isPremium: s.isPremium,
        isLive: s.isLive,
        viewerCount: s.isLive ? Math.floor(Math.random() * 500) + 50 : 0,
        peakViewers: Math.floor(Math.random() * 1000) + 100,
        startedAt: s.isLive ? new Date(Date.now() - 30 * 60 * 1000) : new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        endedAt: s.isLive ? undefined : new Date(Date.now() - 2 * 24 * 60 * 60 * 1000 + 90 * 60 * 1000),
        duration: s.isLive ? undefined : 5400,
      },
    });
  }

  console.log('Created 3 live streams.');

  // ─── CONTENT ───────────────────────────────────────────────
  const contentData = [
    { celebIdx: 0, title: 'Yangi qo\'shiq - "Muhabbat"', description: 'Yangi qo\'shigimning premyerasi', type: ContentType.VIDEO, isPremium: false },
    { celebIdx: 0, title: 'Sahna ortida', description: 'Konsert tayyorgarligi', type: ContentType.IMAGE, isPremium: true },
    { celebIdx: 1, title: 'Kino sahna ortida', description: 'Yangi filmdagi suratga olish jarayoni', type: ContentType.VIDEO, isPremium: false },
    { celebIdx: 2, title: 'Eng kulgili lahzalar', description: 'Stand-up shoularimdan eng kulgili lahzalar', type: ContentType.VIDEO, isPremium: false },
    { celebIdx: 4, title: 'Yangi iPhone sharhi', description: 'Eng yangi iPhone texnologiyasi sharhi', type: ContentType.VIDEO, isPremium: true },
  ];

  for (let i = 0; i < contentData.length; i++) {
    const c = contentData[i];
    await prisma.content.create({
      data: {
        celebrityId: celebrities[c.celebIdx].celebId,
        title: c.title,
        description: c.description,
        type: c.type,
        url: `https://cdn.fanmeet.uz/content/${c.type.toLowerCase()}/${i + 1}.${c.type === ContentType.VIDEO ? 'mp4' : c.type === ContentType.IMAGE ? 'jpg' : 'mp3'}`,
        thumbnailUrl: `https://cdn.fanmeet.uz/thumbnails/${i + 1}.jpg`,
        isPremium: c.isPremium,
        views: Math.floor(Math.random() * 10000) + 500,
        likes: Math.floor(Math.random() * 2000) + 100,
        isPublished: true,
        publishedAt: new Date(Date.now() - i * 2 * 24 * 60 * 60 * 1000),
      },
    });
  }

  console.log('Created 5 content items.');
  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
