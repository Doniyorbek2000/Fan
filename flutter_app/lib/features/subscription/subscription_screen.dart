import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:go_router/go_router.dart';
import 'package:google_fonts/google_fonts.dart';
import '../../core/theme/app_theme.dart';
import '../../core/widgets/common_widgets.dart';

class SubscriptionScreen extends StatefulWidget {
  const SubscriptionScreen({super.key});

  @override
  State<SubscriptionScreen> createState() => _SubscriptionScreenState();
}

class _SubscriptionScreenState extends State<SubscriptionScreen> {
  int _selectedPlan = 1;
  int _selectedPayment = 0;

  final _plans = [
    {
      'name': 'Basic',
      'price': '49,000',
      'period': '/oy',
      'features': [
        'Mashhurlar profilini ko\'rish',
        'Xabar yuborish (5 ta/oy)',
        'Jonli efirlarni tomosha qilish',
        'Standart qo\'llab-quvvatlash',
      ],
      'color': AppColors.outlineVariant,
    },
    {
      'name': 'Premium',
      'price': '149,000',
      'period': '/oy',
      'features': [
        'Barcha Basic imkoniyatlar',
        'Cheksiz xabar yuborish',
        'Premium kontent kirish',
        'Video qo\'ng\'iroq (2 ta/oy)',
        'Ustuvor qo\'llab-quvvatlash',
        'Eksklyuziv badge',
      ],
      'color': AppColors.primaryContainer,
    },
    {
      'name': 'VIP',
      'price': '299,000',
      'period': '/oy',
      'features': [
        'Barcha Premium imkoniyatlar',
        'Cheksiz video qo\'ng\'iroqlar',
        'Shaxsiy uchrashuv (1 ta/oy)',
        'VIP badge va profil',
        '7/24 qo\'llab-quvvatlash',
        'Maxsus tadbirlarga kirish',
        'Mashhurlar bilan backstage',
      ],
      'color': AppColors.secondary,
    },
  ];

