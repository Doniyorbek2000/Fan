import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';
import '../../core/theme/app_theme.dart';
import '../../core/widgets/common_widgets.dart';

class BookMeetingScreen extends StatefulWidget {
  const BookMeetingScreen({super.key});

  @override
  State<BookMeetingScreen> createState() => _BookMeetingScreenState();
}

class _BookMeetingScreenState extends State<BookMeetingScreen> {
  int _selectedTypeIndex = 0;
  int _selectedTimeIndex = -1;
  DateTime _selectedDate = DateTime.now().add(const Duration(days: 1));

  final List<Map<String, dynamic>> _meetingTypes = [
    {'icon': Icons.video_camera_front_outlined, 'label': 'Video call', 'duration': '30 daqiqa', 'price': '150,000'},
    {'icon': Icons.chat_bubble_outline, 'label': 'Chat', 'duration': '15 daqiqa', 'price': '50,000'},
    {'icon': Icons.live_tv_outlined, 'label': 'Jonli efir', 'duration': '60 daqiqa', 'price': '300,000'},
  ];

  final List<String> _times = ['10:00', '11:30', '13:00', '14:30', '16:00', '17:30'];

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
          'Uchrashuv band qilish',
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
            // Celebrity mini card
            GlassCard(
              child: Row(
                children: [
                  CircleAvatar(
                    radius: 28.r,
                    backgroundColor: AppColors.surfaceContainerHigh,
                    child: Icon(Icons.star_rounded, color: AppColors.primary, size: 28.sp),
                  ),
                  SizedBox(width: 12.w),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(
                          children: [
                            Text('Mashhur Inson',
                                style: GoogleFonts.inter(
                                    fontSize: 15.sp,
                                    fontWeight: FontWeight.w600,
                                    color: AppColors.onSurface)),
                            SizedBox(width: 4.w),
                            const VerifiedBadge(size: 14),
                          ],
                        ),
                        Text('Xonanda · Blogger',
                            style: GoogleFonts.inter(
                                fontSize: 13.sp, color: AppColors.onSurfaceVariant)),
                      ],
                    ),
                  ),
                  Container(
                    padding: EdgeInsets.symmetric(horizontal: 8.w, vertical: 4.h),
                    decoration: BoxDecoration(
                      color: AppColors.primary.withOpacity(0.15),
                      borderRadius: BorderRadius.circular(100.r),
                    ),
                    child: Row(
                      children: [
                        Icon(Icons.star_rounded, color: AppColors.primary, size: 12.sp),
                        SizedBox(width: 2.w),
                        Text('4.9', style: GoogleFonts.inter(fontSize: 12.sp, color: AppColors.primary, fontWeight: FontWeight.w600)),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            SizedBox(height: 24.h),

            _sectionTitle("Uchrashuv turi"),
            SizedBox(height: 12.h),
            ...List.generate(_meetingTypes.length, (i) {
              final type = _meetingTypes[i];
              final isSelected = _selectedTypeIndex == i;
              return GestureDetector(
                onTap: () => setState(() => _selectedTypeIndex = i),
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 200),
                  margin: EdgeInsets.only(bottom: 10.h),
                  padding: EdgeInsets.all(14.w),
                  decoration: BoxDecoration(
                    color: isSelected
                        ? AppColors.primary.withOpacity(0.12)
                        : AppColors.glassBackground,
                    borderRadius: BorderRadius.circular(14.r),
                    border: Border.all(
                      color: isSelected ? AppColors.primary : AppColors.glassBorder,
                      width: isSelected ? 1.5 : 1,
                    ),
                  ),
                  child: Row(
                    children: [
                      Container(
                        padding: EdgeInsets.all(8.w),
                        decoration: BoxDecoration(
                          color: isSelected
                              ? AppColors.primary.withOpacity(0.2)
                              : AppColors.surfaceContainerHigh,
                          borderRadius: BorderRadius.circular(10.r),
                        ),
                        child: Icon(type['icon'] as IconData,
                            color: isSelected ? AppColors.primary : AppColors.onSurfaceVariant,
                            size: 20.sp),
                      ),
                      SizedBox(width: 12.w),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(type['label'] as String,
                                style: GoogleFonts.inter(
                                    fontSize: 14.sp,
                                    fontWeight: FontWeight.w600,
                                    color: isSelected ? AppColors.primary : AppColors.onSurface)),
                            Text(type['duration'] as String,
                                style: GoogleFonts.inter(
                                    fontSize: 12.sp, color: AppColors.onSurfaceVariant)),
                          ],
                        ),
                      ),
                      Text("${type['price']} so'm",
                          style: GoogleFonts.inter(
                              fontSize: 14.sp,
                              fontWeight: FontWeight.w700,
                              color: isSelected ? AppColors.primary : AppColors.onSurface)),
                    ],
                  ),
                ),
              );
            }),

            SizedBox(height: 24.h),
            _sectionTitle('Sana tanlash'),
            SizedBox(height: 12.h),
            GlassCard(
              padding: EdgeInsets.zero,
              child: CalendarDatePicker(
                initialDate: _selectedDate,
                firstDate: DateTime.now(),
                lastDate: DateTime.now().add(const Duration(days: 60)),
                onDateChanged: (d) => setState(() => _selectedDate = d),
              ),
            ),

            SizedBox(height: 24.h),
            _sectionTitle('Vaqt tanlash'),
            SizedBox(height: 12.h),
            Wrap(
              spacing: 10.w,
              runSpacing: 10.h,
              children: List.generate(_times.length, (i) {
                final isSelected = _selectedTimeIndex == i;
                return GestureDetector(
                  onTap: () => setState(() => _selectedTimeIndex = i),
                  child: AnimatedContainer(
                    duration: const Duration(milliseconds: 200),
                    padding: EdgeInsets.symmetric(horizontal: 18.w, vertical: 10.h),
                    decoration: BoxDecoration(
                      gradient: isSelected ? AppGradients.primary : null,
                      color: isSelected ? null : AppColors.glassBackground,
                      borderRadius: BorderRadius.circular(100.r),
                      border: Border.all(
                        color: isSelected ? Colors.transparent : AppColors.glassBorder,
                      ),
                    ),
                    child: Text(
                      _times[i],
                      style: GoogleFonts.inter(
                        fontSize: 13.sp,
                        fontWeight: FontWeight.w600,
                        color: isSelected ? AppColors.onPrimary : AppColors.onSurface,
                      ),
                    ),
                  ),
                );
              }),
            ),

            SizedBox(height: 32.h),
            GradientButton(
              text: "Band qilish",
              onPressed: _selectedTimeIndex >= 0
                  ? () => Navigator.pushNamed(context, '/checkout')
                  : null,
            ),
            SizedBox(height: 24.h),
          ],
        ),
      ),
    );
  }

  Widget _sectionTitle(String title) {
    return Text(
      title,
      style: GoogleFonts.montserrat(
        fontSize: 16.sp,
        fontWeight: FontWeight.w700,
        color: AppColors.onSurface,
      ),
    );
  }
}
