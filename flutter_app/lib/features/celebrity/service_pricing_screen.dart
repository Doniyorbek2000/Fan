import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';
import '../../core/theme/app_theme.dart';
import '../../core/widgets/common_widgets.dart';

class ServicePricingScreen extends StatefulWidget {
  const ServicePricingScreen({super.key});

  @override
  State<ServicePricingScreen> createState() => _ServicePricingScreenState();
}

class _ServicePricingScreenState extends State<ServicePricingScreen> {
  int _selectedServiceIndex = 0;
  final List<TextEditingController> _priceControllers = List.generate(
    4,
    (_) => TextEditingController(),
  );
  int _selectedDurationIndex = 1;
  final List<bool> _availability = [
    true,
    true,
    true,
    true,
    true,
    false,
    false,
  ];
  final List<String> _days = ['Du', 'Se', 'Chor', 'Pay', 'Ju', 'Sha', 'Yak'];

  final List<Map<String, dynamic>> _services = [
    {
      'icon': Icons.videocam_outlined,
      'title': 'Video qo\'ng\'iroq',
      'description': 'Jonli video suhbat',
      'enabled': true,
    },
    {
      'icon': Icons.mic_outlined,
      'title': 'Shaxsiy tabrik',
      'description': 'Maxsus video tabrik',
      'enabled': true,
    },
    {
      'icon': Icons.chat_bubble_outline,
      'title': 'Chat xabar',
      'description': 'Shaxsiy xabar',
      'enabled': true,
    },
    {
      'icon': Icons.live_tv_outlined,
      'title': 'Jonli efir',
      'description': 'Maxsus jonli efir',
      'enabled': false,
    },
  ];

  final List<Map<String, dynamic>> _durations = [
    {'label': '15 daq', 'value': 15},
    {'label': '30 daq', 'value': 30},
    {'label': '45 daq', 'value': 45},
    {'label': '1 soat', 'value': 60},
  ];

  @override
  void initState() {
    super.initState();
    _priceControllers[0].text = '150000';
    _priceControllers[1].text = '200000';
    _priceControllers[2].text = '50000';
    _priceControllers[3].text = '500000';
  }

