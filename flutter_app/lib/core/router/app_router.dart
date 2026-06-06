import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../features/auth/login_screen.dart';
import '../../features/auth/register_screen.dart';
import '../../features/auth/reset_password_screen.dart';
import '../../features/auth/security_settings_screen.dart';
import '../../features/home/home_screen.dart';
import '../../features/celebrity/celebrity_profile_screen.dart';
import '../../features/profile/fan_profile_screen.dart';
import '../../features/profile/edit_profile_screen.dart';
import '../../features/profile/settings_screen.dart';
import '../../features/messages/messages_list_screen.dart';
import '../../features/messages/chat_screen.dart';
import '../../features/bookings/bookings_screen.dart';
import '../../features/bookings/book_meeting_screen.dart';
import '../../features/wallet/wallet_screen.dart';
import '../../features/dashboard/celebrity_dashboard_screen.dart';
import '../../features/notifications/notifications_screen.dart';
import '../../features/live/live_stream_screen.dart';
import '../../features/call/video_call_screen.dart';
import '../../features/subscription/subscription_screen.dart';
import '../../features/analytics/analytics_screen.dart';
import '../../features/payment/checkout_screen.dart';
import '../../features/payment/payment_success_screen.dart';
import '../../features/verification/verification_screen.dart';

final GoRouter appRouter = GoRouter(
  initialLocation: '/login',
  routes: [
    GoRoute(
      path: '/login',
      builder: (context, state) => const LoginScreen(),
    ),
    GoRoute(
      path: '/register',
      builder: (context, state) => const RegisterScreen(),
    ),
    GoRoute(
      path: '/reset-password',
      builder: (context, state) => const ResetPasswordScreen(),
    ),
    GoRoute(
      path: '/home',
      builder: (context, state) => const HomeScreen(),
    ),
    GoRoute(
      path: '/celebrity',
      builder: (context, state) => const CelebrityProfileScreen(),
    ),
    GoRoute(
      path: '/fan-profile',
      builder: (context, state) => const FanProfileScreen(),
    ),
    GoRoute(
      path: '/edit-profile',
      builder: (context, state) => const EditProfileScreen(),
    ),
    GoRoute(
      path: '/settings',
      builder: (context, state) => const SettingsScreen(),
    ),
    GoRoute(
      path: '/security-settings',
      builder: (context, state) => const SecuritySettingsScreen(),
    ),
    GoRoute(
      path: '/messages',
      builder: (context, state) => const MessagesListScreen(),
    ),
    GoRoute(
      path: '/chat',
      builder: (context, state) => const ChatScreen(),
    ),
    GoRoute(
      path: '/bookings',
      builder: (context, state) => const BookingsScreen(),
    ),
    GoRoute(
      path: '/book-meeting',
      builder: (context, state) => const BookMeetingScreen(),
    ),
    GoRoute(
      path: '/wallet',
      builder: (context, state) => const WalletScreen(),
    ),
    GoRoute(
      path: '/dashboard',
      builder: (context, state) => const CelebrityDashboardScreen(),
    ),
    GoRoute(
      path: '/notifications',
      builder: (context, state) => const NotificationsScreen(),
    ),
    GoRoute(
      path: '/live-stream',
      builder: (context, state) => const LiveStreamScreen(),
    ),
    GoRoute(
      path: '/video-call',
      builder: (context, state) => const VideoCallScreen(),
    ),
    GoRoute(
      path: '/subscription',
      builder: (context, state) => const SubscriptionScreen(),
    ),
    GoRoute(
      path: '/analytics',
      builder: (context, state) => const AnalyticsScreen(),
    ),
    GoRoute(
      path: '/checkout',
      builder: (context, state) => const CheckoutScreen(),
    ),
    GoRoute(
      path: '/payment-success',
      builder: (context, state) => const PaymentSuccessScreen(),
    ),
    GoRoute(
      path: '/verification',
      builder: (context, state) => const VerificationScreen(),
    ),
  ],
  errorBuilder: (context, state) => Scaffold(
    backgroundColor: const Color(0xFF0B1326),
    body: Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const Icon(Icons.error_outline, color: Color(0xFFD0BCFF), size: 48),
          const SizedBox(height: 16),
          Text(
            'Sahifa topilmadi',
            style: TextStyle(color: const Color(0xFFDAE2FD), fontSize: 18),
          ),
          const SizedBox(height: 16),
          ElevatedButton(
            onPressed: () => context.go('/home'),
            child: const Text('Bosh sahifaga'),
          ),
        ],
      ),
    ),
  ),
);
