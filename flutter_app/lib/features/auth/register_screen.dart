import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';
import '../../core/theme/app_theme.dart';
import '../../core/widgets/common_widgets.dart';

class RegisterScreen extends StatefulWidget {
  const RegisterScreen({super.key});

  @override
  State<RegisterScreen> createState() => _RegisterScreenState();
}

class _RegisterScreenState extends State<RegisterScreen> {
  final _fullNameController = TextEditingController();
  final _emailController = TextEditingController();
  final _phoneController = TextEditingController();
  final _passwordController = TextEditingController();
  final _confirmPasswordController = TextEditingController();

  bool _selectedFan = true;
  bool _obscurePassword = true;
  bool _obscureConfirmPassword = true;
  bool _agreedToTerms = false;
  bool _isLoading = false;

  @override
  void dispose() {
    _fullNameController.dispose();
    _emailController.dispose();
    _phoneController.dispose();
    _passwordController.dispose();
    _confirmPasswordController.dispose();
    super.dispose();
  }

  bool get _formIsValid {
    return _fullNameController.text.trim().isNotEmpty &&
        _emailController.text.trim().isNotEmpty &&
        _phoneController.text.trim().isNotEmpty &&
        _passwordController.text.isNotEmpty &&
        _confirmPasswordController.text.isNotEmpty &&
        _agreedToTerms;
  }