  final _paymentMethods = [
    {'name': 'Uzcard', 'icon': Icons.credit_card},
    {'name': 'Humo', 'icon': Icons.credit_card_outlined},
    {'name': 'Visa/MC', 'icon': Icons.payment},
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      body: CustomScrollView(
        slivers: [
          SliverAppBar(
            expandedHeight: 180.h,
            pinned: true,
            backgroundColor: AppColors.background,
            leading: IconButton(
              icon: const Icon(Icons.arrow_back, color: AppColors.primary),
              onPressed: () => context.pop(),
            ),
            flexibleSpace: FlexibleSpaceBar(
              background: Container(
                decoration: const BoxDecoration(
                  gradient: AppGradients.primary,
                ),
                child: SafeArea(
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      SizedBox(height: 40.h),
                      Icon(Icons.star, color: AppColors.onPrimary, size: 40.sp),
                      SizedBox(height: 8.h),
                      Text(
                        'FanMeet Premium',
                        style: GoogleFonts.montserrat(
                          fontSize: 24.sp,
                          fontWeight: FontWeight.w800,
                          color: AppColors.onPrimary,
                        ),
                      ),
                      Text(
                        'Sevimli mashhurlaringiz bilan yaqinlashing',
                        style: GoogleFonts.inter(
                          fontSize: 13.sp,
                          color: AppColors.onPrimary.withOpacity(0.8),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ),
          SliverPadding(
            padding: EdgeInsets.all(20.w),
            sliver: SliverList(
              delegate: SliverChildListDelegate([
                Text(
                  'Rejani tanlang',
                  style: GoogleFonts.montserrat(
                    fontSize: 20.sp,
                    fontWeight: FontWeight.w700,
                    color: AppColors.onSurface,
                  ),
                ),
                SizedBox(height: 16.h),
                ...List.generate(_plans.length, (i) => _buildPlanCard(i)),
                SizedBox(height: 24.h),
                Text(
                  'To\'lov usuli',
                  style: GoogleFonts.montserrat(
                    fontSize: 18.sp,
                    fontWeight: FontWeight.w700,
                    color: AppColors.onSurface,
                  ),
                ),
                SizedBox(height: 12.h),
                Row(
                  children: List.generate(
                    _paymentMethods.length,
                    (i) => Expanded(child: _buildPaymentCard(i)),
                  ),
                ),
                SizedBox(height: 24.h),
                GradientButton(
                  text: 'Obuna bo\'lish — ${_plans[_selectedPlan]['price']} so\'m/oy',
                  onPressed: () => context.go('/payment-success'),
                ),
                SizedBox(height: 12.h),
                Center(
                  child: Text(
                    'Istalgan vaqtda bekor qilish mumkin',
                    style: GoogleFonts.inter(
                      fontSize: 12.sp,
                      color: AppColors.onSurfaceVariant,
                    ),
                  ),
                ),
                SizedBox(height: 32.h),
              ]),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildPlanCard(int index) {
    final plan = _plans[index];
    final isSelected = _selectedPlan == index;
    final color = plan['color'] as Color;

    return GestureDetector(
      onTap: () => setState(() => _selectedPlan = index),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 200),
        margin: EdgeInsets.only(bottom: 12.h),
        padding: EdgeInsets.all(16.w),
        decoration: BoxDecoration(
          color: isSelected ? color.withOpacity(0.1) : AppColors.glassBackground,
          borderRadius: BorderRadius.circular(16.r),
          border: Border.all(
            color: isSelected ? color : AppColors.glassBorder,
            width: isSelected ? 2 : 1,
          ),
          boxShadow: isSelected
              ? [BoxShadow(color: color.withOpacity(0.2), blurRadius: 16)]
              : null,
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Row(
                  children: [
                    if (index == 1)
                      Container(
                        margin: EdgeInsets.only(right: 8.w),
                        padding: EdgeInsets.symmetric(
                            horizontal: 8.w, vertical: 2.h),
                        decoration: BoxDecoration(
                          gradient: AppGradients.primary,
                          borderRadius: BorderRadius.circular(100.r),
                        ),
                        child: Text(
                          'Mashhur',
                          style: GoogleFonts.inter(
                            fontSize: 10.sp,
                            fontWeight: FontWeight.w700,
                            color: AppColors.onPrimary,
                          ),
                        ),
                      ),
                    Text(
                      plan['name'] as String,
                      style: GoogleFonts.montserrat(
                        fontSize: 18.sp,
                        fontWeight: FontWeight.w700,
                        color: AppColors.onSurface,
                      ),
                    ),
                  ],
                ),
                Row(
                  crossAxisAlignment: CrossAxisAlignment.baseline,
                  textBaseline: TextBaseline.alphabetic,
                  children: [
                    Text(
                      plan['price'] as String,
                      style: GoogleFonts.montserrat(
                        fontSize: 22.sp,
                        fontWeight: FontWeight.w800,
                        color: isSelected ? color : AppColors.onSurface,
                      ),
                    ),
                    Text(
                      ' so\'m${plan['period']}',
                      style: GoogleFonts.inter(
                        fontSize: 12.sp,
                        color: AppColors.onSurfaceVariant,
                      ),
                    ),
                  ],
                ),
              ],
            ),
            SizedBox(height: 12.h),
            ...(plan['features'] as List<String>).map(
              (f) => Padding(
                padding: EdgeInsets.only(bottom: 6.h),
                child: Row(
                  children: [
                    Icon(Icons.check_circle,
                        color: isSelected ? color : AppColors.outlineVariant,
                        size: 16.sp),
                    SizedBox(width: 8.w),
                    Text(
                      f,
                      style: GoogleFonts.inter(
                        fontSize: 13.sp,
                        color: AppColors.onSurfaceVariant,
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildPaymentCard(int index) {
    final method = _paymentMethods[index];
    final isSelected = _selectedPayment == index;
    return GestureDetector(
      onTap: () => setState(() => _selectedPayment = index),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 200),
        margin: EdgeInsets.only(right: index < 2 ? 8.w : 0),
        padding: EdgeInsets.symmetric(vertical: 14.h),
        decoration: BoxDecoration(
          color: isSelected
              ? AppColors.primaryContainer.withOpacity(0.15)
              : AppColors.glassBackground,
          borderRadius: BorderRadius.circular(12.r),
          border: Border.all(
            color: isSelected ? AppColors.primary : AppColors.glassBorder,
          ),
        ),
        child: Column(
          children: [
            Icon(method['icon'] as IconData,
                color: isSelected ? AppColors.primary : AppColors.onSurfaceVariant,
                size: 22.sp),
            SizedBox(height: 4.h),
            Text(
              method['name'] as String,
              style: GoogleFonts.inter(
                fontSize: 12.sp,
                fontWeight: FontWeight.w500,
                color: isSelected ? AppColors.primary : AppColors.onSurfaceVariant,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
