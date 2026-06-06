import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';
import '../../core/theme/app_theme.dart';
import '../../core/widgets/common_widgets.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  bool _selectedFan = true;
  bool _obscurePassword = true;
  bool _isLoading = false;

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  void _handleLogin() async {
    if (_emailController.text.trim().isEmpty ||
        _passwordController.text.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            'Iltimos, barcha maydonlarni to\'ldiring',
            style: GoogleFonts.inter(color: AppColors.onSurface),
          ),
          backgroundColor: AppColors.surfaceContainerHigh,
        ),
      );
      return;
    }
    setState(() => _isLoading = true);
    await Future.delayed(const Duration(milliseconds: 800));
    if (!mounted) return;
    setState(() => _isLoading = false);
    Navigator.pushReplacementNamed(context, '/home');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      body: Stack(
        children: [
          // Ambient glow — top-left purple
          Positioned(
            top: -80.h,
            left: -80.w,
            child: Container(
              width: 300.w,
              height: 300.w,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                gradient: RadialGradient(
                  colors: [
                    AppColors.primary.withOpacity(0.25),
                    Colors.transparent,
                  ],
                ),
              ),
            ),
          ),
          // Ambient glow — bottom-right pink
          Positioned(
            bottom: -100.h,
            right: -80.w,
            child: Container(
              width: 320.w,
              height: 320.w,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                gradient: RadialGradient(
                  colors: [
                    AppColors.secondary.withOpacity(0.2),
                    Colors.transparent,
                  ],
                ),
              ),
            ),
          ),
          SafeArea(
            child: Center(
              child: SingleChildScrollView(
                padding: EdgeInsets.symmetric(horizontal: 24.w, vertical: 32.h),
                child: ConstrainedBox(
                  constraints: BoxConstraints(maxWidth: 400.w),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      _buildLogo(),
                      SizedBox(height: 36.h),
                      _buildRoleToggle(),
                      SizedBox(height: 28.h),
                      _buildFormFields(),
                      SizedBox(height: 10.h),
                      _buildForgotPassword(),
                      SizedBox(height: 24.h),
                      _buildLoginButton(),
                      SizedBox(height: 28.h),
                      _buildDivider(),
                      SizedBox(height: 24.h),
                      _buildSocialButtons(),
                      SizedBox(height: 32.h),
                      _buildRegisterLink(),
                    ],
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildLogo() {
    return Column(
      children: [
        ShaderMask(
          shaderCallback: (bounds) =>
              AppGradients.primary.createShader(bounds),
          child: Text(
            'FanMeet',
            style: GoogleFonts.montserrat(
              fontSize: 40.sp,
              fontWeight: FontWeight.w800,
              color: Colors.white,
              letterSpacing: -1,
            ),
          ),
        ),
        SizedBox(height: 8.h),
        Text(
          'Sevimli yulduzlaringiz bilan bog\'laning',
          style: GoogleFonts.inter(
            fontSize: 14.sp,
            color: AppColors.onSurfaceVariant,
            fontWeight: FontWeight.w400,
          ),
          textAlign: TextAlign.center,
        ),
      ],
    );
  }

  Widget _buildRoleToggle() {
    return GlassCard(
      padding: EdgeInsets.all(4.w),
      borderRadius: BorderRadius.circular(100.r),
      child: Row(
        children: [
          _buildRoleTab(label: 'Muxlis', isFan: true),
          _buildRoleTab(label: 'Mashhur', isFan: false),
        ],
      ),
    );
  }

  Widget _buildRoleTab({required String label, required bool isFan}) {
    final isSelected = _selectedFan == isFan;
    return Expanded(
      child: GestureDetector(
        onTap: () => setState(() => _selectedFan = isFan),
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 250),
          curve: Curves.easeInOut,
          padding: EdgeInsets.symmetric(vertical: 12.h),
          decoration: BoxDecoration(
            gradient: isSelected ? AppGradients.primary : null,
            borderRadius: BorderRadius.circular(100.r),
          ),
          child: Text(
            label,
            textAlign: TextAlign.center,
            style: GoogleFonts.inter(
              fontSize: 14.sp,
              fontWeight: FontWeight.w600,
              color: isSelected
                  ? AppColors.onPrimary
                  : AppColors.onSurfaceVariant,
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildFormFields() {
    return Column(
      children: [
        GlassInput(
          hint: 'Email manzilingiz',
          controller: _emailController,
          keyboardType: TextInputType.emailAddress,
          prefixIcon: Icon(
            Icons.email_outlined,
            color: AppColors.onSurfaceVariant,
            size: 20.sp,
          ),
        ),
        SizedBox(height: 16.h),
        GlassInput(
          hint: 'Parol',
          controller: _passwordController,
          obscureText: _obscurePassword,
          prefixIcon: Icon(
            Icons.lock_outline,
            color: AppColors.onSurfaceVariant,
            size: 20.sp,
          ),
          suffixIcon: GestureDetector(
            onTap: () =>
                setState(() => _obscurePassword = !_obscurePassword),
            child: Icon(
              _obscurePassword
                  ? Icons.visibility_off_outlined
                  : Icons.visibility_outlined,
              color: AppColors.onSurfaceVariant,
              size: 20.sp,
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildForgotPassword() {
    return Align(
      alignment: Alignment.centerRight,
      child: GestureDetector(
        onTap: () => Navigator.pushNamed(context, '/reset-password'),
        child: Text(
          'Parolni unutdingizmi?',
          style: GoogleFonts.inter(
            fontSize: 13.sp,
            fontWeight: FontWeight.w500,
            color: AppColors.primary,
          ),
        ),
      ),
    );
  }

  Widget _buildLoginButton() {
    if (_isLoading) {
      return Container(
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
              strokeWidth: 2.5,
              color: AppColors.onPrimary,
            ),
          ),
        ),
      );
    }
    return GradientButton(
      text: 'Kirish',
      onPressed: _handleLogin,
    );
  }

  Widget _buildDivider() {
    return Row(
      children: [
        Expanded(
          child: Container(
            height: 1,
            color: AppColors.glassBorder,
          ),
        ),
        Padding(
          padding: EdgeInsets.symmetric(horizontal: 12.w),
          child: Text(
            'yoki',
            style: GoogleFonts.inter(
              fontSize: 13.sp,
              color: AppColors.onSurfaceVariant,
            ),
          ),
        ),
        Expanded(
          child: Container(
            height: 1,
            color: AppColors.glassBorder,
          ),
        ),
      ],
    );
  }

  Widget _buildSocialButtons() {
    return Column(
      children: [
        _SocialLoginButton(
          label: 'Google orqali kirish',
          icon: Icons.g_mobiledata_rounded,
          iconColor: const Color(0xFFEA4335),
          onTap: () => Navigator.pushReplacementNamed(context, '/home'),
        ),
        SizedBox(height: 12.h),
        _SocialLoginButton(
          label: 'Apple orqali kirish',
          icon: Icons.apple,
          iconColor: AppColors.onSurface,
          onTap: () => Navigator.pushReplacementNamed(context, '/home'),
        ),
      ],
    );
  }

  Widget _buildRegisterLink() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text(
          'Hisob yo\'qmi? ',
          style: GoogleFonts.inter(
            fontSize: 14.sp,
            color: AppColors.onSurfaceVariant,
          ),
        ),
        GestureDetector(
          onTap: () => Navigator.pushNamed(context, '/register'),
          child: Text(
            'Ro\'yxatdan o\'ting',
            style: GoogleFonts.inter(
              fontSize: 14.sp,
              fontWeight: FontWeight.w600,
              color: AppColors.primary,
            ),
          ),
        ),
      ],
    );
  }
}

class _SocialLoginButton extends StatelessWidget {
  final String label;
  final IconData icon;
  final Color iconColor;
  final VoidCallback onTap;

  const _SocialLoginButton({
    required this.label,
    required this.icon,
    required this.iconColor,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: GlassCard(
        padding: EdgeInsets.symmetric(vertical: 14.h, horizontal: 20.w),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(icon, color: iconColor, size: 22.sp),
            SizedBox(width: 10.w),
            Text(
              label,
              style: GoogleFonts.inter(
                fontSize: 14.sp,
                fontWeight: FontWeight.w500,
                color: AppColors.onSurface,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
