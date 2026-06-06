import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:go_router/go_router.dart';
import 'package:google_fonts/google_fonts.dart';
import '../../core/theme/app_theme.dart';
import '../../core/widgets/common_widgets.dart';

class SettingsScreen extends StatefulWidget {
  const SettingsScreen({super.key});

  @override
  State<SettingsScreen> createState() => _SettingsScreenState();
}

class _SettingsScreenState extends State<SettingsScreen> {
  bool _pushNotifications = true;
  bool _emailNotifications = false;
  bool _smsNotifications = true;
  bool _biometrics = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(
        backgroundColor: AppColors.background.withOpacity(0.8),
        leading: IconButton(
          icon: const Icon(Icons.arrow_back, color: AppColors.primary),
          onPressed: () => context.pop(),
        ),
        title: Text(
          'Sozlamalar',
          style: GoogleFonts.montserrat(
              fontSize: 18.sp, fontWeight: FontWeight.w700),
        ),
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            _buildProfileCard(),
            SizedBox(height: 8.h),
            _buildSection('Hisob', [
              _buildTile(Icons.person_outline, 'Profilni tahrirlash', onTap: () => context.push('/edit-profile')),
              _buildTile(Icons.lock_outline, 'Parolni o\'zgartirish', onTap: () => context.push('/security-settings')),
              _buildTile(Icons.phone_outlined, 'Telefon raqami'),
              _buildTile(Icons.verified_outlined, 'Verifikatsiya', onTap: () => context.push('/verification')),
            ]),
            _buildSection('Bildirishnomalar', [
              _buildToggleTile(Icons.notifications_outlined, 'Push bildirishnomalar',
                  _pushNotifications, (v) => setState(() => _pushNotifications = v)),
              _buildToggleTile(Icons.email_outlined, 'Email bildirishnomalar',
                  _emailNotifications, (v) => setState(() => _emailNotifications = v)),
              _buildToggleTile(Icons.sms_outlined, 'SMS bildirishnomalar',
                  _smsNotifications, (v) => setState(() => _smsNotifications = v)),
            ]),
            _buildSection('Xavfsizlik', [
              _buildToggleTile(Icons.fingerprint, 'Biometrik kirish',
                  _biometrics, (v) => setState(() => _biometrics = v)),
              _buildTile(Icons.security_outlined, 'Ikki bosqichli tasdiqlash'),
              _buildTile(Icons.devices_outlined, 'Faol qurilmalar'),
            ]),
            _buildSection('To\'lovlar', [
              _buildTile(Icons.credit_card_outlined, 'Karta qo\'shish'),
              _buildTile(Icons.account_balance_wallet_outlined, 'Hamyon', onTap: () => context.push('/wallet')),
              _buildTile(Icons.receipt_outlined, 'To\'lov tarixi'),
            ]),
            _buildSection('Qo\'llab-quvvatlash', [
              _buildTile(Icons.help_outline, 'Yordam markazi'),
              _buildTile(Icons.feedback_outlined, 'Fikr bildirish'),
              _buildTile(Icons.info_outline, 'Ilova haqida'),
            ]),
            Padding(
              padding: EdgeInsets.all(20.w),
              child: GestureDetector(
                onTap: () => _showLogoutDialog(),
                child: Container(
                  width: double.infinity,
                  padding: EdgeInsets.all(16.h),
                  decoration: BoxDecoration(
                    color: AppColors.errorContainer.withOpacity(0.2),
                    borderRadius: BorderRadius.circular(16.r),
                    border: Border.all(color: AppColors.errorContainer.withOpacity(0.4)),
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(Icons.logout, color: AppColors.error, size: 20.sp),
                      SizedBox(width: 8.w),
                      Text(
                        'Chiqish',
                        style: GoogleFonts.inter(
                            fontSize: 16.sp,
                            fontWeight: FontWeight.w600,
                            color: AppColors.error),
                      ),
                    ],
                  ),
                ),
              ),
            ),
            SizedBox(height: 20.h),
          ],
        ),
      ),
    );
  }

  Widget _buildProfileCard() {
    return Container(
      margin: EdgeInsets.all(20.w),
      padding: EdgeInsets.all(16.w),
      decoration: BoxDecoration(
        color: AppColors.glassBackground,
        borderRadius: BorderRadius.circular(20.r),
        border: Border.all(color: AppColors.glassBorder),
      ),
      child: Row(
        children: [
          Stack(
            children: [
              NetworkAvatarImage(imageUrl: null, radius: 32),
              Positioned(
                bottom: 0,
                right: 0,
                child: Container(
                  width: 20.w,
                  height: 20.w,
                  decoration: BoxDecoration(
                    gradient: AppGradients.primary,
                    shape: BoxShape.circle,
                    border: Border.all(color: AppColors.background, width: 2),
                  ),
                  child: Icon(Icons.edit, size: 11.sp, color: AppColors.onPrimary),
                ),
              ),
            ],
          ),
          SizedBox(width: 16.w),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('Alisher Umarov',
                    style: GoogleFonts.montserrat(
                        fontSize: 18.sp, fontWeight: FontWeight.w700)),
                Text('alisher@email.com',
                    style: GoogleFonts.inter(
                        fontSize: 14.sp, color: AppColors.onSurfaceVariant)),
                SizedBox(height: 4.h),
                Container(
                  padding: EdgeInsets.symmetric(horizontal: 8.w, vertical: 2.h),
                  decoration: BoxDecoration(
                    gradient: AppGradients.primary,
                    borderRadius: BorderRadius.circular(100.r),
                  ),
                  child: Text('Premium',
                      style: GoogleFonts.inter(
                          fontSize: 10.sp,
                          fontWeight: FontWeight.w700,
                          color: AppColors.onPrimary)),
                ),
              ],
            ),
          ),
          Icon(Icons.chevron_right, color: AppColors.onSurfaceVariant),
        ],
      ),
    );
  }

  Widget _buildSection(String title, List<Widget> tiles) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: EdgeInsets.symmetric(horizontal: 20.w, vertical: 8.h),
          child: Text(title,
              style: GoogleFonts.montserrat(
                  fontSize: 14.sp,
                  fontWeight: FontWeight.w700,
                  color: AppColors.onSurfaceVariant,
                  letterSpacing: 0.5)),
        ),
        Container(
          margin: EdgeInsets.symmetric(horizontal: 20.w),
          decoration: BoxDecoration(
            color: AppColors.glassBackground,
            borderRadius: BorderRadius.circular(16.r),
            border: Border.all(color: AppColors.glassBorder),
          ),
          child: Column(children: tiles),
        ),
        SizedBox(height: 8.h),
      ],
    );
  }

  Widget _buildTile(IconData icon, String label, {VoidCallback? onTap}) {
    return ListTile(
      onTap: onTap,
      leading: Icon(icon, color: AppColors.primary, size: 22.sp),
      title: Text(label,
          style: GoogleFonts.inter(fontSize: 15.sp, color: AppColors.onSurface)),
      trailing: Icon(Icons.chevron_right,
          color: AppColors.onSurfaceVariant, size: 20.sp),
      contentPadding: EdgeInsets.symmetric(horizontal: 16.w, vertical: 2.h),
    );
  }

  Widget _buildToggleTile(
      IconData icon, String label, bool value, Function(bool) onChanged) {
    return ListTile(
      leading: Icon(icon, color: AppColors.primary, size: 22.sp),
      title: Text(label,
          style: GoogleFonts.inter(fontSize: 15.sp, color: AppColors.onSurface)),
      trailing: Switch(
        value: value,
        onChanged: onChanged,
        activeColor: AppColors.primary,
        activeTrackColor: AppColors.primaryContainer.withOpacity(0.4),
      ),
      contentPadding: EdgeInsets.symmetric(horizontal: 16.w, vertical: 2.h),
    );
  }

  void _showLogoutDialog() {
    showDialog(
      context: context,
      builder: (_) => AlertDialog(
        backgroundColor: AppColors.surfaceContainerHigh,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20.r)),
        title: Text('Chiqish',
            style: GoogleFonts.montserrat(fontWeight: FontWeight.w700)),
        content: Text('Hisobdan chiqishni xohlaysizmi?',
            style: GoogleFonts.inter(color: AppColors.onSurfaceVariant)),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: Text('Bekor qilish',
                style: GoogleFonts.inter(color: AppColors.onSurfaceVariant)),
          ),
          TextButton(
            onPressed: () {
              Navigator.pop(context);
              context.go('/login');
            },
            child: Text('Chiqish',
                style: GoogleFonts.inter(
                    color: AppColors.error, fontWeight: FontWeight.w600)),
          ),
        ],
      ),
    );
  }
}
