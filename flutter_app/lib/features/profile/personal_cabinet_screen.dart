import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';
import '../../core/theme/app_theme.dart';
import '../../core/widgets/common_widgets.dart';

class PersonalCabinetScreen extends StatelessWidget {
  const PersonalCabinetScreen({super.key});

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
          'Shaxsiy kabinet',
          style: GoogleFonts.montserrat(
            fontSize: 18.sp,
            fontWeight: FontWeight.w700,
            color: AppColors.onSurface,
          ),
        ),
        actions: [
          IconButton(
            icon: Icon(Icons.settings_outlined,
                color: AppColors.onSurfaceVariant, size: 22.sp),
            onPressed: () {},
          ),
        ],
      ),
      body: SingleChildScrollView(
        padding: EdgeInsets.all(24.w),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // User Card
            GlassCard(
              padding: EdgeInsets.all(20.w),
              child: Row(
                children: [
                  Container(
                    padding: EdgeInsets.all(3.w),
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      gradient: AppGradients.primary,
                    ),
                    child: NetworkAvatarImage(radius: 32, imageUrl: null),
                  ),
                  SizedBox(width: 16.w),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Foydalanuvchi',
                          style: GoogleFonts.montserrat(
                            fontSize: 18.sp,
                            fontWeight: FontWeight.w700,
                            color: AppColors.onSurface,
                          ),
                        ),
                        SizedBox(height: 4.h),
                        Text(
                          'user@example.com',
                          style: GoogleFonts.inter(
                            fontSize: 13.sp,
                            color: AppColors.onSurfaceVariant,
                          ),
                        ),
                        SizedBox(height: 6.h),
                        Container(
                          padding: EdgeInsets.symmetric(
                              horizontal: 10.w, vertical: 3.h),
                          decoration: BoxDecoration(
                            color:
                                AppColors.primaryContainer.withOpacity(0.2),
                            borderRadius: BorderRadius.circular(100.r),
                          ),
                          child: Text(
                            'Premium a\'zo',
                            style: GoogleFonts.inter(
                              fontSize: 11.sp,
                              fontWeight: FontWeight.w500,
                              color: AppColors.primary,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                  GestureDetector(
                    onTap: () {},
                    child: Container(
                      padding: EdgeInsets.all(8.w),
                      decoration: BoxDecoration(
                        color: AppColors.primaryContainer.withOpacity(0.15),
                        borderRadius: BorderRadius.circular(10.r),
                      ),
                      child: Icon(Icons.edit_outlined,
                          color: AppColors.primary, size: 18.sp),
                    ),
                  ),
                ],
              ),
            ),
            SizedBox(height: 20.h),

            // Stats Row
            Row(
              children: [
                Expanded(
                  child: _buildStatCard(
                    icon: Icons.shopping_bag_outlined,
                    value: '24',
                    label: 'Buyurtmalar',
                    color: AppColors.primaryContainer,
                  ),
                ),
                SizedBox(width: 12.w),
                Expanded(
                  child: _buildStatCard(
                    icon: Icons.favorite_outline,
                    value: '56',
                    label: 'Sevimlilar',
                    color: AppColors.secondary,
                  ),
                ),
                SizedBox(width: 12.w),
                Expanded(
                  child: _buildStatCard(
                    icon: Icons.star_outline,
                    value: '12',
                    label: 'Sharhlar',
                    color: AppColors.tertiary,
                  ),
                ),
              ],
            ),
            SizedBox(height: 24.h),

            // Recent Activity
            Text(
              "So'nggi faoliyat",
              style: GoogleFonts.montserrat(
                fontSize: 16.sp,
                fontWeight: FontWeight.w700,
                color: AppColors.onSurface,
              ),
            ),
            SizedBox(height: 12.h),
            _buildActivityItem(
              icon: Icons.videocam_outlined,
              title: 'Video qo\'ng\'iroq',
              subtitle: 'Mashhur Inson bilan',
              time: '2 soat oldin',
              color: AppColors.primaryContainer,
            ),
            SizedBox(height: 10.h),
            _buildActivityItem(
              icon: Icons.payment_outlined,
              title: "To'lov amalga oshirildi",
              subtitle: "150,000 so'm",
              time: '5 soat oldin',
              color: AppColors.tertiary,
            ),
            SizedBox(height: 10.h),
            _buildActivityItem(
              icon: Icons.chat_bubble_outline,
              title: 'Xabar yuborildi',
              subtitle: 'Celebrity 2 ga',
              time: 'Kecha',
              color: AppColors.secondary,
            ),
            SizedBox(height: 10.h),
            _buildActivityItem(
              icon: Icons.star_outline,
              title: 'Sharh qoldirildi',
              subtitle: 'Video qo\'ng\'iroq uchun',
              time: '2 kun oldin',
              color: const Color(0xFFFFD54F),
            ),
            SizedBox(height: 24.h),

            // Quick Action Cards
            Text(
              'Tezkor harakatlar',
              style: GoogleFonts.montserrat(
                fontSize: 16.sp,
                fontWeight: FontWeight.w700,
                color: AppColors.onSurface,
              ),
            ),
            SizedBox(height: 12.h),
            Row(
              children: [
                Expanded(
                  child: _buildQuickAction(
                    icon: Icons.search,
                    label: 'Mashhurlarni\nqidirish',
                    gradient: AppGradients.primary,
                    onTap: () {},
                  ),
                ),
                SizedBox(width: 12.w),
                Expanded(
                  child: _buildQuickAction(
                    icon: Icons.live_tv,
                    label: 'Jonli\nefirlar',
                    gradient: LinearGradient(
                      colors: [AppColors.secondary, AppColors.tertiary],
                    ),
                    onTap: () {},
                  ),
                ),
              ],
            ),
            SizedBox(height: 12.h),
            Row(
              children: [
                Expanded(
                  child: _buildQuickAction(
                    icon: Icons.wallet_outlined,
                    label: 'Hamyon\nboshqaruvi',
                    gradient: LinearGradient(
                      colors: [AppColors.tertiary, AppColors.primaryContainer],
                    ),
                    onTap: () {},
                  ),
                ),
                SizedBox(width: 12.w),
                Expanded(
                  child: _buildQuickAction(
                    icon: Icons.help_outline,
                    label: 'Yordam\nmarkazi',
                    gradient: LinearGradient(
                      colors: [
                        AppColors.onSurfaceVariant,
                        AppColors.primaryContainer,
                      ],
                    ),
                    onTap: () {},
                  ),
                ),
              ],
            ),
            SizedBox(height: 24.h),
          ],
        ),
      ),
    );
  }

  Widget _buildStatCard({
    required IconData icon,
    required String value,
    required String label,
    required Color color,
  }) {
    return GlassCard(
      padding: EdgeInsets.symmetric(vertical: 16.h, horizontal: 12.w),
      child: Column(
        children: [
          Container(
            padding: EdgeInsets.all(8.w),
            decoration: BoxDecoration(
              color: color.withOpacity(0.15),
              borderRadius: BorderRadius.circular(10.r),
            ),
            child: Icon(icon, color: color, size: 20.sp),
          ),
          SizedBox(height: 10.h),
          Text(
            value,
            style: GoogleFonts.montserrat(
              fontSize: 20.sp,
              fontWeight: FontWeight.w800,
              color: AppColors.onSurface,
            ),
          ),
          SizedBox(height: 2.h),
          Text(
            label,
            style: GoogleFonts.inter(
              fontSize: 11.sp,
              color: AppColors.onSurfaceVariant,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildActivityItem({
    required IconData icon,
    required String title,
    required String subtitle,
    required String time,
    required Color color,
  }) {
    return GlassCard(
      padding: EdgeInsets.all(14.w),
      child: Row(
        children: [
          Container(
            padding: EdgeInsets.all(10.w),
            decoration: BoxDecoration(
              color: color.withOpacity(0.15),
              borderRadius: BorderRadius.circular(12.r),
            ),
            child: Icon(icon, color: color, size: 20.sp),
          ),
          SizedBox(width: 12.w),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: GoogleFonts.inter(
                    fontSize: 14.sp,
                    fontWeight: FontWeight.w600,
                    color: AppColors.onSurface,
                  ),
                ),
                SizedBox(height: 2.h),
                Text(
                  subtitle,
                  style: GoogleFonts.inter(
                    fontSize: 12.sp,
                    color: AppColors.onSurfaceVariant,
                  ),
                ),
              ],
            ),
          ),
          Text(
            time,
            style: GoogleFonts.inter(
              fontSize: 11.sp,
              color: AppColors.onSurfaceVariant,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildQuickAction({
    required IconData icon,
    required String label,
    required Gradient gradient,
    required VoidCallback onTap,
  }) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        padding: EdgeInsets.all(16.w),
        height: 110.h,
        decoration: BoxDecoration(
          gradient: gradient,
          borderRadius: BorderRadius.circular(16.r),
          boxShadow: [
            BoxShadow(
              color: AppColors.primaryGlow.withOpacity(0.2),
              blurRadius: 16,
              spreadRadius: 0,
            ),
          ],
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Icon(icon, color: AppColors.onPrimary, size: 24.sp),
            Text(
              label,
              style: GoogleFonts.inter(
                fontSize: 12.sp,
                fontWeight: FontWeight.w600,
                color: AppColors.onPrimary,
                height: 1.3,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
