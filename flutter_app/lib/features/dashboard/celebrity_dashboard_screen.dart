import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:cached_network_image/cached_network_image.dart';
import '../../core/theme/app_theme.dart';
import '../../core/widgets/common_widgets.dart';

class CelebrityDashboardScreen extends StatefulWidget {
  const CelebrityDashboardScreen({super.key});

  @override
  State<CelebrityDashboardScreen> createState() =>
      _CelebrityDashboardScreenState();
}

class _CelebrityDashboardScreenState extends State<CelebrityDashboardScreen>
    with TickerProviderStateMixin {
  int _currentNavIndex = 0;
  bool _isOnline = true;
  final int _pendingRequests = 7;

  // Service toggles
  bool _videoMessageOn = true;
  bool _chatOn = true;
  bool _liveCallOn = false;
  bool _meetingOn = false;

  // Countdown timer state
  late Timer _countdownTimer;
  Duration _timeUntilSession =
      const Duration(hours: 2, minutes: 34, seconds: 17);

  // Bar chart data (mock weekly earnings in thousands)
  final List<double> _weeklyEarnings = [180, 220, 145, 310, 280, 390, 245];
  final List<String> _weekDays = ['Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh', 'Ya'];

  late AnimationController _pulseController;
  late Animation<double> _pulseAnimation;

  @override
  void initState() {
    super.initState();
    _startCountdown();
    _pulseController = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 2),
    )..repeat(reverse: true);
    _pulseAnimation = Tween<double>(begin: 0.8, end: 1.0).animate(
      CurvedAnimation(parent: _pulseController, curve: Curves.easeInOut),
    );
  }

  void _startCountdown() {
    _countdownTimer = Timer.periodic(const Duration(seconds: 1), (_) {
      if (!mounted) return;
      setState(() {
        if (_timeUntilSession.inSeconds > 0) {
          _timeUntilSession = _timeUntilSession - const Duration(seconds: 1);
        }
      });
    });
  }

  String _formatDuration(Duration d) {
    final h = d.inHours.toString().padLeft(2, '0');
    final m = (d.inMinutes % 60).toString().padLeft(2, '0');
    final s = (d.inSeconds % 60).toString().padLeft(2, '0');
    return '$h:$m:$s';
  }

  @override
  void dispose() {
    _countdownTimer.cancel();
    _pulseController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      body: SafeArea(
        child: Column(
          children: [
            Expanded(
              child: SingleChildScrollView(
                padding: EdgeInsets.symmetric(horizontal: 16.w),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    SizedBox(height: 16.h),
                    _buildHeader(),
                    SizedBox(height: 20.h),
                    _buildEarningsCard(),
                    SizedBox(height: 16.h),
                    _buildNextSessionCard(),
                    SizedBox(height: 20.h),
                    _buildServicesGrid(),
                    SizedBox(height: 16.h),
                    _buildPendingRequestsBanner(),
                    SizedBox(height: 24.h),
                  ],
                ),
              ),
            ),
            AppBottomNav(
              currentIndex: _currentNavIndex,
              onTap: (i) => setState(() => _currentNavIndex = i),
              isCelebrity: true,
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildHeader() {
    return Row(
      children: [
        // Avatar with animated online ring
        Stack(
          children: [
            Container(
              padding: EdgeInsets.all(2.w),
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                gradient: _isOnline
                    ? const LinearGradient(
                        colors: [Color(0xFF4CD7F6), Color(0xFFD0BCFF)],
                      )
                    : null,
                color: _isOnline ? null : AppColors.surfaceContainerHigh,
              ),
              child: NetworkAvatarImage(
                imageUrl: 'https://picsum.photos/seed/celeb1/200/200',
                radius: 28,
              ),
            ),
            Positioned(
              bottom: 1,
              right: 1,
              child: AnimatedBuilder(
                animation: _pulseAnimation,
                builder: (_, __) => Transform.scale(
                  scale: _isOnline ? _pulseAnimation.value : 1.0,
                  child: Container(
                    width: 12.w,
                    height: 12.w,
                    decoration: BoxDecoration(
                      color: _isOnline
                          ? AppColors.tertiary
                          : AppColors.onSurfaceVariant,
                      shape: BoxShape.circle,
                      border:
                          Border.all(color: AppColors.background, width: 2),
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
        SizedBox(width: 12.w),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  Text(
                    'Dilnoza Yusupova',
                    style: GoogleFonts.montserrat(
                      fontSize: 17.sp,
                      fontWeight: FontWeight.w700,
                      color: AppColors.onSurface,
                    ),
                  ),
                  SizedBox(width: 6.w),
                  const VerifiedBadge(size: 16),
                ],
              ),
              SizedBox(height: 2.h),
              Text(
                _isOnline ? 'Onlayn — faol' : 'Oflayn',
                style: GoogleFonts.inter(
                  fontSize: 12.sp,
                  color: _isOnline
                      ? AppColors.tertiary
                      : AppColors.onSurfaceVariant,
                ),
              ),
            ],
          ),
        ),
        // Online/Offline toggle
        Column(
          children: [
            Text(
              _isOnline ? 'Online' : 'Offline',
              style: GoogleFonts.inter(
                fontSize: 11.sp,
                fontWeight: FontWeight.w500,
                color: _isOnline
                    ? AppColors.tertiary
                    : AppColors.onSurfaceVariant,
              ),
            ),
            SizedBox(height: 2.h),
            Transform.scale(
              scale: 0.85,
              child: Switch(
                value: _isOnline,
                onChanged: (v) => setState(() => _isOnline = v),
                activeColor: AppColors.tertiary,
                activeTrackColor: AppColors.tertiary.withOpacity(0.3),
                inactiveThumbColor: AppColors.onSurfaceVariant,
                inactiveTrackColor: AppColors.surfaceContainerHigh,
              ),
            ),
          ],
        ),
        SizedBox(width: 4.w),
        // Notification bell with badge
        Stack(
          clipBehavior: Clip.none,
          children: [
            IconButton(
              onPressed: () {},
              icon: Icon(
                Icons.notifications_outlined,
                color: AppColors.onSurface,
                size: 24.sp,
              ),
            ),
            if (_pendingRequests > 0)
              Positioned(
                top: 6,
                right: 6,
                child: Container(
                  width: 16.w,
                  height: 16.w,
                  decoration: const BoxDecoration(
                    color: AppColors.secondary,
                    shape: BoxShape.circle,
                  ),
                  child: Center(
                    child: Text(
                      '$_pendingRequests',
                      style: GoogleFonts.inter(
                        fontSize: 9.sp,
                        fontWeight: FontWeight.w700,
                        color: AppColors.onSecondary,
                      ),
                    ),
                  ),
                ),
              ),
          ],
        ),
      ],
    );
  }

  Widget _buildEarningsCard() {
    final maxVal = _weeklyEarnings.reduce((a, b) => a > b ? a : b);

    return Container(
      padding: EdgeInsets.all(20.w),
      decoration: BoxDecoration(
        gradient: const LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Color(0xFF2A1A5E), Color(0xFF3D1040)],
        ),
        borderRadius: BorderRadius.circular(20.r),
        border: Border.all(color: AppColors.primary.withOpacity(0.25)),
        boxShadow: [
          BoxShadow(
            color: AppColors.primary.withOpacity(0.15),
            blurRadius: 24,
            spreadRadius: 0,
            offset: const Offset(0, 8),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Bugungi daromad',
                    style: GoogleFonts.inter(
                      fontSize: 12.sp,
                      color: AppColors.onSurfaceVariant,
                    ),
                  ),
                  SizedBox(height: 4.h),
                  Text(
                    "2,450,000 so'm",
                    style: GoogleFonts.montserrat(
                      fontSize: 24.sp,
                      fontWeight: FontWeight.w800,
                      color: AppColors.onSurface,
                    ),
                  ),
                ],
              ),
              Container(
                padding:
                    EdgeInsets.symmetric(horizontal: 10.w, vertical: 6.h),
                decoration: BoxDecoration(
                  color: AppColors.tertiary.withOpacity(0.15),
                  borderRadius: BorderRadius.circular(100.r),
                  border: Border.all(
                      color: AppColors.tertiary.withOpacity(0.4)),
                ),
                child: Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Icon(Icons.trending_up_rounded,
                        color: AppColors.tertiary, size: 14.sp),
                    SizedBox(width: 4.w),
                    Text(
                      '+12% bu hafta',
                      style: GoogleFonts.inter(
                        fontSize: 11.sp,
                        fontWeight: FontWeight.w600,
                        color: AppColors.tertiary,
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
          SizedBox(height: 20.h),
          // Bar chart
          Row(
            crossAxisAlignment: CrossAxisAlignment.end,
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: List.generate(_weeklyEarnings.length, (i) {
              final isToday = i == 5;
              final barH = (_weeklyEarnings[i] / maxVal) * 60.h;
              return Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  if (isToday)
                    Padding(
                      padding: EdgeInsets.only(bottom: 3.h),
                      child: Container(
                        width: 4.w,
                        height: 4.w,
                        decoration: BoxDecoration(
                          color: AppColors.secondary,
                          shape: BoxShape.circle,
                        ),
                      ),
                    )
                  else
                    SizedBox(height: 7.h),
                  AnimatedContainer(
                    duration: const Duration(milliseconds: 600),
                    curve: Curves.easeOutCubic,
                    width: 28.w,
                    height: barH,
                    decoration: BoxDecoration(
                      gradient: isToday
                          ? const LinearGradient(
                              begin: Alignment.bottomCenter,
                              end: Alignment.topCenter,
                              colors: [
                                Color(0xFFD0BCFF),
                                Color(0xFFFFB0CD),
                              ],
                            )
                          : LinearGradient(
                              begin: Alignment.bottomCenter,
                              end: Alignment.topCenter,
                              colors: [
                                AppColors.surfaceContainerHighest,
                                AppColors.surfaceContainerHigh,
                              ],
                            ),
                      borderRadius: BorderRadius.circular(6.r),
                    ),
                  ),
                  SizedBox(height: 6.h),
                  Text(
                    _weekDays[i],
                    style: GoogleFonts.inter(
                      fontSize: 10.sp,
                      color: isToday
                          ? AppColors.primary
                          : AppColors.onSurfaceVariant,
                      fontWeight: isToday
                          ? FontWeight.w700
                          : FontWeight.w400,
                    ),
                  ),
                ],
              );
            }),
          ),
          SizedBox(height: 16.h),
          // Stats row
          Row(
            children: [
              _buildEarningsStat('Buyurtmalar', '18'),
              _buildEarningsDivider(),
              _buildEarningsStat("O'rtacha", "136k so'm"),
              _buildEarningsDivider(),
              _buildEarningsStat('Reyting', '4.9 ★'),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildEarningsStat(String label, String value) {
    return Expanded(
      child: Column(
        children: [
          Text(
            value,
            style: GoogleFonts.montserrat(
              fontSize: 13.sp,
              fontWeight: FontWeight.w700,
              color: AppColors.onSurface,
            ),
            textAlign: TextAlign.center,
          ),
          SizedBox(height: 2.h),
          Text(
            label,
            style: GoogleFonts.inter(
              fontSize: 10.sp,
              color: AppColors.onSurfaceVariant,
            ),
            textAlign: TextAlign.center,
          ),
        ],
      ),
    );
  }

  Widget _buildEarningsDivider() {
    return Container(width: 1, height: 28.h, color: AppColors.glassBorder);
  }

  Widget _buildNextSessionCard() {
    return GlassCard(
      padding: EdgeInsets.all(16.w),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Row(
                children: [
                  Container(
                    width: 8.w,
                    height: 8.w,
                    decoration: BoxDecoration(
                      color: AppColors.tertiary,
                      shape: BoxShape.circle,
                    ),
                  ),
                  SizedBox(width: 8.w),
                  Text(
                    'Keyingi sessiya',
                    style: GoogleFonts.inter(
                      fontSize: 13.sp,
                      fontWeight: FontWeight.w600,
                      color: AppColors.onSurfaceVariant,
                    ),
                  ),
                ],
              ),
              // Countdown
              Container(
                padding:
                    EdgeInsets.symmetric(horizontal: 10.w, vertical: 4.h),
                decoration: BoxDecoration(
                  color: AppColors.primaryContainer.withOpacity(0.2),
                  borderRadius: BorderRadius.circular(100.r),
                  border: Border.all(
                      color: AppColors.primary.withOpacity(0.4)),
                ),
                child: Text(
                  _formatDuration(_timeUntilSession),
                  style: GoogleFonts.inter(
                    fontSize: 13.sp,
                    fontWeight: FontWeight.w700,
                    color: AppColors.primary,
                    fontFeatures: const [FontFeature.tabularFigures()],
                  ),
                ),
              ),
            ],
          ),
          SizedBox(height: 14.h),
          Row(
            children: [
              NetworkAvatarImage(
                imageUrl: 'https://picsum.photos/seed/fan42/200/200',
                radius: 22,
              ),
              SizedBox(width: 12.w),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        Text(
                          'Aziz Karimov',
                          style: GoogleFonts.montserrat(
                            fontSize: 15.sp,
                            fontWeight: FontWeight.w700,
                            color: AppColors.onSurface,
                          ),
                        ),
                        SizedBox(width: 6.w),
                        Container(
                          padding: EdgeInsets.symmetric(
                              horizontal: 7.w, vertical: 2.h),
                          decoration: BoxDecoration(
                            color: AppColors.secondary.withOpacity(0.2),
                            borderRadius: BorderRadius.circular(100.r),
                          ),
                          child: Text(
                            'Premium',
                            style: GoogleFonts.inter(
                              fontSize: 9.sp,
                              fontWeight: FontWeight.w600,
                              color: AppColors.secondary,
                            ),
                          ),
                        ),
                      ],
                    ),
                    SizedBox(height: 3.h),
                    Row(
                      children: [
                        Icon(Icons.videocam_outlined,
                            color: AppColors.tertiary, size: 13.sp),
                        SizedBox(width: 4.w),
                        Text(
                          "Video Qo'ng'iroq • 30 daqiqa",
                          style: GoogleFonts.inter(
                            fontSize: 12.sp,
                            color: AppColors.onSurfaceVariant,
                          ),
                        ),
                      ],
                    ),
                    SizedBox(height: 2.h),
                    Row(
                      children: [
                        Icon(Icons.calendar_today_outlined,
                            color: AppColors.onSurfaceVariant,
                            size: 11.sp),
                        SizedBox(width: 4.w),
                        Text(
                          'Bugun, 15:30 — 16:00',
                          style: GoogleFonts.inter(
                            fontSize: 11.sp,
                            color: AppColors.onSurfaceVariant,
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
              GestureDetector(
                onTap: () {},
                child: Container(
                  padding: EdgeInsets.all(10.w),
                  decoration: BoxDecoration(
                    gradient: AppGradients.primary,
                    borderRadius: BorderRadius.circular(12.r),
                    boxShadow: [
                      BoxShadow(
                          color: AppColors.primaryGlow, blurRadius: 12)
                    ],
                  ),
                  child: Icon(Icons.play_arrow_rounded,
                      color: AppColors.onPrimary, size: 20.sp),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildServicesGrid() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Xizmatlar',
          style: GoogleFonts.montserrat(
            fontSize: 16.sp,
            fontWeight: FontWeight.w700,
            color: AppColors.onSurface,
          ),
        ),
        SizedBox(height: 12.h),
        GridView.count(
          crossAxisCount: 2,
          crossAxisSpacing: 12.w,
          mainAxisSpacing: 12.h,
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          childAspectRatio: 1.55,
          children: [
            _buildServiceTile(
              icon: Icons.video_camera_back_outlined,
              label: 'Video Xabar',
              price: "50,000 so'm",
              isOn: _videoMessageOn,
              onToggle: (v) => setState(() => _videoMessageOn = v),
              color: AppColors.primary,
            ),
            _buildServiceTile(
              icon: Icons.chat_bubble_outline_rounded,
              label: 'Chat',
              price: "20,000 so'm",
              isOn: _chatOn,
              onToggle: (v) => setState(() => _chatOn = v),
              color: AppColors.secondary,
            ),
            _buildServiceTile(
              icon: Icons.video_call_outlined,
              label: "Jonli Qo'ng'iroq",
              price: "150,000 so'm",
              isOn: _liveCallOn,
              onToggle: (v) => setState(() => _liveCallOn = v),
              color: AppColors.tertiary,
            ),
            _buildServiceTile(
              icon: Icons.handshake_outlined,
              label: 'Uchrashuv',
              price: "500,000 so'm",
              isOn: _meetingOn,
              onToggle: (v) => setState(() => _meetingOn = v),
              color: const Color(0xFFFFD700),
            ),
          ],
        ),
      ],
    );
  }

  Widget _buildServiceTile({
    required IconData icon,
    required String label,
    required String price,
    required bool isOn,
    required ValueChanged<bool> onToggle,
    required Color color,
  }) {
    return Container(
      padding: EdgeInsets.all(14.w),
      decoration: BoxDecoration(
        color: isOn ? color.withOpacity(0.08) : AppColors.surfaceContainer,
        borderRadius: BorderRadius.circular(16.r),
        border: Border.all(
          color: isOn ? color.withOpacity(0.4) : AppColors.glassBorder,
        ),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Container(
                padding: EdgeInsets.all(8.w),
                decoration: BoxDecoration(
                  color: isOn
                      ? color.withOpacity(0.15)
                      : AppColors.surfaceContainerHigh,
                  borderRadius: BorderRadius.circular(10.r),
                ),
                child: Icon(icon,
                    color: isOn ? color : AppColors.onSurfaceVariant,
                    size: 18.sp),
              ),
              Transform.scale(
                scale: 0.75,
                child: Switch(
                  value: isOn,
                  onChanged: onToggle,
                  activeColor: color,
                  activeTrackColor: color.withOpacity(0.3),
                  inactiveThumbColor: AppColors.onSurfaceVariant,
                  inactiveTrackColor: AppColors.surfaceContainerHigh,
                ),
              ),
            ],
          ),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                label,
                style: GoogleFonts.inter(
                  fontSize: 12.sp,
                  fontWeight: FontWeight.w600,
                  color: isOn
                      ? AppColors.onSurface
                      : AppColors.onSurfaceVariant,
                ),
              ),
              Text(
                price,
                style: GoogleFonts.inter(
                  fontSize: 10.sp,
                  color: isOn ? color : AppColors.onSurfaceVariant,
                  fontWeight: FontWeight.w500,
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildPendingRequestsBanner() {
    return GestureDetector(
      onTap: () {},
      child: Container(
        padding: EdgeInsets.symmetric(horizontal: 16.w, vertical: 14.h),
        decoration: BoxDecoration(
          gradient: LinearGradient(
            colors: [
              AppColors.secondary.withOpacity(0.15),
              AppColors.primary.withOpacity(0.10),
            ],
          ),
          borderRadius: BorderRadius.circular(16.r),
          border: Border.all(color: AppColors.secondary.withOpacity(0.35)),
        ),
        child: Row(
          children: [
            Container(
              width: 36.w,
              height: 36.w,
              decoration: BoxDecoration(
                color: AppColors.secondary.withOpacity(0.2),
                shape: BoxShape.circle,
              ),
              child: Center(
                child: Text(
                  '$_pendingRequests',
                  style: GoogleFonts.montserrat(
                    fontSize: 16.sp,
                    fontWeight: FontWeight.w800,
                    color: AppColors.secondary,
                  ),
                ),
              ),
            ),
            SizedBox(width: 12.w),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    "Kutilayotgan so'rovlar",
                    style: GoogleFonts.inter(
                      fontSize: 14.sp,
                      fontWeight: FontWeight.w600,
                      color: AppColors.onSurface,
                    ),
                  ),
                  Text(
                    '$_pendingRequests ta yangi buyurtma javob kutmoqda',
                    style: GoogleFonts.inter(
                      fontSize: 12.sp,
                      color: AppColors.onSurfaceVariant,
                    ),
                  ),
                ],
              ),
            ),
            Icon(Icons.arrow_forward_ios_rounded,
                color: AppColors.secondary, size: 16.sp),
          ],
        ),
      ),
    );
  }
}
