import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';
import '../../core/theme/app_theme.dart';
import '../../core/widgets/common_widgets.dart';

enum _ResetStep { email, otp, newPassword, success }

class ResetPasswordScreen extends StatefulWidget {
  const ResetPasswordScreen({super.key});

  @override
  State<ResetPasswordScreen> createState() => _ResetPasswordScreenState();
}

class _ResetPasswordScreenState extends State<ResetPasswordScreen>
    with SingleTickerProviderStateMixin {
  _ResetStep _currentStep = _ResetStep.email;

  // Step 1 — Email
  final _emailController = TextEditingController();

  // Step 2 — OTP
  final List<TextEditingController> _otpControllers =
      List.generate(4, (_) => TextEditingController());
  final List<FocusNode> _otpFocusNodes =
      List.generate(4, (_) => FocusNode());

  // Step 3 — New password
  final _newPasswordController = TextEditingController();
  final _confirmNewPasswordController = TextEditingController();
  bool _obscureNewPassword = true;
  bool _obscureConfirmNewPassword = true;

  bool _isLoading = false;

  late AnimationController _successAnimController;
  late Animation<double> _successScaleAnim;

  @override
  void initState() {
    super.initState();
    _successAnimController = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 500),
    );
    _successScaleAnim = CurvedAnimation(
      parent: _successAnimController,
      curve: Curves.elasticOut,
    );
  }

  @override
  void dispose() {
    _emailController.dispose();
    for (final c in _otpControllers) {
      c.dispose();
    }
    for (final f in _otpFocusNodes) {
      f.dispose();
    }
    _newPasswordController.dispose();
    _confirmNewPasswordController.dispose();
    _successAnimController.dispose();
    super.dispose();
  }

  void _handleEmailSubmit() async {
    if (_emailController.text.trim().isEmpty) {
      _showError('Iltimos, email manzilingizni kiriting');
      return;
    }
    setState(() => _isLoading = true);
    await Future.delayed(const Duration(milliseconds: 800));
    if (!mounted) return;
    setState(() {
      _isLoading = false;
      _currentStep = _ResetStep.otp;
    });
    Future.delayed(const Duration(milliseconds: 100), () {
      if (mounted) _otpFocusNodes[0].requestFocus();
    });
  }

  void _handleOtpSubmit() async {
    final otp = _otpControllers.map((c) => c.text).join();
    if (otp.length < 4) {
      _showError('Iltimos, to\'liq kodni kiriting');
      return;
    }
    setState(() => _isLoading = true);
    await Future.delayed(const Duration(milliseconds: 700));
    if (!mounted) return;
    setState(() {
      _isLoading = false;
      _currentStep = _ResetStep.newPassword;
    });
  }

  void _handleNewPasswordSubmit() async {
    if (_newPasswordController.text.isEmpty ||
        _confirmNewPasswordController.text.isEmpty) {
      _showError('Iltimos, barcha maydonlarni to\'ldiring');
      return;
    }
    if (_newPasswordController.text != _confirmNewPasswordController.text) {
      _showError('Parollar mos kelmadi');
      return;
    }
    if (_newPasswordController.text.length < 6) {
      _showError('Parol kamida 6 ta belgidan iborat bo\'lishi kerak');
      return;
    }
    setState(() => _isLoading = true);
    await Future.delayed(const Duration(milliseconds: 800));
    if (!mounted) return;
    setState(() {
      _isLoading = false;
      _currentStep = _ResetStep.success;
    });
    _successAnimController.forward();
  }

  void _showError(String message) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(
          message,
          style: GoogleFonts.inter(color: AppColors.onSurface),
        ),
        backgroundColor: AppColors.surfaceContainerHigh,
      ),
    );
  }

  String get _stepTitle {
    switch (_currentStep) {
      case _ResetStep.email:
        return 'Parolni tiklash';
      case _ResetStep.otp:
        return 'Kodni tasdiqlash';
      case _ResetStep.newPassword:
        return 'Yangi parol';
      case _ResetStep.success:
        return 'Muvaffaqiyatli!';
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      body: Stack(
        children: [
          // Ambient glow — top-left purple
          Positioned(
            top: -70.h,
            left: -70.w,
            child: Container(
              width: 260.w,
              height: 260.w,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                gradient: RadialGradient(
                  colors: [
                    AppColors.primary.withOpacity(0.2),
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
              width: 280.w,
              height: 280.w,
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
                          horizontal: 24.w, vertical: 24.h),
                      child: ConstrainedBox(
                        constraints: BoxConstraints(maxWidth: 400.w),
                        child: AnimatedSwitcher(
                          duration: const Duration(milliseconds: 350),
                          transitionBuilder: (child, anim) => FadeTransition(
                            opacity: anim,
                            child: SlideTransition(
                              position: Tween<Offset>(
                                begin: const Offset(0.05, 0),
                                end: Offset.zero,
                              ).animate(anim),
                              child: child,
                            ),
                          ),
                          child: _buildCurrentStep(),
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
    final showBack = _currentStep != _ResetStep.success;
    return Padding(
      padding: EdgeInsets.fromLTRB(8.w, 8.h, 24.w, 0),
      child: Row(
        children: [
          if (showBack)
            IconButton(
              icon: Icon(
                Icons.arrow_back_ios_new_rounded,
                color: AppColors.onSurface,
                size: 20.sp,
              ),
              onPressed: () {
                if (_currentStep == _ResetStep.email) {
                  Navigator.pop(context);
                } else if (_currentStep == _ResetStep.otp) {
                  setState(() => _currentStep = _ResetStep.email);
                } else if (_currentStep == _ResetStep.newPassword) {
                  setState(() => _currentStep = _ResetStep.otp);
                }
              },
            )
          else
            SizedBox(width: 48.w),
          SizedBox(width: 4.w),
          Text(
            _stepTitle,
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

  Widget _buildCurrentStep() {
    switch (_currentStep) {
      case _ResetStep.email:
        return _buildEmailStep();
      case _ResetStep.otp:
        return _buildOtpStep();
      case _ResetStep.newPassword:
        return _buildNewPasswordStep();
      case _ResetStep.success:
        return _buildSuccessStep();
    }
  }

  // ─── Step 1: Email ───────────────────────────────────────────────────────────

  Widget _buildEmailStep() {
    return Column(
      key: const ValueKey('email'),
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        SizedBox(height: 8.h),
        _buildStepIcon(Icons.lock_reset_rounded, AppColors.primary),
        SizedBox(height: 24.h),
        Text(
          'Email manzilingizni kiriting',
          style: GoogleFonts.montserrat(
            fontSize: 18.sp,
            fontWeight: FontWeight.w700,
            color: AppColors.onSurface,
          ),
          textAlign: TextAlign.center,
        ),
        SizedBox(height: 8.h),
        Text(
          'Parolni tiklash uchun email manzilingizga tasdiqlash kodi yuboramiz.',
          style: GoogleFonts.inter(
            fontSize: 14.sp,
            color: AppColors.onSurfaceVariant,
            height: 1.55,
          ),
          textAlign: TextAlign.center,
        ),
        SizedBox(height: 32.h),
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
        SizedBox(height: 28.h),
        _buildActionButton(
          label: 'Yuborish',
          onTap: _handleEmailSubmit,
        ),
        SizedBox(height: 20.h),
        Center(
          child: GestureDetector(
            onTap: () => Navigator.pop(context),
            child: Text(
              'Kirishga qaytish',
              style: GoogleFonts.inter(
                fontSize: 14.sp,
                fontWeight: FontWeight.w500,
                color: AppColors.primary,
              ),
            ),
          ),
        ),
      ],
    );
  }

  // ─── Step 2: OTP ────────────────────────────────────────────────────────────

  Widget _buildOtpStep() {
    return Column(
      key: const ValueKey('otp'),
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        SizedBox(height: 8.h),
        _buildStepIcon(Icons.mark_email_read_outlined, AppColors.tertiary),
        SizedBox(height: 24.h),
        Text(
          'Emailni tasdiqlang',
          style: GoogleFonts.montserrat(
            fontSize: 18.sp,
            fontWeight: FontWeight.w700,
            color: AppColors.onSurface,
          ),
          textAlign: TextAlign.center,
        ),
        SizedBox(height: 8.h),
        RichText(
          textAlign: TextAlign.center,
          text: TextSpan(
            style: GoogleFonts.inter(
              fontSize: 14.sp,
              color: AppColors.onSurfaceVariant,
              height: 1.55,
            ),
            children: [
              const TextSpan(text: '4 xonali kod '),
              TextSpan(
                text: _emailController.text.isNotEmpty
                    ? _emailController.text.trim()
                    : 'emailingizga',
                style: GoogleFonts.inter(
                  fontSize: 14.sp,
                  color: AppColors.primary,
                  fontWeight: FontWeight.w600,
                ),
              ),
              const TextSpan(text: ' ga yuborildi'),
            ],
          ),
        ),
        SizedBox(height: 36.h),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: List.generate(4, (i) => _buildOtpField(i)),
        ),
        SizedBox(height: 28.h),
        _buildActionButton(
          label: 'Tasdiqlash',
          onTap: _handleOtpSubmit,
        ),
        SizedBox(height: 20.h),
        Center(
          child: GestureDetector(
            onTap: _handleEmailSubmit,
            child: RichText(
              text: TextSpan(
                style: GoogleFonts.inter(
                  fontSize: 14.sp,
                  color: AppColors.onSurfaceVariant,
                ),
                children: [
                  const TextSpan(text: 'Kodni olmadingizmi? '),
                  TextSpan(
                    text: 'Qayta yuborish',
                    style: GoogleFonts.inter(
                      fontSize: 14.sp,
                      fontWeight: FontWeight.w600,
                      color: AppColors.primary,
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildOtpField(int index) {
    return Padding(
      padding: EdgeInsets.symmetric(horizontal: 8.w),
      child: Container(
        width: 56.w,
        height: 64.h,
        decoration: BoxDecoration(
          color: AppColors.surfaceContainer,
          borderRadius: BorderRadius.circular(14.r),
          border: Border.all(color: AppColors.glassBorder),
        ),
        child: TextField(
          controller: _otpControllers[index],
          focusNode: _otpFocusNodes[index],
          textAlign: TextAlign.center,
          keyboardType: TextInputType.number,
          maxLength: 1,
          style: GoogleFonts.montserrat(
            fontSize: 24.sp,
            fontWeight: FontWeight.w700,
            color: AppColors.onSurface,
          ),
          decoration: const InputDecoration(
            counterText: '',
            border: InputBorder.none,
          ),
          onChanged: (value) {
            if (value.isNotEmpty && index < 3) {
              _otpFocusNodes[index + 1].requestFocus();
            } else if (value.isEmpty && index > 0) {
              _otpFocusNodes[index - 1].requestFocus();
            }
          },
        ),
      ),
    );
  }

  // ─── Step 3: New Password ────────────────────────────────────────────────────

  Widget _buildNewPasswordStep() {
    return Column(
      key: const ValueKey('newPassword'),
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        SizedBox(height: 8.h),
        _buildStepIcon(Icons.lock_outlined, AppColors.secondary),
        SizedBox(height: 24.h),
        Text(
          'Yangi parol yarating',
          style: GoogleFonts.montserrat(
            fontSize: 18.sp,
            fontWeight: FontWeight.w700,
            color: AppColors.onSurface,
          ),
          textAlign: TextAlign.center,
        ),
        SizedBox(height: 8.h),
        Text(
          'Yangi parolingiz kamida 6 ta belgidan iborat bo\'lishi kerak.',
          style: GoogleFonts.inter(
            fontSize: 14.sp,
            color: AppColors.onSurfaceVariant,
            height: 1.55,
          ),
          textAlign: TextAlign.center,
        ),
        SizedBox(height: 32.h),
        GlassInput(
          hint: 'Yangi parol',
          controller: _newPasswordController,
          obscureText: _obscureNewPassword,
          prefixIcon: Icon(
            Icons.lock_outline,
            color: AppColors.onSurfaceVariant,
            size: 20.sp,
          ),
          suffixIcon: GestureDetector(
            onTap: () =>
                setState(() => _obscureNewPassword = !_obscureNewPassword),
            child: Icon(
              _obscureNewPassword
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
          controller: _confirmNewPasswordController,
          obscureText: _obscureConfirmNewPassword,
          prefixIcon: Icon(
            Icons.lock_outline,
            color: AppColors.onSurfaceVariant,
            size: 20.sp,
          ),
          suffixIcon: GestureDetector(
            onTap: () => setState(() =>
                _obscureConfirmNewPassword = !_obscureConfirmNewPassword),
            child: Icon(
              _obscureConfirmNewPassword
                  ? Icons.visibility_off_outlined
                  : Icons.visibility_outlined,
              color: AppColors.onSurfaceVariant,
              size: 20.sp,
            ),
          ),
        ),
        SizedBox(height: 28.h),
        _buildActionButton(
          label: 'Parolni yangilash',
          onTap: _handleNewPasswordSubmit,
        ),
      ],
    );
  }

  // ─── Step 4: Success ─────────────────────────────────────────────────────────

  Widget _buildSuccessStep() {
    return ScaleTransition(
      scale: _successScaleAnim,
      child: GlassCard(
        key: const ValueKey('success'),
        padding: EdgeInsets.all(32.w),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Center(
              child: Container(
                width: 80.w,
                height: 80.w,
                decoration: BoxDecoration(
                  gradient: AppGradients.primary,
                  shape: BoxShape.circle,
                  boxShadow: [
                    BoxShadow(
                      color: AppColors.primaryGlow,
                      blurRadius: 24,
                      spreadRadius: 0,
                    ),
                  ],
                ),
                child: Icon(
                  Icons.check_rounded,
                  size: 40.sp,
                  color: AppColors.onPrimary,
                ),
              ),
            ),
            SizedBox(height: 24.h),
            Text(
              'Parol muvaffaqiyatli o\'zgartirildi!',
              style: GoogleFonts.montserrat(
                fontSize: 18.sp,
                fontWeight: FontWeight.w700,
                color: AppColors.onSurface,
              ),
              textAlign: TextAlign.center,
            ),
            SizedBox(height: 10.h),
            Text(
              'Yangi parolingiz bilan hisobingizga kirishingiz mumkin.',
              style: GoogleFonts.inter(
                fontSize: 14.sp,
                color: AppColors.onSurfaceVariant,
                height: 1.55,
              ),
              textAlign: TextAlign.center,
            ),
            SizedBox(height: 32.h),
            GradientButton(
              text: 'Kirishga o\'tish',
              onPressed: () =>
                  Navigator.pushReplacementNamed(context, '/login'),
            ),
          ],
        ),
      ),
    );
  }

  // ─── Shared helpers ──────────────────────────────────────────────────────────

  Widget _buildStepIcon(IconData icon, Color color) {
    return Center(
      child: Container(
        width: 72.w,
        height: 72.w,
        decoration: BoxDecoration(
          color: color.withOpacity(0.12),
          shape: BoxShape.circle,
          border: Border.all(
            color: color.withOpacity(0.3),
            width: 1.5,
          ),
        ),
        child: Icon(icon, size: 32.sp, color: color),
      ),
    );
  }

  Widget _buildActionButton({
    required String label,
    required VoidCallback onTap,
  }) {
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
    return GradientButton(text: label, onPressed: onTap);
  }
}
