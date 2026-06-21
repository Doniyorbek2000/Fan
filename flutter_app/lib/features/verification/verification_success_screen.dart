import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';
import '../../core/theme/app_theme.dart';
import '../../core/widgets/common_widgets.dart';

class VerificationSuccessScreen extends StatefulWidget {
  const VerificationSuccessScreen({super.key});

  @override
  State<VerificationSuccessScreen> createState() =>
      _VerificationSuccessScreenState();
}

class _VerificationSuccessScreenState extends State<VerificationSuccessScreen>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _scaleAnimation;
  late Animation<double> _fadeAnimation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 1200),
    );
    _scaleAnimation = Tween<double>(begin: 0.0, end: 1.0).animate(
      CurvedAnimation(
        parent: _controller,
        curve: const Interval(0.0, 0.6, curve: Curves.elasticOut),
      ),
    );
    _fadeAnimation = Tween<double>(begin: 0.0, end: 1.0).animate(
      CurvedAnimation(
        parent: _controller,
        curve: const Interval(0.4, 1.0, curve: Curves.easeOut),
      ),
    );
    _controller.forward();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      body: SafeArea(
        child: Padding(
          padding: EdgeInsets.symmetric(horizontal: 32.w),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Spacer(flex: 2),

              // Animated Checkmark
              AnimatedBuilder(
                animation: _scaleAnimation,
                builder: (context, child) {
                  return Transform.scale(
                    scale: _scaleAnimation.value,
                    child: Container(
                      width: 120.w,
                      height: 120.w,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        gradient: AppGradients.primary,
                        boxShadow: [
                          BoxShadow(
                            color: AppColors.primaryGlow,
                            blurRadius: 40,
                            spreadRadius: 10,
                          ),
                        ],
                      ),
                      child: Icon(
                        Icons.check_rounded,
                        color: AppColors.onPrimary,
                        size: 56.sp,
                      ),
                    ),
                  );
                },
              ),
              SizedBox(height: 40.h),

              // Congratulations Text
              AnimatedBuilder(
                animation: _fadeAnimation,
                builder: (context, child) {
                  return Opacity(
                    opacity: _fadeAnimation.value,
                    child: Column(
                      children: [
                        Text(
                          'Tabriklaymiz!',
                          style: GoogleFonts.montserrat(
                            fontSize: 28.sp,
                            fontWeight: FontWeight.w800,
                            color: AppColors.onSurface,
                          ),
                        ),
                        SizedBox(height: 12.h),
                        Text(
                          'Sizning hisobingiz muvaffaqiyatli\ntasdiqlandi',
                          textAlign: TextAlign.center,
                          style: GoogleFonts.inter(
                            fontSize: 16.sp,
                            color: AppColors.onSurfaceVariant,
                            height: 1.5,
                          ),
                        ),
                        SizedBox(height: 32.h),

                        // Verified Badge
                        GlassCard(
                          padding: EdgeInsets.symmetric(
                              horizontal: 24.w, vertical: 20.h),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Container(
                                padding: EdgeInsets.all(8.w),
                                decoration: BoxDecoration(
                                  color: AppColors.primaryContainer
                                      .withOpacity(0.2),
                                  shape: BoxShape.circle,
                                ),
                                child: Icon(
                                  Icons.verified,
                                  color: AppColors.primary,
                                  size: 28.sp,
                                ),
                              ),
                              SizedBox(width: 16.w),
                              Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(
                                    'Tasdiqlangan hisob',
                                    style: GoogleFonts.montserrat(
                                      fontSize: 16.sp,
                                      fontWeight: FontWeight.w700,
                                      color: AppColors.onSurface,
                                    ),
                                  ),
                                  SizedBox(height: 4.h),
                                  Text(
                                    'Sizda endi ko\'k belgi bor',
                                    style: GoogleFonts.inter(
                                      fontSize: 13.sp,
                                      color: AppColors.onSurfaceVariant,
                                    ),
                                  ),
                                ],
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  );
                },
              ),

              const Spacer(flex: 3),

              // Home Navigation Button
              AnimatedBuilder(
                animation: _fadeAnimation,
                builder: (context, child) {
                  return Opacity(
                    opacity: _fadeAnimation.value,
                    child: Column(
                      children: [
                        GradientButton(
                          text: 'Bosh sahifaga',
                          onPressed: () =>
                              Navigator.of(context).pushNamedAndRemoveUntil(
                            '/home',
                            (route) => false,
                          ),
                        ),
                        SizedBox(height: 16.h),
                        GestureDetector(
                          onTap: () =>
                              Navigator.of(context).pushNamed('/fan-profile'),
                          child: Text(
                            'Profilga o\'tish',
                            style: GoogleFonts.inter(
                              fontSize: 14.sp,
                              fontWeight: FontWeight.w500,
                              color: AppColors.primary,
                            ),
                          ),
                        ),
                      ],
                    ),
                  );
                },
              ),
              SizedBox(height: 32.h),
            ],
          ),
        ),
      ),
    );
  }
}
