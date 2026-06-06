import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';
import '../../core/theme/app_theme.dart';
import '../../core/widgets/common_widgets.dart';

class SecuritySettingsScreen extends StatefulWidget {
  const SecuritySettingsScreen({super.key});

  @override
  State<SecuritySettingsScreen> createState() => _SecuritySettingsScreenState();
}

class _SecuritySettingsScreenState extends State<SecuritySettingsScreen> {
  bool _twoFactorEnabled = false;
  bool _biometricEnabled = true;
  bool _loginAlerts = true;

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
          'Xavfsizlik',
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
            // Security Status Banner
            GlassCard(
              child: Row(
                children: [
                  Container(
                    padding: EdgeInsets.all(10.w),
                    decoration: BoxDecoration(
                      color: const Color(0xFF1B5E20).withOpacity(0.3),
                      borderRadius: BorderRadius.circular(12.r),
                    ),
                    child: Icon(Icons.shield_outlined,
                        color: const Color(0xFF81C784), size: 24.sp),
                  ),
                  SizedBox(width: 12.w),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('Himoya darajasi: Yaxshi',
                            style: GoogleFonts.inter(
                                fontSize: 14.sp,
                                fontWeight: FontWeight.w600,
                                color: const Color(0xFF81C784))),
                        Text('2FAni yoqish tavsiya etiladi',
                            style: GoogleFonts.inter(
                                fontSize: 12.sp,
                                color: AppColors.onSurfaceVariant)),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            SizedBox(height: 24.h),

            _buildSectionTitle('Kirish xavfsizligi'),
            SizedBox(height: 12.h),

            GlassCard(
              padding: EdgeInsets.zero,
              child: Column(
                children: [
                  _buildSwitchTile(
                    icon: Icons.phonelink_lock_outlined,
                    title: 'Ikki bosqichli tasdiqlash (2FA)',
                    subtitle: 'SMS orqali tasdiqlash kodi',
                    value: _twoFactorEnabled,
                    onChanged: (v) => setState(() => _twoFactorEnabled = v),
                    isFirst: true,
                  ),
                  Divider(height: 1, color: AppColors.glassBorder),
                  _buildSwitchTile(
                    icon: Icons.fingerprint,
                    title: 'Biometrik kirish',
                    subtitle: 'Barmoq izi yoki yuz ID',
                    value: _biometricEnabled,
                    onChanged: (v) => setState(() => _biometricEnabled = v),
                  ),
                  Divider(height: 1, color: AppColors.glassBorder),
                  _buildSwitchTile(
                    icon: Icons.notifications_active_outlined,
                    title: 'Kirish xabarlari',
                    subtitle: 'Yangi kirish haqida bildirishnoma',
                    value: _loginAlerts,
                    onChanged: (v) => setState(() => _loginAlerts = v),
                    isLast: true,
                  ),
                ],
              ),
            ),
            SizedBox(height: 24.h),

            _buildSectionTitle('Parol'),
            SizedBox(height: 12.h),

            GlassCard(
              padding: EdgeInsets.zero,
              child: Column(
                children: [
                  _buildArrowTile(
                    icon: Icons.lock_outline,
                    title: "Parolni o'zgartirish",
                    subtitle: 'Oxirgi o\'zgarish: 30 kun oldin',
                    isFirst: true,
                    isLast: true,
                    onTap: () {},
                  ),
                ],
              ),
            ),
            SizedBox(height: 24.h),

            _buildSectionTitle('Faol sessiyalar'),
            SizedBox(height: 12.h),

            GlassCard(
              padding: EdgeInsets.zero,
              child: Column(
                children: [
                  _buildArrowTile(
                    icon: Icons.devices_outlined,
                    title: 'Qurilmalarni boshqarish',
                    subtitle: '2 ta faol sessiya',
                    isFirst: true,
                    isLast: true,
                    onTap: () {},
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildSectionTitle(String title) {
    return Text(
      title,
      style: GoogleFonts.inter(
        fontSize: 13.sp,
        fontWeight: FontWeight.w600,
        color: AppColors.onSurfaceVariant,
        letterSpacing: 0.5,
      ),
    );
  }

  Widget _buildSwitchTile({
    required IconData icon,
    required String title,
    required String subtitle,
    required bool value,
    required ValueChanged<bool> onChanged,
    bool isFirst = false,
    bool isLast = false,
  }) {
    return Padding(
      padding: EdgeInsets.symmetric(horizontal: 16.w, vertical: 12.h),
      child: Row(
        children: [
          Container(
            padding: EdgeInsets.all(8.w),
            decoration: BoxDecoration(
              color: AppColors.primary.withOpacity(0.12),
              borderRadius: BorderRadius.circular(10.r),
            ),
            child: Icon(icon, color: AppColors.primary, size: 20.sp),
          ),
          SizedBox(width: 12.w),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(title,
                    style: GoogleFonts.inter(
                        fontSize: 14.sp,
                        fontWeight: FontWeight.w500,
                        color: AppColors.onSurface)),
                Text(subtitle,
                    style: GoogleFonts.inter(
                        fontSize: 12.sp, color: AppColors.onSurfaceVariant)),
              ],
            ),
          ),
          Switch(
            value: value,
            onChanged: onChanged,
            activeColor: AppColors.primary,
            activeTrackColor: AppColors.primary.withOpacity(0.3),
          ),
        ],
      ),
    );
  }

  Widget _buildArrowTile({
    required IconData icon,
    required String title,
    required String subtitle,
    required VoidCallback onTap,
    bool isFirst = false,
    bool isLast = false,
  }) {
    return InkWell(
      onTap: onTap,
      child: Padding(
        padding: EdgeInsets.symmetric(horizontal: 16.w, vertical: 14.h),
        child: Row(
          children: [
            Container(
              padding: EdgeInsets.all(8.w),
              decoration: BoxDecoration(
                color: AppColors.primary.withOpacity(0.12),
                borderRadius: BorderRadius.circular(10.r),
              ),
              child: Icon(icon, color: AppColors.primary, size: 20.sp),
            ),
            SizedBox(width: 12.w),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(title,
                      style: GoogleFonts.inter(
                          fontSize: 14.sp,
                          fontWeight: FontWeight.w500,
                          color: AppColors.onSurface)),
                  Text(subtitle,
                      style: GoogleFonts.inter(
                          fontSize: 12.sp, color: AppColors.onSurfaceVariant)),
                ],
              ),
            ),
            Icon(Icons.chevron_right_rounded,
                color: AppColors.onSurfaceVariant, size: 20.sp),
          ],
        ),
      ),
    );
  }
}
