import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';
import '../../core/theme/app_theme.dart';
import '../../core/widgets/common_widgets.dart';

class MediaEditorScreen extends StatefulWidget {
  const MediaEditorScreen({super.key});

  @override
  State<MediaEditorScreen> createState() => _MediaEditorScreenState();
}

class _MediaEditorScreenState extends State<MediaEditorScreen> {
  int _selectedFilterIndex = 0;
  double _brightness = 0.0;
  double _contrast = 0.0;
  double _saturation = 0.0;
  int _selectedToolIndex = -1;

  final List<Map<String, dynamic>> _filters = [
    {'name': 'Original', 'color': null},
    {'name': 'Vivid', 'color': AppColors.primaryContainer},
    {'name': 'Warm', 'color': AppColors.secondary},
    {'name': 'Cool', 'color': AppColors.tertiary},
    {'name': 'B&W', 'color': AppColors.onSurfaceVariant},
    {'name': 'Vintage', 'color': const Color(0xFFD4A574)},
    {'name': 'Drama', 'color': const Color(0xFF4A3F6B)},
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        leading: IconButton(
          icon: Icon(Icons.close, color: AppColors.onSurface, size: 22.sp),
          onPressed: () => Navigator.of(context).pop(),
        ),
        title: Text(
          'Tahrirlash',
          style: GoogleFonts.montserrat(
            fontSize: 18.sp,
            fontWeight: FontWeight.w700,
            color: AppColors.onSurface,
          ),
        ),
        actions: [
          GestureDetector(
            onTap: () {},
            child: Container(
              margin: EdgeInsets.only(right: 16.w),
              padding: EdgeInsets.symmetric(horizontal: 16.w, vertical: 8.h),
              decoration: BoxDecoration(
                gradient: AppGradients.primary,
                borderRadius: BorderRadius.circular(100.r),
              ),
              child: Text(
                'Saqlash',
                style: GoogleFonts.inter(
                  fontSize: 13.sp,
                  fontWeight: FontWeight.w600,
                  color: AppColors.onPrimary,
                ),
              ),
            ),
          ),
        ],
      ),
      body: Column(
        children: [
          // Preview Container
          Expanded(
            child: Container(
              margin: EdgeInsets.all(16.w),
              decoration: BoxDecoration(
                color: AppColors.surfaceContainerHigh,
                borderRadius: BorderRadius.circular(16.r),
                border: Border.all(color: AppColors.glassBorder),
              ),
              child: Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Icon(Icons.image_outlined,
                        color: AppColors.onSurfaceVariant, size: 64.sp),
                    SizedBox(height: 12.h),
                    Text(
                      'Rasm oldindan ko\'rish',
                      style: GoogleFonts.inter(
                        fontSize: 14.sp,
                        color: AppColors.onSurfaceVariant,
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),

          // Crop/Rotate Tools
          Container(
            padding: EdgeInsets.symmetric(vertical: 12.h),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                _buildToolButton(0, Icons.crop, 'Kesish'),
                _buildToolButton(1, Icons.rotate_left, 'Chapga'),
                _buildToolButton(2, Icons.rotate_right, "O'ngga"),
                _buildToolButton(3, Icons.flip, "Aks"),
                _buildToolButton(4, Icons.aspect_ratio, 'Nisbat'),
              ],
            ),
          ),

          // Filter Row
          Container(
            height: 90.h,
            padding: EdgeInsets.symmetric(vertical: 8.h),
            child: ListView.separated(
              scrollDirection: Axis.horizontal,
              padding: EdgeInsets.symmetric(horizontal: 16.w),
              itemCount: _filters.length,
              separatorBuilder: (_, __) => SizedBox(width: 12.w),
              itemBuilder: (context, index) {
                final filter = _filters[index];
                final isSelected = _selectedFilterIndex == index;
                return GestureDetector(
                  onTap: () => setState(() => _selectedFilterIndex = index),
                  child: Column(
                    children: [
                      AnimatedContainer(
                        duration: const Duration(milliseconds: 200),
                        width: 52.w,
                        height: 52.w,
                        decoration: BoxDecoration(
                          color: filter['color'] as Color? ??
                              AppColors.surfaceContainerHigh,
                          borderRadius: BorderRadius.circular(12.r),
                          border: Border.all(
                            color: isSelected
                                ? AppColors.primary
                                : AppColors.glassBorder,
                            width: isSelected ? 2 : 1,
                          ),
                        ),
                        child: filter['color'] == null
                            ? Icon(Icons.image_outlined,
                                color: AppColors.onSurfaceVariant,
                                size: 20.sp)
                            : null,
                      ),
                      SizedBox(height: 4.h),
                      Text(
                        filter['name'] as String,
                        style: GoogleFonts.inter(
                          fontSize: 10.sp,
                          fontWeight:
                              isSelected ? FontWeight.w600 : FontWeight.w400,
                          color: isSelected
                              ? AppColors.primary
                              : AppColors.onSurfaceVariant,
                        ),
                      ),
                    ],
                  ),
                );
              },
            ),
          ),

          // Adjustment Sliders
          GlassCard(
            borderRadius: BorderRadius.only(
              topLeft: Radius.circular(24.r),
              topRight: Radius.circular(24.r),
            ),
            padding: EdgeInsets.fromLTRB(24.w, 20.h, 24.w,
                MediaQuery.of(context).padding.bottom + 16.h),
            child: Column(
              children: [
                _buildSlider(
                  icon: Icons.brightness_6_outlined,
                  label: 'Yorqinlik',
                  value: _brightness,
                  onChanged: (v) => setState(() => _brightness = v),
                ),
                SizedBox(height: 12.h),
                _buildSlider(
                  icon: Icons.contrast,
                  label: 'Kontrast',
                  value: _contrast,
                  onChanged: (v) => setState(() => _contrast = v),
                ),
                SizedBox(height: 12.h),
                _buildSlider(
                  icon: Icons.color_lens_outlined,
                  label: 'To\'yinganlik',
                  value: _saturation,
                  onChanged: (v) => setState(() => _saturation = v),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildToolButton(int index, IconData icon, String label) {
    final isSelected = _selectedToolIndex == index;
    return GestureDetector(
      onTap: () => setState(() =>
          _selectedToolIndex = _selectedToolIndex == index ? -1 : index),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Container(
            padding: EdgeInsets.all(10.w),
            decoration: BoxDecoration(
              color: isSelected
                  ? AppColors.primaryContainer.withOpacity(0.2)
                  : AppColors.glassBackground,
              borderRadius: BorderRadius.circular(12.r),
              border: Border.all(
                color: isSelected ? AppColors.primary : AppColors.glassBorder,
              ),
            ),
            child: Icon(icon,
                color: isSelected ? AppColors.primary : AppColors.onSurfaceVariant,
                size: 20.sp),
          ),
          SizedBox(height: 4.h),
          Text(
            label,
            style: GoogleFonts.inter(
              fontSize: 10.sp,
              color: isSelected ? AppColors.primary : AppColors.onSurfaceVariant,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildSlider({
    required IconData icon,
    required String label,
    required double value,
    required ValueChanged<double> onChanged,
  }) {
    return Row(
      children: [
        Icon(icon, color: AppColors.onSurfaceVariant, size: 18.sp),
        SizedBox(width: 10.w),
        SizedBox(
          width: 70.w,
          child: Text(
            label,
            style: GoogleFonts.inter(
              fontSize: 12.sp,
              color: AppColors.onSurfaceVariant,
            ),
          ),
        ),
        Expanded(
          child: SliderTheme(
            data: SliderTheme.of(context).copyWith(
              activeTrackColor: AppColors.primary,
              inactiveTrackColor: AppColors.surfaceContainerHighest,
              thumbColor: AppColors.primary,
              trackHeight: 2.h,
              thumbShape: RoundSliderThumbShape(enabledThumbRadius: 6.r),
            ),
            child: Slider(
              value: value,
              min: -1.0,
              max: 1.0,
              onChanged: onChanged,
            ),
          ),
        ),
        SizedBox(
          width: 32.w,
          child: Text(
            '${(value * 100).round()}',
            textAlign: TextAlign.right,
            style: GoogleFonts.inter(
              fontSize: 12.sp,
              fontWeight: FontWeight.w500,
              color: AppColors.onSurface,
            ),
          ),
        ),
      ],
    );
  }
}
