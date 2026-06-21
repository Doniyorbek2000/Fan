import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';
import '../../core/theme/app_theme.dart';
import '../../core/widgets/common_widgets.dart';

class CelebrityFullProfileScreen extends StatelessWidget {
  const CelebrityFullProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      body: Stack(
        children: [
          CustomScrollView(
            slivers: [
              // Cover Image with Gradient Overlay
              SliverToBoxAdapter(
                child: Stack(
                  children: [
                    Container(
                      height: 280.h,
                      decoration: BoxDecoration(
                        color: AppColors.surfaceContainerHigh,
                        image: const DecorationImage(
                          image: AssetImage('assets/images/cover_placeholder.png'),
                          fit: BoxFit.cover,
                        ),
                      ),
                    ),
                    Container(
                      height: 280.h,
                      decoration: BoxDecoration(
                        gradient: AppGradients.backstageOverlay,
                      ),
                    ),
                    Positioned(
                      top: MediaQuery.of(context).padding.top + 8.h,
                      left: 16.w,
                      child: GestureDetector(
                        onTap: () => Navigator.of(context).pop(),
                        child: Container(
                          padding: EdgeInsets.all(8.w),
                          decoration: BoxDecoration(
                            color: AppColors.glassBackground,
                            shape: BoxShape.circle,
                            border: Border.all(color: AppColors.glassBorder),
                          ),
                          child: Icon(Icons.arrow_back_ios_new_rounded,
                              color: AppColors.primary, size: 18.sp),
                        ),
                      ),
                    ),
                    Positioned(
                      top: MediaQuery.of(context).padding.top + 8.h,
                      right: 16.w,
                      child: Container(
                        padding: EdgeInsets.all(8.w),
                        decoration: BoxDecoration(
                          color: AppColors.glassBackground,
                          shape: BoxShape.circle,
                          border: Border.all(color: AppColors.glassBorder),
                        ),
                        child: Icon(Icons.share_outlined,
                            color: AppColors.onSurface, size: 18.sp),
                      ),
                    ),
                  ],
                ),
              ),

              // Avatar, Name, Category, Verified Badge
              SliverToBoxAdapter(
                child: Transform.translate(
                  offset: Offset(0, -50.h),
                  child: Padding(
                    padding: EdgeInsets.symmetric(horizontal: 24.w),
                    child: Column(
                      children: [
                        Row(
                          crossAxisAlignment: CrossAxisAlignment.end,
                          children: [
                            Container(
                              padding: EdgeInsets.all(3.w),
                              decoration: BoxDecoration(
                                shape: BoxShape.circle,
                                gradient: AppGradients.primary,
                              ),
                              child: NetworkAvatarImage(
                                radius: 45,
                                imageUrl: null,
                              ),
                            ),
                            SizedBox(width: 16.w),
                            Expanded(
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Row(
                                    children: [
                                      Flexible(
                                        child: Text(
                                          'Mashhur Inson',
                                          style: GoogleFonts.montserrat(
                                            fontSize: 22.sp,
                                            fontWeight: FontWeight.w800,
                                            color: AppColors.onSurface,
                                          ),
                                          overflow: TextOverflow.ellipsis,
                                        ),
                                      ),
                                      SizedBox(width: 6.w),
                                      VerifiedBadge(size: 20),
                                    ],
                                  ),
                                  SizedBox(height: 4.h),
                                  Container(
                                    padding: EdgeInsets.symmetric(
                                        horizontal: 10.w, vertical: 4.h),
                                    decoration: BoxDecoration(
                                      color: AppColors.primaryContainer
                                          .withOpacity(0.2),
                                      borderRadius:
                                          BorderRadius.circular(100.r),
                                    ),
                                    child: Text(
                                      'Aktyor / Musiqachi',
                                      style: GoogleFonts.inter(
                                        fontSize: 12.sp,
                                        fontWeight: FontWeight.w500,
                                        color: AppColors.primary,
                                      ),
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ],
                        ),
                        SizedBox(height: 24.h),

                        // Stats Row
                        GlassCard(
                          padding: EdgeInsets.symmetric(
                              horizontal: 16.w, vertical: 16.h),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceAround,
                            children: [
                              _buildStat('125K', 'Kuzatuvchilar'),
                              _verticalDivider(),
                              _buildStat('1,240', 'Buyurtmalar'),
                              _verticalDivider(),
                              _buildStat('4.9', 'Reyting'),
                            ],
                          ),
                        ),
                        SizedBox(height: 24.h),

                        // Bio
                        Align(
                          alignment: Alignment.centerLeft,
                          child: Text(
                            "Haqida",
                            style: GoogleFonts.montserrat(
                              fontSize: 16.sp,
                              fontWeight: FontWeight.w700,
                              color: AppColors.onSurface,
                            ),
                          ),
                        ),
                        SizedBox(height: 8.h),
                        Text(
                          "O'zbekistonning eng mashhur aktyor va musiqachilaridan biri. "
                          "10 yildan ortiq tajriba. Filmlar, konsertlar va maxsus tadbirlar.",
                          style: GoogleFonts.inter(
                            fontSize: 14.sp,
                            color: AppColors.onSurfaceVariant,
                            height: 1.5,
                          ),
                        ),
                        SizedBox(height: 24.h),

                        // Services List
                        _buildSectionHeader("Xizmatlar"),
                        SizedBox(height: 12.h),
                        _buildServiceItem(
                          icon: Icons.videocam_outlined,
                          title: 'Video qo\'ng\'iroq',
                          duration: '30 daqiqa',
                          price: '150,000',
                        ),
                        SizedBox(height: 10.h),
                        _buildServiceItem(
                          icon: Icons.mic_outlined,
                          title: 'Shaxsiy tabrik',
                          duration: '1-2 kun',
                          price: '200,000',
                        ),
                        SizedBox(height: 10.h),
                        _buildServiceItem(
                          icon: Icons.chat_bubble_outline,
                          title: 'Chat xabar',
                          duration: '24 soat',
                          price: '50,000',
                        ),
                        SizedBox(height: 10.h),
                        _buildServiceItem(
                          icon: Icons.live_tv_outlined,
                          title: 'Jonli efir',
                          duration: '1 soat',
                          price: '500,000',
                        ),
                        SizedBox(height: 24.h),

                        // Reviews Section
                        _buildSectionHeader("Sharhlar"),
                        SizedBox(height: 12.h),
                        _buildReviewItem(
                          name: 'Aziz T.',
                          rating: 5,
                          date: '12 iyun, 2025',
                          text:
                              "Ajoyib tajriba edi! Juda samimiy va professional.",
                        ),
                        SizedBox(height: 10.h),
                        _buildReviewItem(
                          name: 'Malika R.',
                          rating: 5,
                          date: '10 iyun, 2025',
                          text:
                              "Tug'ilgan kunim uchun tabrik videosi buyurtma qildim. Juda yoqdi!",
                        ),
                        SizedBox(height: 10.h),
                        _buildReviewItem(
                          name: 'Sardor K.',
                          rating: 4,
                          date: '8 iyun, 2025',
                          text:
                              "Video qo'ng'iroq orqali suhbatlashdik. Ajoyib inson!",
                        ),
                        SizedBox(height: 24.h),

                        // Gallery Grid
                        _buildSectionHeader("Galereya"),
                        SizedBox(height: 12.h),
                        GridView.builder(
                          shrinkWrap: true,
                          physics: const NeverScrollableScrollPhysics(),
                          gridDelegate:
                              SliverGridDelegateWithFixedCrossAxisCount(
                            crossAxisCount: 3,
                            crossAxisSpacing: 8.w,
                            mainAxisSpacing: 8.w,
                          ),
                          itemCount: 6,
                          itemBuilder: (context, index) {
                            return Container(
                              decoration: BoxDecoration(
                                color: AppColors.surfaceContainerHigh,
                                borderRadius: BorderRadius.circular(12.r),
                                border: Border.all(
                                    color: AppColors.glassBorder),
                              ),
                              child: Center(
                                child: Icon(
                                  Icons.image_outlined,
                                  color: AppColors.onSurfaceVariant,
                                  size: 24.sp,
                                ),
                              ),
                            );
                          },
                        ),

                        // Bottom padding for CTA
                        SizedBox(height: 100.h),
                      ],
                    ),
                  ),
                ),
              ),
            ],
          ),

          // Book CTA at Bottom
          Positioned(
            left: 0,
            right: 0,
            bottom: 0,
            child: Container(
              padding: EdgeInsets.fromLTRB(
                  24.w, 16.h, 24.w, MediaQuery.of(context).padding.bottom + 16.h),
              decoration: BoxDecoration(
                color: AppColors.background,
                border: Border(
                  top: BorderSide(color: AppColors.glassBorder),
                ),
                boxShadow: [
                  BoxShadow(
                    color: AppColors.background.withOpacity(0.8),
                    blurRadius: 20,
                    offset: const Offset(0, -10),
                  ),
                ],
              ),
              child: Row(
                children: [
                  Expanded(
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          "dan boshlab",
                          style: GoogleFonts.inter(
                            fontSize: 12.sp,
                            color: AppColors.onSurfaceVariant,
                          ),
                        ),
                        ShaderMask(
                          shaderCallback: (b) =>
                              AppGradients.primary.createShader(b),
                          child: Text(
                            "50,000 so'm",
                            style: GoogleFonts.montserrat(
                              fontSize: 18.sp,
                              fontWeight: FontWeight.w800,
                              color: Colors.white,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                  SizedBox(width: 16.w),
                  Expanded(
                    child: GradientButton(
                      text: "Buyurtma berish",
                      onPressed: () {},
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildStat(String value, String label) {
    return Column(
      children: [
        ShaderMask(
          shaderCallback: (b) => AppGradients.primary.createShader(b),
          child: Text(
            value,
            style: GoogleFonts.montserrat(
              fontSize: 20.sp,
              fontWeight: FontWeight.w800,
              color: Colors.white,
            ),
          ),
        ),
        SizedBox(height: 4.h),
        Text(
          label,
          style: GoogleFonts.inter(
            fontSize: 11.sp,
            color: AppColors.onSurfaceVariant,
          ),
        ),
      ],
    );
  }

  Widget _verticalDivider() {
    return Container(
      width: 1,
      height: 36.h,
      color: AppColors.glassBorder,
    );
  }

  Widget _buildSectionHeader(String title) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Text(
          title,
          style: GoogleFonts.montserrat(
            fontSize: 16.sp,
            fontWeight: FontWeight.w700,
            color: AppColors.onSurface,
          ),
        ),
        Text(
          "Hammasi",
          style: GoogleFonts.inter(
            fontSize: 13.sp,
            fontWeight: FontWeight.w500,
            color: AppColors.primary,
          ),
        ),
      ],
    );
  }

  Widget _buildServiceItem({
    required IconData icon,
    required String title,
    required String duration,
    required String price,
  }) {
    return GlassCard(
      padding: EdgeInsets.all(14.w),
      child: Row(
        children: [
          Container(
            padding: EdgeInsets.all(10.w),
            decoration: BoxDecoration(
              color: AppColors.primaryContainer.withOpacity(0.15),
              borderRadius: BorderRadius.circular(12.r),
            ),
            child: Icon(icon, color: AppColors.primary, size: 22.sp),
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
                  duration,
                  style: GoogleFonts.inter(
                    fontSize: 12.sp,
                    color: AppColors.onSurfaceVariant,
                  ),
                ),
              ],
            ),
          ),
          ShaderMask(
            shaderCallback: (b) => AppGradients.primary.createShader(b),
            child: Text(
              "$price so'm",
              style: GoogleFonts.montserrat(
                fontSize: 14.sp,
                fontWeight: FontWeight.w700,
                color: Colors.white,
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildReviewItem({
    required String name,
    required int rating,
    required String date,
    required String text,
  }) {
    return GlassCard(
      padding: EdgeInsets.all(14.w),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              NetworkAvatarImage(radius: 18, imageUrl: null),
              SizedBox(width: 10.w),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      name,
                      style: GoogleFonts.inter(
                        fontSize: 13.sp,
                        fontWeight: FontWeight.w600,
                        color: AppColors.onSurface,
                      ),
                    ),
                    Text(
                      date,
                      style: GoogleFonts.inter(
                        fontSize: 11.sp,
                        color: AppColors.onSurfaceVariant,
                      ),
                    ),
                  ],
                ),
              ),
              Row(
                children: List.generate(
                  5,
                  (i) => Icon(
                    i < rating ? Icons.star_rounded : Icons.star_outline_rounded,
                    color: i < rating
                        ? AppColors.secondary
                        : AppColors.onSurfaceVariant,
                    size: 16.sp,
                  ),
                ),
              ),
            ],
          ),
          SizedBox(height: 10.h),
          Text(
            text,
            style: GoogleFonts.inter(
              fontSize: 13.sp,
              color: AppColors.onSurfaceVariant,
              height: 1.4,
            ),
          ),
        ],
      ),
    );
  }
}
