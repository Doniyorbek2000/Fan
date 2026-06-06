import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';
import '../../core/theme/app_theme.dart';
import '../../core/widgets/common_widgets.dart';

class CheckoutScreen extends StatefulWidget {
  const CheckoutScreen({super.key});

  @override
  State<CheckoutScreen> createState() => _CheckoutScreenState();
}

class _CheckoutScreenState extends State<CheckoutScreen> {
  int _selectedPaymentIndex = 0;
  bool _isLoading = false;

  final List<Map<String, dynamic>> _paymentMethods = [
    {'icon': Icons.credit_card, 'label': 'Uzcard', 'number': '**** 4256', 'color': const Color(0xFF1565C0)},
    {'icon': Icons.credit_card, 'label': 'Humo', 'number': '**** 8834', 'color': const Color(0xFF6A1B9A)},
    {'icon': Icons.credit_card_outlined, 'label': 'Visa', 'number': '**** 1122', 'color': const Color(0xFF0D47A1)},
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        leading: IconButton(
          icon: Icon(Icons.arrow_back_ios_new_rounded,
              color: AppColors.primary, size: 20.sp),
          onPressed: () => Navigator.of(context).pop(),
        ),
        title: Text(
          "To'lov",
          style: GoogleFonts.montserrat(
            fontSize: 18.sp,
            fontWeight: FontWeight.w700,
            color: AppColors.onSurface,
          ),
        ),
      ),
      body: SingleChildScrollView(
        padding: EdgeInsets.all(24.w),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Order Summary
            GlassCard(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text("Buyurtma tafsilotlari",
                      style: GoogleFonts.montserrat(
                          fontSize: 15.sp,
                          fontWeight: FontWeight.w700,
                          color: AppColors.onSurface)),
                  SizedBox(height: 16.h),
                  _orderRow("Xizmat turi", "Video call - 30 daqiqa"),
                  SizedBox(height: 8.h),
                  _orderRow("Mashhur", "Mashhur Inson"),
                  SizedBox(height: 8.h),
                  _orderRow("Sana", "15 iyun, 2025"),
                  SizedBox(height: 8.h),
                  _orderRow("Vaqt", "14:30"),
                  SizedBox(height: 16.h),
                  Divider(color: AppColors.glassBorder),
                  SizedBox(height: 12.h),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text("Jami:",
                          style: GoogleFonts.inter(
                              fontSize: 16.sp,
                              fontWeight: FontWeight.w700,
                              color: AppColors.onSurface)),
                      ShaderMask(
                        shaderCallback: (b) => AppGradients.primary.createShader(b),
                        child: Text("150,000 so'm",
                            style: GoogleFonts.montserrat(
                                fontSize: 18.sp,
                                fontWeight: FontWeight.w800,
                                color: Colors.white)),
                      ),
                    ],
                  ),
                ],
              ),
            ),
            SizedBox(height: 24.h),

            Text("To'lov usuli",
                style: GoogleFonts.montserrat(
                    fontSize: 16.sp,
                    fontWeight: FontWeight.w700,
                    color: AppColors.onSurface)),
            SizedBox(height: 12.h),

            ...List.generate(_paymentMethods.length, (i) {
              final method = _paymentMethods[i];
              final isSelected = _selectedPaymentIndex == i;
              return GestureDetector(
                onTap: () => setState(() => _selectedPaymentIndex = i),
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 200),
                  margin: EdgeInsets.only(bottom: 10.h),
                  padding: EdgeInsets.all(14.w),
                  decoration: BoxDecoration(
                    color: isSelected
                        ? AppColors.primary.withOpacity(0.1)
                        : AppColors.glassBackground,
                    borderRadius: BorderRadius.circular(14.r),
                    border: Border.all(
                      color: isSelected ? AppColors.primary : AppColors.glassBorder,
                      width: isSelected ? 1.5 : 1,
                    ),
                  ),
                  child: Row(
                    children: [
                      Container(
                        padding: EdgeInsets.all(8.w),
                        decoration: BoxDecoration(
                          color: (method['color'] as Color).withOpacity(0.2),
                          borderRadius: BorderRadius.circular(10.r),
                        ),
                        child: Icon(method['icon'] as IconData,
                            color: method['color'] as Color, size: 20.sp),
                      ),
                      SizedBox(width: 12.w),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(method['label'] as String,
                                style: GoogleFonts.inter(
                                    fontSize: 14.sp,
                                    fontWeight: FontWeight.w600,
                                    color: AppColors.onSurface)),
                            Text(method['number'] as String,
                                style: GoogleFonts.inter(
                                    fontSize: 12.sp,
                                    color: AppColors.onSurfaceVariant)),
                          ],
                        ),
                      ),
                      if (isSelected)
                        Container(
                          width: 20.w,
                          height: 20.w,
                          decoration: BoxDecoration(
                            gradient: AppGradients.primary,
                            shape: BoxShape.circle,
                          ),
                          child: Icon(Icons.check,
                              color: AppColors.onPrimary, size: 12.sp),
                        ),
                    ],
                  ),
                ),
              );
            }),

            SizedBox(height: 8.h),
            GestureDetector(
              onTap: () {},
              child: Row(
                children: [
                  Icon(Icons.add_circle_outline,
                      color: AppColors.primary, size: 18.sp),
                  SizedBox(width: 8.w),
                  Text("Yangi karta qo'shish",
                      style: GoogleFonts.inter(
                          fontSize: 14.sp,
                          fontWeight: FontWeight.w500,
                          color: AppColors.primary)),
                ],
              ),
            ),

            SizedBox(height: 32.h),

            if (_isLoading)
              Container(
                height: 52.h,
                decoration: BoxDecoration(
                  gradient: AppGradients.primary,
                  borderRadius: BorderRadius.circular(100.r),
                ),
                child: Center(
                  child: SizedBox(
                    width: 22.w,
                    height: 22.w,
                    child: CircularProgressIndicator(
                        strokeWidth: 2.5, color: AppColors.onPrimary),
                  ),
                ),
              )
            else
              GradientButton(
                text: "To'lovni amalga oshirish",
                onPressed: () async {
                  setState(() => _isLoading = true);
                  await Future.delayed(const Duration(milliseconds: 1200));
                  if (!mounted) return;
                  setState(() => _isLoading = false);
                  Navigator.pushReplacementNamed(context, '/payment-success');
                },
              ),

            SizedBox(height: 16.h),
            Center(
              child: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Icon(Icons.lock_outline,
                      color: AppColors.onSurfaceVariant, size: 14.sp),
                  SizedBox(width: 4.w),
                  Text("Xavfsiz to'lov SSL orqali himoyalangan",
                      style: GoogleFonts.inter(
                          fontSize: 12.sp,
                          color: AppColors.onSurfaceVariant)),
                ],
              ),
            ),
            SizedBox(height: 24.h),
          ],
        ),
      ),
    );
  }

  Widget _orderRow(String label, String value) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Text(label,
            style: GoogleFonts.inter(
                fontSize: 13.sp, color: AppColors.onSurfaceVariant)),
        Text(value,
            style: GoogleFonts.inter(
                fontSize: 13.sp,
                fontWeight: FontWeight.w500,
                color: AppColors.onSurface)),
      ],
    );
  }
}