  @override
  void dispose() {
    for (final c in _priceControllers) {
      c.dispose();
    }
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
          'Xizmat narxlari',
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
            // Service Type Cards
            Text(
              'Xizmat turlari',
              style: GoogleFonts.montserrat(
                fontSize: 16.sp,
                fontWeight: FontWeight.w700,
                color: AppColors.onSurface,
              ),
            ),
            SizedBox(height: 12.h),
            ...List.generate(_services.length, (index) {
              final service = _services[index];
              final isSelected = _selectedServiceIndex == index;
              return GestureDetector(
                onTap: () => setState(() => _selectedServiceIndex = index),
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 200),
                  margin: EdgeInsets.only(bottom: 10.h),
                  padding: EdgeInsets.all(14.w),
                  decoration: BoxDecoration(
                    color: isSelected
                        ? AppColors.primary.withOpacity(0.1)
                        : AppColors.glassBackground,
                    borderRadius: BorderRadius.circular(14.r),
                    border: Border.all(
                      color:
                          isSelected ? AppColors.primary : AppColors.glassBorder,
                      width: isSelected ? 1.5 : 1,
                    ),
                  ),
                  child: Row(
                    children: [
                      Container(
                        padding: EdgeInsets.all(10.w),
                        decoration: BoxDecoration(
                          color: isSelected
                              ? AppColors.primaryContainer.withOpacity(0.2)
                              : AppColors.surfaceContainerHigh,
                          borderRadius: BorderRadius.circular(12.r),
                        ),
                        child: Icon(
                          service['icon'] as IconData,
                          color: isSelected
                              ? AppColors.primary
                              : AppColors.onSurfaceVariant,
                          size: 22.sp,
                        ),
                      ),
                      SizedBox(width: 12.w),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              service['title'] as String,
                              style: GoogleFonts.inter(
                                fontSize: 14.sp,
                                fontWeight: FontWeight.w600,
                                color: AppColors.onSurface,
                              ),
                            ),
                            SizedBox(height: 2.h),
                            Text(
                              service['description'] as String,
                              style: GoogleFonts.inter(
                                fontSize: 12.sp,
                                color: AppColors.onSurfaceVariant,
                              ),
                            ),
                          ],
                        ),
                      ),
                      Switch(
                        value: service['enabled'] as bool,
                        onChanged: (v) {
                          setState(() => _services[index]['enabled'] = v);
                        },
                        activeColor: AppColors.primary,
                        activeTrackColor:
                            AppColors.primaryContainer.withOpacity(0.3),
                        inactiveTrackColor: AppColors.surfaceContainerHighest,
                      ),
                    ],
                  ),
                ),
              );
            }),
            SizedBox(height: 24.h),

            // Price Input
            Text(
              'Narx belgilash',
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
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    _services[_selectedServiceIndex]['title'] as String,
                    style: GoogleFonts.inter(
                      fontSize: 14.sp,
                      fontWeight: FontWeight.w600,
                      color: AppColors.onSurface,
                    ),
                  ),
                  SizedBox(height: 12.h),
                  Container(
                    decoration: BoxDecoration(
                      color: AppColors.surfaceContainer,
                      borderRadius: BorderRadius.circular(14.r),
                      border: Border.all(color: AppColors.glassBorder),
                    ),
                    child: TextField(
                      controller: _priceControllers[_selectedServiceIndex],
                      keyboardType: TextInputType.number,
                      style: GoogleFonts.montserrat(
                        fontSize: 24.sp,
                        fontWeight: FontWeight.w800,
                        color: AppColors.onSurface,
                      ),
                      decoration: InputDecoration(
                        border: InputBorder.none,
                        contentPadding: EdgeInsets.symmetric(
                            horizontal: 16.w, vertical: 14.h),
                        suffixText: "so'm",
                        suffixStyle: GoogleFonts.inter(
                          fontSize: 14.sp,
                          color: AppColors.onSurfaceVariant,
                        ),
                      ),
                    ),
                  ),
                  SizedBox(height: 8.h),
                  Text(
                    "Platformadan 15% komissiya ushlanadi",
                    style: GoogleFonts.inter(
                      fontSize: 12.sp,
                      color: AppColors.onSurfaceVariant,
                    ),
                  ),
                ],
              ),
            ),
            SizedBox(height: 24.h),

            // Duration Selector
            Text(
              'Davomiylik',
              style: GoogleFonts.montserrat(
                fontSize: 16.sp,
                fontWeight: FontWeight.w700,
                color: AppColors.onSurface,
              ),
            ),
            SizedBox(height: 12.h),
            Row(
              children: List.generate(_durations.length, (index) {
                final isSelected = _selectedDurationIndex == index;
                return Expanded(
                  child: GestureDetector(
                    onTap: () =>
                        setState(() => _selectedDurationIndex = index),
                    child: AnimatedContainer(
                      duration: const Duration(milliseconds: 200),
                      margin: EdgeInsets.only(
                          right: index < _durations.length - 1 ? 8.w : 0),
                      padding: EdgeInsets.symmetric(vertical: 12.h),
                      decoration: BoxDecoration(
                        color: isSelected
                            ? AppColors.primaryContainer.withOpacity(0.2)
                            : AppColors.glassBackground,
                        borderRadius: BorderRadius.circular(12.r),
                        border: Border.all(
                          color: isSelected
                              ? AppColors.primary
                              : AppColors.glassBorder,
                          width: isSelected ? 1.5 : 1,
                        ),
                      ),
                      child: Center(
                        child: Text(
                          _durations[index]['label'] as String,
                          style: GoogleFonts.inter(
                            fontSize: 13.sp,
                            fontWeight: isSelected
                                ? FontWeight.w600
                                : FontWeight.w400,
                            color: isSelected
                                ? AppColors.primary
                                : AppColors.onSurfaceVariant,
                          ),
                        ),
                      ),
                    ),
                  ),
                );
              }),
            ),
            SizedBox(height: 24.h),

            // Availability Schedule
            Text(
              'Mavjudlik jadvali',
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
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: List.generate(7, (index) {
                      final isAvailable = _availability[index];
                      return GestureDetector(
                        onTap: () => setState(
                            () => _availability[index] = !_availability[index]),
                        child: AnimatedContainer(
                          duration: const Duration(milliseconds: 200),
                          width: 38.w,
                          height: 38.w,
                          decoration: BoxDecoration(
                            color: isAvailable
                                ? AppColors.primaryContainer.withOpacity(0.2)
                                : AppColors.surfaceContainerHigh,
                            shape: BoxShape.circle,
                            border: Border.all(
                              color: isAvailable
                                  ? AppColors.primary
                                  : AppColors.glassBorder,
                            ),
                          ),
                          child: Center(
                            child: Text(
                              _days[index],
                              style: GoogleFonts.inter(
                                fontSize: 11.sp,
                                fontWeight: FontWeight.w600,
                                color: isAvailable
                                    ? AppColors.primary
                                    : AppColors.onSurfaceVariant,
                              ),
                            ),
                          ),
                        ),
                      );
                    }),
                  ),
                  SizedBox(height: 16.h),
                  Row(
                    children: [
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              'Boshlanish',
                              style: GoogleFonts.inter(
                                fontSize: 12.sp,
                                color: AppColors.onSurfaceVariant,
                              ),
                            ),
                            SizedBox(height: 6.h),
                            Container(
                              padding: EdgeInsets.symmetric(
                                  horizontal: 14.w, vertical: 10.h),
                              decoration: BoxDecoration(
                                color: AppColors.surfaceContainer,
                                borderRadius: BorderRadius.circular(10.r),
                                border:
                                    Border.all(color: AppColors.glassBorder),
                              ),
                              child: Row(
                                children: [
                                  Icon(Icons.access_time,
                                      color: AppColors.onSurfaceVariant,
                                      size: 16.sp),
                                  SizedBox(width: 8.w),
                                  Text(
                                    '09:00',
                                    style: GoogleFonts.inter(
                                      fontSize: 14.sp,
                                      fontWeight: FontWeight.w500,
                                      color: AppColors.onSurface,
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ],
                        ),
                      ),
                      SizedBox(width: 16.w),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              'Tugash',
                              style: GoogleFonts.inter(
                                fontSize: 12.sp,
                                color: AppColors.onSurfaceVariant,
                              ),
                            ),
                            SizedBox(height: 6.h),
                            Container(
                              padding: EdgeInsets.symmetric(
                                  horizontal: 14.w, vertical: 10.h),
                              decoration: BoxDecoration(
                                color: AppColors.surfaceContainer,
                                borderRadius: BorderRadius.circular(10.r),
                                border:
                                    Border.all(color: AppColors.glassBorder),
                              ),
                              child: Row(
                                children: [
                                  Icon(Icons.access_time,
                                      color: AppColors.onSurfaceVariant,
                                      size: 16.sp),
                                  SizedBox(width: 8.w),
                                  Text(
                                    '18:00',
                                    style: GoogleFonts.inter(
                                      fontSize: 14.sp,
                                      fontWeight: FontWeight.w500,
                                      color: AppColors.onSurface,
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
            SizedBox(height: 32.h),

            // Save Button
            GradientButton(
              text: "O'zgarishlarni saqlash",
              onPressed: () {
                ScaffoldMessenger.of(context).showSnackBar(
                  SnackBar(
                    content: Text(
                      "O'zgarishlar saqlandi!",
                      style: GoogleFonts.inter(color: AppColors.onPrimary),
                    ),
                    backgroundColor: AppColors.primaryContainer,
                    behavior: SnackBarBehavior.floating,
                    shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(12.r)),
                  ),
                );
              },
            ),
            SizedBox(height: 24.h),
          ],
        ),
      ),
    );
  }
}
