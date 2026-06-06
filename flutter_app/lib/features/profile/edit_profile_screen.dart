import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';
import '../../core/theme/app_theme.dart';
import '../../core/widgets/common_widgets.dart';

class EditProfileScreen extends StatefulWidget {
  const EditProfileScreen({super.key});

  @override
  State<EditProfileScreen> createState() => _EditProfileScreenState();
}

class _EditProfileScreenState extends State<EditProfileScreen> {
  final _nameController = TextEditingController(text: 'Asilbek Karimov');
  final _bioController = TextEditingController(text: 'FanMeet foydalanuvchisi');
  final _emailController = TextEditingController(text: 'asilbek@example.com');

  @override
  void dispose() {
    _nameController.dispose();
    _bioController.dispose();
    _emailController.dispose();
    super.dispose();
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
          'Profilni tahrirlash',
          style: GoogleFonts.montserrat(
            fontSize: 18.sp,
            fontWeight: FontWeight.w700,
            color: AppColors.onSurface,
          ),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pop(),
            child: Text(
              'Saqlash',
              style: GoogleFonts.inter(
                fontSize: 14.sp,
                fontWeight: FontWeight.w600,
                color: AppColors.primary,
              ),
            ),
          ),
        ],
      ),
      body: SingleChildScrollView(
        padding: EdgeInsets.all(24.w),
        child: Column(
          children: [
            // Avatar
            Center(
              child: Stack(
                children: [
                  CircleAvatar(
                    radius: 52.r,
                    backgroundColor: AppColors.surfaceContainerHigh,
                    child: Icon(Icons.person, size: 48.sp, color: AppColors.onSurfaceVariant),
                  ),
                  Positioned(
                    bottom: 0,
                    right: 0,
                    child: Container(
                      padding: EdgeInsets.all(6.w),
                      decoration: BoxDecoration(
                        gradient: AppGradients.primary,
                        shape: BoxShape.circle,
                      ),
                      child: Icon(Icons.camera_alt_outlined,
                          size: 16.sp, color: AppColors.onPrimary),
                    ),
                  ),
                ],
              ),
            ),
            SizedBox(height: 32.h),

            // Fields
            _buildLabel('Ism Familiya'),
            SizedBox(height: 8.h),
            GlassInput(
              hint: 'Ism Familiyangiz',
              controller: _nameController,
              prefixIcon: Icon(Icons.person_outline,
                  color: AppColors.onSurfaceVariant, size: 20.sp),
            ),
            SizedBox(height: 16.h),

            _buildLabel('Email'),
            SizedBox(height: 8.h),
            GlassInput(
              hint: 'Email manzilingiz',
              controller: _emailController,
              keyboardType: TextInputType.emailAddress,
              prefixIcon: Icon(Icons.email_outlined,
                  color: AppColors.onSurfaceVariant, size: 20.sp),
            ),
            SizedBox(height: 16.h),

            _buildLabel('Bio'),
            SizedBox(height: 8.h),
            GlassInput(
              hint: "O'zingiz haqingizda...",
              controller: _bioController,
              maxLines: 4,
            ),
            SizedBox(height: 32.h),

            GradientButton(
              text: 'Saqlash',
              onPressed: () => Navigator.of(context).pop(),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildLabel(String text) {
    return Align(
      alignment: Alignment.centerLeft,
      child: Text(
        text,
        style: GoogleFonts.inter(
          fontSize: 13.sp,
          fontWeight: FontWeight.w500,
          color: AppColors.onSurfaceVariant,
        ),
      ),
    );
  }
}