  void _handleRegister() async {
    if (!_formIsValid) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            'Iltimos, barcha maydonlarni to\'ldiring va shartlarga roziling',
            style: GoogleFonts.inter(color: AppColors.onSurface),
          ),
          backgroundColor: AppColors.surfaceContainerHigh,
        ),
      );
      return;
    }
    if (_passwordController.text != _confirmPasswordController.text) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            'Parollar mos kelmadi',
            style: GoogleFonts.inter(color: AppColors.error),
          ),
          backgroundColor: AppColors.errorContainer,
        ),
      );
      return;
    }
    setState(() => _isLoading = true);
    await Future.delayed(const Duration(milliseconds: 900));
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
            top: -60.h,
            left: -60.w,
            child: Container(
              width: 280.w,
              height: 280.w,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                gradient: RadialGradient(
                  colors: [
                    AppColors.primary.withOpacity(0.22),
                    Colors.transparent,
                  ],
                ),
              ),
            ),
          ),
          // Ambient glow — bottom-right pink
          Positioned(
            bottom: -80.h,
            right: -60.w,
            child: Container(
              width: 300.w,
              height: 300.w,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                gradient: RadialGradient(
                  colors: [
                    AppColors.secondary.withOpacity(0.18),
                    Colors.transparent,
                  ],
                ),
              ),
            ),
          ),
          SafeArea(
            child: Column(
              children: [
                _buildHeader(),
                Expanded(
                  child: Center(
                    child: SingleChildScrollView(
                      padding: EdgeInsets.symmetric(
                          horizontal: 24.w, vertical: 20.h),
                      child: ConstrainedBox(
                        constraints: BoxConstraints(maxWidth: 400.w),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.stretch,
                          children: [
                            _buildRoleSelector(),
                            SizedBox(height: 24.h),
                            _buildFormFields(),
                            SizedBox(height: 20.h),
                            _buildTermsCheckbox(),
                            SizedBox(height: 24.h),
                            _buildRegisterButton(),
                            SizedBox(height: 28.h),
                            _buildDivider(),
                            SizedBox(height: 20.h),
                            _buildSocialSignup(),
                            SizedBox(height: 28.h),
                            _buildLoginLink(),
                            SizedBox(height: 16.h),
                          ],
                        ),
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildHeader() {
    return Padding(
      padding: EdgeInsets.fromLTRB(8.w, 8.h, 24.w, 0),
      child: Row(
        children: [
          IconButton(
            icon: Icon(
              Icons.arrow_back_ios_new_rounded,
              color: AppColors.onSurface,
              size: 20.sp,
            ),
            onPressed: () => Navigator.pop(context),
          ),
          SizedBox(width: 4.w),
          Text(
            'Ro\'yxatdan o\'tish',
            style: GoogleFonts.montserrat(
              fontSize: 20.sp,
              fontWeight: FontWeight.w700,
              color: AppColors.onSurface,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildRoleSelector() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Rolni tanlang',
          style: GoogleFonts.inter(
            fontSize: 13.sp,
            fontWeight: FontWeight.w500,
            color: AppColors.onSurfaceVariant,
          ),
        ),
        SizedBox(height: 10.h),
        Row(
          children: [
            Expanded(child: _buildRoleCard(label: 'Muxlis', isFan: true, icon: Icons.favorite_outline)),
            SizedBox(width: 12.w),
            Expanded(child: _buildRoleCard(label: 'Mashhur', isFan: false, icon: Icons.star_outline)),
          ],
        ),
      ],
    );
  }

  Widget _buildRoleCard({
    required String label,
    required bool isFan,
    required IconData icon,
  }) {
    final isSelected = _selectedFan == isFan;
    return GestureDetector(
      onTap: () => setState(() => _selectedFan = isFan),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 250),
        curve: Curves.easeInOut,
        padding: EdgeInsets.symmetric(vertical: 16.h),
        decoration: BoxDecoration(
          gradient: isSelected ? AppGradients.primary : null,
          color: isSelected ? null : AppColors.glassBackground,
          borderRadius: BorderRadius.circular(16.r),
          border: Border.all(
            color: isSelected ? Colors.transparent : AppColors.glassBorder,
            width: 1,
          ),
          boxShadow: isSelected
              ? [
                  BoxShadow(
                    color: AppColors.primaryGlow,
                    blurRadius: 16,
                    spreadRadius: 0,
                  ),
                ]
              : null,
        ),
        child: Column(
          children: [
            Icon(
              icon,
              size: 24.sp,
              color: isSelected ? AppColors.onPrimary : AppColors.onSurfaceVariant,
            ),
            SizedBox(height: 8.h),
            Text(
              label,
              style: GoogleFonts.inter(
                fontSize: 14.sp,
                fontWeight: FontWeight.w600,
                color: isSelected ? AppColors.onPrimary : AppColors.onSurfaceVariant,
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildFormFields() {
    return Column(
      children: [
        GlassInput(
          hint: 'To\'liq ism',
          controller: _fullNameController,
          keyboardType: TextInputType.name,
          prefixIcon: Icon(
            Icons.person_outline,
            color: AppColors.onSurfaceVariant,
            size: 20.sp,
          ),
        ),
        SizedBox(height: 14.h),
        GlassInput(
          hint: 'Email manzil',
          controller: _emailController,
          keyboardType: TextInputType.emailAddress,
          prefixIcon: Icon(
            Icons.email_outlined,
            color: AppColors.onSurfaceVariant,
            size: 20.sp,
          ),
        ),
        SizedBox(height: 14.h),
        GlassInput(
          hint: 'Telefon raqam',
          controller: _phoneController,
          keyboardType: TextInputType.phone,
          prefixIcon: Icon(
            Icons.phone_outlined,
            color: AppColors.onSurfaceVariant,
            size: 20.sp,
          ),
        ),
        SizedBox(height: 14.h),
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
        SizedBox(height: 14.h),
        GlassInput(
          hint: 'Parolni tasdiqlash',
          controller: _confirmPasswordController,
          obscureText: _obscureConfirmPassword,
          prefixIcon: Icon(
            Icons.lock_outline,
            color: AppColors.onSurfaceVariant,
            size: 20.sp,
          ),
          suffixIcon: GestureDetector(
            onTap: () => setState(
                () => _obscureConfirmPassword = !_obscureConfirmPassword),
            child: Icon(
              _obscureConfirmPassword
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

  Widget _buildTermsCheckbox() {
    return GestureDetector(
      onTap: () => setState(() => _agreedToTerms = !_agreedToTerms),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          SizedBox(
            width: 22.w,
            height: 22.w,
            child: AnimatedContainer(
              duration: const Duration(milliseconds: 200),
              decoration: BoxDecoration(
                gradient: _agreedToTerms ? AppGradients.primary : null,
                color: _agreedToTerms ? null : Colors.transparent,
                borderRadius: BorderRadius.circular(6.r),
                border: Border.all(
                  color: _agreedToTerms
                      ? Colors.transparent
                      : AppColors.outline,
                  width: 1.5,
                ),
              ),
              child: _agreedToTerms
                  ? Icon(
                      Icons.check,
                      size: 14.sp,
                      color: AppColors.onPrimary,
                    )
                  : null,
            ),
          ),
          SizedBox(width: 12.w),
          Expanded(
            child: RichText(
              text: TextSpan(
                style: GoogleFonts.inter(
                  fontSize: 13.sp,
                  color: AppColors.onSurfaceVariant,
                  height: 1.5,
                ),
                children: [
                  const TextSpan(text: 'Men '),
                  TextSpan(
                    text: 'Foydalanish shartlari',
                    style: GoogleFonts.inter(
                      fontSize: 13.sp,
                      color: AppColors.primary,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                  const TextSpan(text: ' va '),
                  TextSpan(
                    text: 'maxfiylik siyosatiga',
                    style: GoogleFonts.inter(
                      fontSize: 13.sp,
                      color: AppColors.primary,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                  const TextSpan(text: ' roziman'),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildRegisterButton() {
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
      text: 'Ro\'yxatdan o\'tish',
      onPressed: _handleRegister,
    );
  }

  Widget _buildDivider() {
    return Row(
      children: [
        Expanded(child: Container(height: 1, color: AppColors.glassBorder)),
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
        Expanded(child: Container(height: 1, color: AppColors.glassBorder)),
      ],
    );
  }

  Widget _buildSocialSignup() {
    return Column(
      children: [
        _SocialSignupButton(
          label: 'Google orqali ro\'yxatdan o\'tish',
          icon: Icons.g_mobiledata_rounded,
          iconColor: const Color(0xFFEA4335),
          onTap: () => Navigator.pushReplacementNamed(context, '/home'),
        ),
        SizedBox(height: 12.h),
        _SocialSignupButton(
          label: 'Apple orqali ro\'yxatdan o\'tish',
          icon: Icons.apple,
          iconColor: AppColors.onSurface,
          onTap: () => Navigator.pushReplacementNamed(context, '/home'),
        ),
      ],
    );
  }

  Widget _buildLoginLink() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text(
          'Allaqachon hisobingiz bormi? ',
          style: GoogleFonts.inter(
            fontSize: 14.sp,
            color: AppColors.onSurfaceVariant,
          ),
        ),
        GestureDetector(
          onTap: () => Navigator.pop(context),
          child: Text(
            'Kirish',
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

class _SocialSignupButton extends StatelessWidget {
  final String label;
  final IconData icon;
  final Color iconColor;
  final VoidCallback onTap;

  const _SocialSignupButton({
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
                fontSize: 13.sp,
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
