import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';
import '../../core/theme/app_theme.dart';
import '../../core/widgets/common_widgets.dart';

class PaymentSuccessScreen extends StatefulWidget {
  const PaymentSuccessScreen({super.key});

  @override
  State<PaymentSuccessScreen> createState() => _PaymentSuccessScreenState();
}

class _PaymentSuccessScreenState extends State<PaymentSuccessScreen>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _scaleAnim;
  late Animation<double> _fadeAnim;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 700),
    );
    _scaleAnim = CurvedAnimation(parent: _controller, curve: Curves.elasticOut);
    _fadeAnim = CurvedAnimation(parent: _controller, curve: Curves.easeIn);
    Future.delayed(const Duration(milliseconds: 200), () {
      if (mounted) _controller.forward();
    });
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
      body: Stack(
        children: [
          // Ambient glow
          Positioned(
            top: -60.h,
            left: -60.w,
            child: Container(
              width: 280.w,
              height: 280.w,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                gradient: RadialGradient(
                  colors: [AppColors.primary.withOpacity(0.2), Colors.transparent],
                ),
              ),
            ),
          ),
          Positioned(
            bottom: -80.h,
            right: -60.w,
            child: Container(
              width: 300.w,
              height: 300.w,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                gradient: RadialGradient(
                  colors: [AppColors.secondary.withOpacity(0.18), Colors.transparent],
                ),
              ),
            ),
          ),
          SafeArea(
            child: Padding(
              padding: EdgeInsets.symmetric(horizontal: 32.w),
              child: Column(
                children: [
                  const Spacer(flex: 2),

                  // Success icon
                  ScaleTransition(
                    scale: _scaleAnim,
                    child: Container(
                      width: 120.w,
                      height: 120.w,
                      decoration: BoxDecoration(
                        gradient: AppGradients.primary,
                        shape: BoxShape.circle,
                        boxShadow: [
                          BoxShadow(
                            color: AppColors.primaryGlow,
                            blurRadius: 40,
                            spreadRadius: 10,
                          ),
                        ],
                      ),
                      child: Icon(Icons.check_rounded,
                          color: AppColors.onPrimary, size: 60.sp),
                    ),
                  ),
                  SizedBox(height: 32.h),

                  FadeTransition(
                    opacity: _fadeAnim,
                    child: Column(
                      children: [
                        Text(
                          "To'lov muvaffaqiyatli!",
                          style: GoogleFonts.montserrat(
                            fontSize: 26.sp,
                            fontWeight: FontWeight.w800,
                            color: AppColors.onSurface,
                          ),
                          textAlign: TextAlign.center,
                        ),
                        SizedBox(height: 12.h),
                        Text(
                          "Uchrashuvingiz muvaffaqiyatli band qilindi.\nSizga tasdiqlash xabari yuborildi.",
                          style: GoogleFonts.inter(
                            fontSize: 15.sp,
                            color: AppColors.onSurfaceVariant,
                            height: 1.6,
                          ),
                          textAlign: TextAlign.center,
                        ),
                        SizedBox(height: 32.h),

                        // Receipt Card
                        GlassCard(
                          child: Column(
                            children: [
                              _receiptRow(
                                  "Uchrashuv turi", "Video call - 30 daqiqa"),
                              SizedBox(height: 10.h),
                              _receiptRow("Mashhur", "Mashhur Inson"),
                              SizedBox(height: 10.h),
                              _receiptRow("Sana va vaqt", "15 iyun, 14:30"),
                              SizedBox(height: 10.h),
                              Divider(color: AppColors.glassBorder),
                              SizedBox(height: 10.h),
                              _receiptRow("To'langan summa", "150,000 so'm",
                                  valueColor: AppColors.primary),
                              SizedBox(height: 10.h),
                              _receiptRow("Tranzaksiya ID", "#TXN-24891",
                                  valueColor: AppColors.onSurfaceVariant),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),

                  const Spacer(flex: 3),

                  FadeTransition(
                    opacity: _fadeAnim,
                    child: Column(
                      children: [
                        GradientButton(
                          text: "Buyurtmalarimga o'tish",
                          onPressed: () =>
                              Navigator.pushNamedAndRemoveUntil(
                                  context, '/bookings', (r) => false),
                        ),
                        SizedBox(height: 12.h),
                        TextButton(
                          onPressed: () =>
                              Navigator.pushNamedAndRemoveUntil(
                                  context, '/home', (r) => false),
                          child: Text(
                            "Bosh sahifaga qaytish",
                            style: GoogleFonts.inter(
                              fontSize: 14.sp,
                              fontWeight: FontWeight.w500,
                              color: AppColors.onSurfaceVariant,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                  SizedBox(height: 24.h),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _receiptRow(String label, String value, {Color? valueColor}) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Text(label,
            style: GoogleFonts.inter(
                fontSize: 13.sp, color: AppColors.onSurfaceVariant)),
        Text(value,
            style: GoogleFonts.inter(
                fontSize: 13.sp,
                fontWeight: FontWeight.w600,
                color: valueColor ?? AppColors.onSurface)),
      ],
    );
  }
}
