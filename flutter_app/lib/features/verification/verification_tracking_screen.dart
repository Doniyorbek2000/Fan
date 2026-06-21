import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';
import '../../core/theme/app_theme.dart';
import '../../core/widgets/common_widgets.dart';

class VerificationTrackingScreen extends StatelessWidget {
  const VerificationTrackingScreen({super.key});

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
          'Tasdiqlash holati',
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
            // Status Header
            GlassCard(
              padding: EdgeInsets.all(20.w),
              child: Row(
                children: [
                  Container(
                    padding: EdgeInsets.all(12.w),
                    decoration: BoxDecoration(
                      color: const Color(0xFFFFD54F).withOpacity(0.15),
                      shape: BoxShape.circle,
                    ),
                    child: Icon(Icons.hourglass_top_rounded,
                        color: const Color(0xFFFFD54F), size: 28.sp),
                  ),
                  SizedBox(width: 16.w),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Ko\'rib chiqilmoqda',
                          style: GoogleFonts.montserrat(
                            fontSize: 18.sp,
                            fontWeight: FontWeight.w700,
                            color: const Color(0xFFFFD54F),
                          ),
                        ),
                        SizedBox(height: 4.h),
                        Text(
                          'Taxminan 24-48 soat',
                          style: GoogleFonts.inter(
                            fontSize: 13.sp,
                            color: AppColors.onSurfaceVariant,
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            SizedBox(height: 28.h),

            // Step Progress Indicator
            Text(
              'Tasdiqlash bosqichlari',
              style: GoogleFonts.montserrat(
                fontSize: 16.sp,
                fontWeight: FontWeight.w700,
                color: AppColors.onSurface,
              ),
            ),
            SizedBox(height: 16.h),
            _buildStepItem(
              stepNumber: 1,
              title: 'Ariza topshirildi',
              subtitle: '15 iyun, 2025 - 14:30',
              status: StepStatus.completed,
              isLast: false,
            ),
            _buildStepItem(
              stepNumber: 2,
              title: 'Hujjatlar qabul qilindi',
              subtitle: '15 iyun, 2025 - 14:32',
              status: StepStatus.completed,
              isLast: false,
            ),
            _buildStepItem(
              stepNumber: 3,
              title: 'Tekshiruv jarayonida',
              subtitle: "Hujjatlar ko'rib chiqilmoqda",
              status: StepStatus.inProgress,
              isLast: false,
            ),
            _buildStepItem(
              stepNumber: 4,
              title: 'Tasdiqlash',
              subtitle: 'Kutilmoqda',
              status: StepStatus.pending,
              isLast: true,
            ),
            SizedBox(height: 28.h),

            // Status Details
            Text(
              'Holat tafsilotlari',
              style: GoogleFonts.montserrat(
                fontSize: 16.sp,
                fontWeight: FontWeight.w700,
                color: AppColors.onSurface,
              ),
            ),
            SizedBox(height: 12.h),
            GlassCard(
              padding: EdgeInsets.all(16.w),
              child: Column(
                children: [
                  _buildDetailRow('Ariza raqami', '#VER-2025-0842'),
                  SizedBox(height: 12.h),
                  Divider(color: AppColors.glassBorder, height: 1),
                  SizedBox(height: 12.h),
                  _buildDetailRow('Topshirilgan sana', '15 iyun, 2025'),
                  SizedBox(height: 12.h),
                  Divider(color: AppColors.glassBorder, height: 1),
                  SizedBox(height: 12.h),
                  _buildDetailRow('Holat', 'Ko\'rib chiqilmoqda'),
                  SizedBox(height: 12.h),
                  Divider(color: AppColors.glassBorder, height: 1),
                  SizedBox(height: 12.h),
                  _buildDetailRow('Tur', 'Mashhur tasdiqlash'),
                ],
              ),
            ),
            SizedBox(height: 24.h),

            // Document Checklist
            Text(
              'Hujjatlar ro\'yxati',
              style: GoogleFonts.montserrat(
                fontSize: 16.sp,
                fontWeight: FontWeight.w700,
                color: AppColors.onSurface,
              ),
            ),
            SizedBox(height: 12.h),
            _buildDocumentItem(
              title: 'Shaxsni tasdiqlovchi hujjat',
              subtitle: 'Pasport yoki ID karta',
              isUploaded: true,
            ),
            SizedBox(height: 8.h),
            _buildDocumentItem(
              title: 'Profil rasmi',
              subtitle: 'Aniq ko\'rinadigan surat',
              isUploaded: true,
            ),
            SizedBox(height: 8.h),
            _buildDocumentItem(
              title: 'Ijtimoiy tarmoq havolasi',
              subtitle: 'Instagram, YouTube va h.k.',
              isUploaded: true,
            ),
            SizedBox(height: 8.h),
            _buildDocumentItem(
              title: "Qo'shimcha hujjat",
              subtitle: 'Ixtiyoriy',
              isUploaded: false,
            ),
            SizedBox(height: 32.h),

            // Support Link
            GlassCard(
              padding: EdgeInsets.all(16.w),
              child: GestureDetector(
                onTap: () {},
                child: Row(
                  children: [
                    Container(
                      padding: EdgeInsets.all(10.w),
                      decoration: BoxDecoration(
                        color: AppColors.tertiary.withOpacity(0.15),
                        borderRadius: BorderRadius.circular(12.r),
                      ),
                      child: Icon(Icons.support_agent,
                          color: AppColors.tertiary, size: 22.sp),
                    ),
                    SizedBox(width: 14.w),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            'Yordam kerakmi?',
                            style: GoogleFonts.inter(
                              fontSize: 14.sp,
                              fontWeight: FontWeight.w600,
                              color: AppColors.onSurface,
                            ),
                          ),
                          SizedBox(height: 2.h),
                          Text(
                            "Qo'llab-quvvatlash xizmatiga murojaat qiling",
                            style: GoogleFonts.inter(
                              fontSize: 12.sp,
                              color: AppColors.onSurfaceVariant,
                            ),
                          ),
                        ],
                      ),
                    ),
                    Icon(Icons.chevron_right,
                        color: AppColors.onSurfaceVariant, size: 20.sp),
                  ],
                ),
              ),
            ),
            SizedBox(height: 24.h),
          ],
        ),
      ),
    );
  }

  Widget _buildStepItem({
    required int stepNumber,
    required String title,
    required String subtitle,
    required StepStatus status,
    required bool isLast,
  }) {
    Color stepColor;
    IconData stepIcon;
    switch (status) {
      case StepStatus.completed:
        stepColor = AppColors.primaryContainer;
        stepIcon = Icons.check;
      case StepStatus.inProgress:
        stepColor = const Color(0xFFFFD54F);
        stepIcon = Icons.more_horiz;
      case StepStatus.pending:
        stepColor = AppColors.onSurfaceVariant;
        stepIcon = Icons.circle_outlined;
    }

    return IntrinsicHeight(
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Column(
            children: [
              Container(
                width: 36.w,
                height: 36.w,
                decoration: BoxDecoration(
                  color: status == StepStatus.pending
                      ? AppColors.surfaceContainerHigh
                      : stepColor.withOpacity(0.2),
                  shape: BoxShape.circle,
                  border: Border.all(
                    color: stepColor,
                    width: status == StepStatus.inProgress ? 2 : 1,
                  ),
                ),
                child: Center(
                  child: status == StepStatus.completed
                      ? Icon(stepIcon, color: stepColor, size: 16.sp)
                      : Text(
                          '$stepNumber',
                          style: GoogleFonts.inter(
                            fontSize: 13.sp,
                            fontWeight: FontWeight.w600,
                            color: stepColor,
                          ),
                        ),
                ),
              ),
              if (!isLast)
                Container(
                  width: 2,
                  height: 40.h,
                  color: status == StepStatus.completed
                      ? stepColor.withOpacity(0.4)
                      : AppColors.glassBorder,
                ),
            ],
          ),
          SizedBox(width: 14.w),
          Expanded(
            child: Padding(
              padding: EdgeInsets.only(bottom: isLast ? 0 : 20.h),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    title,
                    style: GoogleFonts.inter(
                      fontSize: 14.sp,
                      fontWeight: FontWeight.w600,
                      color: status == StepStatus.pending
                          ? AppColors.onSurfaceVariant
                          : AppColors.onSurface,
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
          ),
        ],
      ),
    );
  }

  Widget _buildDetailRow(String label, String value) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Text(
          label,
          style: GoogleFonts.inter(
            fontSize: 13.sp,
            color: AppColors.onSurfaceVariant,
          ),
        ),
        Text(
          value,
          style: GoogleFonts.inter(
            fontSize: 13.sp,
            fontWeight: FontWeight.w500,
            color: AppColors.onSurface,
          ),
        ),
      ],
    );
  }

  Widget _buildDocumentItem({
    required String title,
    required String subtitle,
    required bool isUploaded,
  }) {
    return GlassCard(
      padding: EdgeInsets.all(14.w),
      child: Row(
        children: [
          Container(
            padding: EdgeInsets.all(8.w),
            decoration: BoxDecoration(
              color: isUploaded
                  ? AppColors.primaryContainer.withOpacity(0.15)
                  : AppColors.surfaceContainerHigh,
              borderRadius: BorderRadius.circular(10.r),
            ),
            child: Icon(
              isUploaded ? Icons.description : Icons.upload_file_outlined,
              color: isUploaded
                  ? AppColors.primaryContainer
                  : AppColors.onSurfaceVariant,
              size: 20.sp,
            ),
          ),
          SizedBox(width: 12.w),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: GoogleFonts.inter(
                    fontSize: 13.sp,
                    fontWeight: FontWeight.w600,
                    color: AppColors.onSurface,
                  ),
                ),
                SizedBox(height: 2.h),
                Text(
                  subtitle,
                  style: GoogleFonts.inter(
                    fontSize: 11.sp,
                    color: AppColors.onSurfaceVariant,
                  ),
                ),
              ],
            ),
          ),
          Container(
            padding: EdgeInsets.symmetric(horizontal: 10.w, vertical: 4.h),
            decoration: BoxDecoration(
              color: isUploaded
                  ? AppColors.primaryContainer.withOpacity(0.15)
                  : AppColors.surfaceContainerHigh,
              borderRadius: BorderRadius.circular(100.r),
            ),
            child: Text(
              isUploaded ? 'Yuklangan' : 'Yuklanmagan',
              style: GoogleFonts.inter(
                fontSize: 11.sp,
                fontWeight: FontWeight.w500,
                color: isUploaded
                    ? AppColors.primaryContainer
                    : AppColors.onSurfaceVariant,
              ),
            ),
          ),
        ],
      ),
    );
  }
}

enum StepStatus { completed, inProgress, pending }
