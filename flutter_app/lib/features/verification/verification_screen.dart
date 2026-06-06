import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:go_router/go_router.dart';
import 'package:google_fonts/google_fonts.dart';
import '../../core/theme/app_theme.dart';
import '../../core/widgets/common_widgets.dart';

enum _VerifStep { info, documents, review, success }

class VerificationScreen extends StatefulWidget {
  const VerificationScreen({super.key});

  @override
  State<VerificationScreen> createState() => _VerificationScreenState();
}

class _VerificationScreenState extends State<VerificationScreen> {
  _VerifStep _step = _VerifStep.info;
  bool _isSubmitting = false;

  final _steps = ['Ma\'lumot', 'Hujjatlar', 'Ko\'rib chiqish', 'Tasdiqlandi'];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: _step != _VerifStep.success
          ? AppBar(
              backgroundColor: AppColors.background.withOpacity(0.8),
              leading: IconButton(
                icon: const Icon(Icons.arrow_back, color: AppColors.primary),
                onPressed: () {
                  if (_step == _VerifStep.info) {
                    context.pop();
                  } else {
                    setState(() => _step = _VerifStep.values[_step.index - 1]);
                  }
                },
              ),
              title: Text('Verifikatsiya',
                  style: GoogleFonts.montserrat(
                      fontSize: 18.sp, fontWeight: FontWeight.w700)),
            )
          : null,
      body: Column(
        children: [
          if (_step != _VerifStep.success) _buildStepIndicator(),
          Expanded(child: _buildStepContent()),
        ],
      ),
    );
  }

  Widget _buildStepIndicator() {
    return Container(
      padding: EdgeInsets.symmetric(horizontal: 20.w, vertical: 16.h),
      child: Row(
        children: List.generate(_steps.length * 2 - 1, (i) {
          if (i.isOdd) {
            final stepIndex = i ~/ 2;
            final isCompleted = stepIndex < _step.index;
            return Expanded(
              child: Container(
                height: 2,
                color: isCompleted ? AppColors.primary : AppColors.outlineVariant,
              ),
            );
          }
          final stepIndex = i ~/ 2;
          final isCompleted = stepIndex <= _step.index;
          return Container(
            width: 28.w,
            height: 28.w,
            decoration: BoxDecoration(
              gradient: isCompleted ? AppGradients.primary : null,
              color: isCompleted ? null : AppColors.surfaceContainerHigh,
              shape: BoxShape.circle,
              border: Border.all(
                color: isCompleted ? Colors.transparent : AppColors.outlineVariant,
              ),
            ),
            child: Center(
              child: stepIndex < _step.index
                  ? Icon(Icons.check, size: 14.sp, color: AppColors.onPrimary)
                  : Text('${stepIndex + 1}',
                      style: GoogleFonts.inter(
                          fontSize: 12.sp,
                          fontWeight: FontWeight.w700,
                          color: isCompleted
                              ? AppColors.onPrimary
                              : AppColors.onSurfaceVariant)),
            ),
          );
        }),
      ),
    );
  }

  Widget _buildStepContent() {
    switch (_step) {
      case _VerifStep.info:
        return _buildInfoStep();
      case _VerifStep.documents:
        return _buildDocumentsStep();
      case _VerifStep.review:
        return _buildReviewStep();
      case _VerifStep.success:
        return _buildSuccessStep();
    }
  }

  Widget _buildInfoStep() {
    return SingleChildScrollView(
      padding: EdgeInsets.all(20.w),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('Shaxsiy ma\'lumotlar',
              style: GoogleFonts.montserrat(
                  fontSize: 22.sp, fontWeight: FontWeight.w700)),
          SizedBox(height: 8.h),
          Text('Verifikatsiya uchun haqiqiy ma\'lumotlaringizni kiriting',
              style: GoogleFonts.inter(
                  fontSize: 14.sp, color: AppColors.onSurfaceVariant)),
          SizedBox(height: 24.h),
          _buildLabel('To\'liq ism'),
          GlassInput(hint: 'Ism Familiya Otasining ismi', prefixIcon: Icon(Icons.person_outline, color: AppColors.primary)),
          SizedBox(height: 16.h),
          _buildLabel('Pasport seriyasi va raqami'),
          GlassInput(hint: 'AA1234567', prefixIcon: Icon(Icons.badge_outlined, color: AppColors.primary)),
          SizedBox(height: 16.h),
          _buildLabel('Tug\'ilgan sana'),
          GlassInput(hint: '01.01.1990', prefixIcon: Icon(Icons.calendar_today_outlined, color: AppColors.primary)),
          SizedBox(height: 16.h),
          _buildLabel('Faoliyat turi'),
          Container(
            decoration: BoxDecoration(
              color: AppColors.surfaceContainer,
              borderRadius: BorderRadius.circular(16.r),
              border: Border.all(color: AppColors.glassBorder),
            ),
            child: DropdownButtonFormField<String>(
              decoration: InputDecoration(
                border: InputBorder.none,
                contentPadding: EdgeInsets.symmetric(horizontal: 16.w, vertical: 14.h),
                prefixIcon: Icon(Icons.work_outline, color: AppColors.primary),
              ),
              dropdownColor: AppColors.surfaceContainerHigh,
              hint: Text('Tanlang', style: GoogleFonts.inter(color: AppColors.onSurfaceVariant)),
              items: ['Musiqachi', 'Aktyor/Aktrisa', 'Sportchi', 'Blogger', 'Rassом', 'Boshqa']
                  .map((e) => DropdownMenuItem(value: e, child: Text(e, style: GoogleFonts.inter())))
                  .toList(),
              onChanged: (_) {},
            ),
          ),
          SizedBox(height: 32.h),
          GradientButton(
            text: 'Davom etish',
            onPressed: () => setState(() => _step = _VerifStep.documents),
          ),
        ],
      ),
    );
  }

  Widget _buildDocumentsStep() {
    return SingleChildScrollView(
      padding: EdgeInsets.all(20.w),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('Hujjatlar yuklash',
              style: GoogleFonts.montserrat(
                  fontSize: 22.sp, fontWeight: FontWeight.w700)),
          SizedBox(height: 8.h),
          Text('Pasport yoki ID karta rasmini yuklang',
              style: GoogleFonts.inter(
                  fontSize: 14.sp, color: AppColors.onSurfaceVariant)),
          SizedBox(height: 24.h),
          _buildUploadCard('Pasport old tomoni', Icons.credit_card_outlined),
          SizedBox(height: 16.h),
          _buildUploadCard('Pasport orqa tomoni', Icons.credit_card),
          SizedBox(height: 16.h),
          _buildUploadCard('Selfie (yuz ko\'rinadigan)', Icons.face),
          SizedBox(height: 32.h),
          GradientButton(
            text: 'Yuborish',
            onPressed: () => setState(() => _step = _VerifStep.review),
          ),
        ],
      ),
    );
  }

  Widget _buildUploadCard(String label, IconData icon) {
    return GestureDetector(
      onTap: () {},
      child: Container(
        height: 120.h,
        decoration: BoxDecoration(
          color: AppColors.glassBackground,
          borderRadius: BorderRadius.circular(16.r),
          border: Border.all(
              color: AppColors.glassBorder, style: BorderStyle.solid),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(Icons.cloud_upload_outlined,
                color: AppColors.primary, size: 36.sp),
            SizedBox(height: 8.h),
            Text(label,
                style: GoogleFonts.inter(
                    fontSize: 14.sp, color: AppColors.onSurface)),
            Text('Bosing yoki sudrang',
                style: GoogleFonts.inter(
                    fontSize: 12.sp, color: AppColors.onSurfaceVariant)),
          ],
        ),
      ),
    );
  }

  Widget _buildReviewStep() {
    return Center(
      child: Padding(
        padding: EdgeInsets.all(20.w),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Container(
              width: 80.w,
              height: 80.w,
              decoration: BoxDecoration(
                gradient: AppGradients.primary,
                shape: BoxShape.circle,
              ),
              child: Icon(Icons.hourglass_top,
                  color: AppColors.onPrimary, size: 40.sp),
            ),
            SizedBox(height: 24.h),
            Text('Ko\'rib chiqilmoqda',
                style: GoogleFonts.montserrat(
                    fontSize: 24.sp, fontWeight: FontWeight.w700)),
            SizedBox(height: 12.h),
            Text(
              'Hujjatlaringiz 1-3 ish kuni ichida ko\'rib chiqiladi.\nNatija emailingizga yuboriladi.',
              textAlign: TextAlign.center,
              style: GoogleFonts.inter(
                  fontSize: 14.sp, color: AppColors.onSurfaceVariant),
            ),
            SizedBox(height: 40.h),
            GradientButton(
              text: 'Holatni kuzatish',
              onPressed: () => setState(() => _step = _VerifStep.success),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildSuccessStep() {
    return Center(
      child: Padding(
        padding: EdgeInsets.all(20.w),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            TweenAnimationBuilder<double>(
              tween: Tween(begin: 0.0, end: 1.0),
              duration: const Duration(milliseconds: 600),
              curve: Curves.elasticOut,
              builder: (_, value, child) =>
                  Transform.scale(scale: value, child: child),
              child: Container(
                width: 100.w,
                height: 100.w,
                decoration: BoxDecoration(
                  gradient: AppGradients.primary,
                  shape: BoxShape.circle,
                  boxShadow: [
                    BoxShadow(
                        color: AppColors.primaryGlow, blurRadius: 30)
                  ],
                ),
                child: Icon(Icons.verified,
                    color: AppColors.onPrimary, size: 56.sp),
              ),
            ),
            SizedBox(height: 32.h),
            Text('Tabriklaymiz! 🎉',
                style: GoogleFonts.montserrat(
                    fontSize: 28.sp, fontWeight: FontWeight.w800)),
            SizedBox(height: 12.h),
            Text(
              'Hisobingiz muvaffaqiyatli tasdiqlandi.\nEndi barcha imkoniyatlardan foydalana olasiz.',
              textAlign: TextAlign.center,
              style: GoogleFonts.inter(
                  fontSize: 15.sp, color: AppColors.onSurfaceVariant),
            ),
            SizedBox(height: 40.h),
            GradientButton(
              text: 'Boshqa sahifaga',
              onPressed: () => context.go('/home'),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildLabel(String text) {
    return Padding(
      padding: EdgeInsets.only(bottom: 8.h),
      child: Text(text,
          style: GoogleFonts.inter(
              fontSize: 13.sp,
              fontWeight: FontWeight.w600,
              color: AppColors.onSurfaceVariant)),
    );
  }
}
