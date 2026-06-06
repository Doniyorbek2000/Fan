import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';
import '../../core/theme/app_theme.dart';

class CelebrityDashboardScreen extends StatelessWidget {
  const CelebrityDashboardScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        leading: IconButton(
          icon: Icon(Icons.arrow_back_ios_new_rounded, color: AppColors.primary, size: 20.sp),
          onPressed: () => Navigator.of(context).pop(),
        ),
        title: Text('Panel',
            style: GoogleFonts.montserrat(fontSize: 18.sp, fontWeight: FontWeight.w700, color: AppColors.onSurface)),
      ),
      body: Center(
        child: Text('Panel sahifasi',
            style: GoogleFonts.inter(fontSize: 16.sp, color: AppColors.onSurfaceVariant)),
      ),
    );
  }
}
