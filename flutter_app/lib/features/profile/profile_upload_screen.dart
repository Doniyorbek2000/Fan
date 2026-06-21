import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';
import '../../core/theme/app_theme.dart';
import '../../core/widgets/common_widgets.dart';

class ProfileUploadScreen extends StatefulWidget {
  const ProfileUploadScreen({super.key});

  @override
  State<ProfileUploadScreen> createState() => _ProfileUploadScreenState();
}

class _ProfileUploadScreenState extends State<ProfileUploadScreen> {
  bool _isUploading = false;
  double _uploadProgress = 0.0;
  bool _hasSelectedImage = false;

  void _simulateUpload() async {
    setState(() {
      _isUploading = true;
      _uploadProgress = 0.0;
    });
    for (int i = 0; i <= 10; i++) {
      await Future.delayed(const Duration(milliseconds: 200));
      if (!mounted) return;
      setState(() => _uploadProgress = i / 10);
    }
    if (!mounted) return;
    setState(() => _isUploading = false);
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(
          'Rasm muvaffaqiyatli yuklandi!',
          style: GoogleFonts.inter(color: AppColors.onPrimary),
        ),
        backgroundColor: AppColors.primaryContainer,
        behavior: SnackBarBehavior.floating,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12.r)),
      ),
    );
  }

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
          'Profil rasmi',
          style: GoogleFonts.montserrat(
            fontSize: 18.sp,
            fontWeight: FontWeight.w700,
            color: AppColors.onSurface,
          ),
        ),
      ),
      body: Padding(
        padding: EdgeInsets.all(24.w),
        child: Column(
          children: [
            const Spacer(flex: 1),

            // Avatar Preview
            Center(
              child: Stack(
                children: [
                  Container(
                    padding: EdgeInsets.all(4.w),
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      gradient: AppGradients.primary,
                      boxShadow: [
                        BoxShadow(
                          color: AppColors.primaryGlow,
                          blurRadius: 30,
                          spreadRadius: 5,
                        ),
                      ],
                    ),
                    child: CircleAvatar(
                      radius: 70.r,
                      backgroundColor: AppColors.surfaceContainerHigh,
                      child: _hasSelectedImage
                          ? ClipOval(
                              child: Container(
                                width: 140.r,
                                height: 140.r,
                                color: AppColors.surfaceContainerHighest,
                                child: Icon(Icons.person,
                                    color: AppColors.onSurfaceVariant,
                                    size: 60.sp),
                              ),
                            )
                          : Icon(Icons.person,
                              color: AppColors.onSurfaceVariant, size: 60.sp),
                    ),
                  ),
                  Positioned(
                    bottom: 4.h,
                    right: 4.w,
                    child: Container(
                      padding: EdgeInsets.all(8.w),
                      decoration: BoxDecoration(
                        color: AppColors.primaryContainer,
                        shape: BoxShape.circle,
                        border:
                            Border.all(color: AppColors.background, width: 3),
                      ),
                      child: Icon(Icons.camera_alt,
                          color: AppColors.onPrimary, size: 18.sp),
                    ),
                  ),
                ],
              ),
            ),
            SizedBox(height: 32.h),

            // Info Text
            Text(
              "Profil rasmingizni o'zgartiring",
              style: GoogleFonts.montserrat(
                fontSize: 18.sp,
                fontWeight: FontWeight.w700,
                color: AppColors.onSurface,
              ),
            ),
            SizedBox(height: 8.h),
            Text(
              'Yuzingiz aniq ko\'rinadigan rasm tanlang.\nJPG, PNG formatlarida, 5MB gacha.',
              textAlign: TextAlign.center,
              style: GoogleFonts.inter(
                fontSize: 14.sp,
                color: AppColors.onSurfaceVariant,
                height: 1.5,
              ),
            ),
            SizedBox(height: 32.h),

            // Choose Photo Buttons
            GlassCard(
              child: Column(
                children: [
                  _buildOptionRow(
                    icon: Icons.photo_library_outlined,
                    label: 'Galereyadan tanlash',
                    onTap: () => setState(() => _hasSelectedImage = true),
                  ),
                  Divider(color: AppColors.glassBorder, height: 1),
                  _buildOptionRow(
                    icon: Icons.camera_alt_outlined,
                    label: 'Kameradan olish',
                    onTap: () => setState(() => _hasSelectedImage = true),
                  ),
                ],
              ),
            ),

            SizedBox(height: 24.h),

            // Upload Progress Indicator
            if (_isUploading) ...[
              GlassCard(
                padding: EdgeInsets.all(16.w),
                child: Column(
                  children: [
                    Row(
                      children: [
                        SizedBox(
                          width: 20.w,
                          height: 20.w,
                          child: CircularProgressIndicator(
                            value: _uploadProgress,
                            strokeWidth: 2.5,
                            color: AppColors.primary,
                            backgroundColor: AppColors.surfaceContainerHighest,
                          ),
                        ),
                        SizedBox(width: 12.w),
                        Expanded(
                          child: Text(
                            'Yuklanmoqda...',
                            style: GoogleFonts.inter(
                              fontSize: 14.sp,
                              color: AppColors.onSurface,
                            ),
                          ),
                        ),
                        Text(
                          '${(_uploadProgress * 100).round()}%',
                          style: GoogleFonts.inter(
                            fontSize: 14.sp,
                            fontWeight: FontWeight.w600,
                            color: AppColors.primary,
                          ),
                        ),
                      ],
                    ),
                    SizedBox(height: 12.h),
                    ClipRRect(
                      borderRadius: BorderRadius.circular(4.r),
                      child: LinearProgressIndicator(
                        value: _uploadProgress,
                        backgroundColor: AppColors.surfaceContainerHighest,
                        valueColor:
                            const AlwaysStoppedAnimation(AppColors.primaryContainer),
                        minHeight: 4.h,
                      ),
                    ),
                  ],
                ),
              ),
              SizedBox(height: 24.h),
            ],

            const Spacer(flex: 2),

            // Save Button
            GradientButton(
              text: _isUploading ? 'Yuklanmoqda...' : 'Saqlash',
              onPressed: _isUploading
                  ? null
                  : () {
                      if (_hasSelectedImage) {
                        _simulateUpload();
                      }
                    },
            ),
            SizedBox(height: 16.h),
          ],
        ),
      ),
    );
  }

  Widget _buildOptionRow({
    required IconData icon,
    required String label,
    required VoidCallback onTap,
  }) {
    return GestureDetector(
      onTap: onTap,
      behavior: HitTestBehavior.opaque,
      child: Padding(
        padding: EdgeInsets.symmetric(horizontal: 4.w, vertical: 14.h),
        child: Row(
          children: [
            Container(
              padding: EdgeInsets.all(8.w),
              decoration: BoxDecoration(
                color: AppColors.primaryContainer.withOpacity(0.15),
                borderRadius: BorderRadius.circular(10.r),
              ),
              child: Icon(icon, color: AppColors.primary, size: 20.sp),
            ),
            SizedBox(width: 14.w),
            Expanded(
              child: Text(
                label,
                style: GoogleFonts.inter(
                  fontSize: 14.sp,
                  fontWeight: FontWeight.w500,
                  color: AppColors.onSurface,
                ),
              ),
            ),
            Icon(Icons.chevron_right,
                color: AppColors.onSurfaceVariant, size: 20.sp),
          ],
        ),
      ),
    );
  }
}
