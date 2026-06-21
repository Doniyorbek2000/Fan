import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';
import '../../core/theme/app_theme.dart';
import '../../core/widgets/common_widgets.dart';

class VideoPlayerScreen extends StatefulWidget {
  const VideoPlayerScreen({super.key});

  @override
  State<VideoPlayerScreen> createState() => _VideoPlayerScreenState();
}

class _VideoPlayerScreenState extends State<VideoPlayerScreen> {
  bool _isPlaying = false;
  double _currentPosition = 0.3;
  String _selectedQuality = '720p';
  bool _showQualitySelector = false;

  final List<String> _qualities = ['360p', '480p', '720p', '1080p'];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      body: SafeArea(
        child: Column(
          children: [
            // Video Area
            Stack(
              children: [
                Container(
                  width: double.infinity,
                  height: 240.h,
                  color: Colors.black,
                  child: Center(
                    child: Icon(
                      Icons.play_circle_outline,
                      color: AppColors.onSurfaceVariant.withOpacity(0.5),
                      size: 64.sp,
                    ),
                  ),
                ),

                // Back Button
                Positioned(
                  top: 8.h,
                  left: 8.w,
                  child: GestureDetector(
                    onTap: () => Navigator.of(context).pop(),
                    child: Container(
                      padding: EdgeInsets.all(8.w),
                      decoration: BoxDecoration(
                        color: Colors.black.withOpacity(0.5),
                        shape: BoxShape.circle,
                      ),
                      child: Icon(Icons.arrow_back_ios_new_rounded,
                          color: Colors.white, size: 18.sp),
                    ),
                  ),
                ),

                // Playback Controls Overlay
                Positioned.fill(
                  child: GestureDetector(
                    onTap: () => setState(() => _isPlaying = !_isPlaying),
                    child: Container(
                      color: Colors.transparent,
                      child: Center(
                        child: AnimatedOpacity(
                          opacity: _isPlaying ? 0.0 : 1.0,
                          duration: const Duration(milliseconds: 300),
                          child: Container(
                            padding: EdgeInsets.all(16.w),
                            decoration: BoxDecoration(
                              color: AppColors.primaryContainer.withOpacity(0.8),
                              shape: BoxShape.circle,
                            ),
                            child: Icon(
                              _isPlaying ? Icons.pause : Icons.play_arrow,
                              color: AppColors.onPrimary,
                              size: 32.sp,
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),

                // Progress Bar & Controls
                Positioned(
                  left: 0,
                  right: 0,
                  bottom: 0,
                  child: Container(
                    padding: EdgeInsets.fromLTRB(12.w, 8.h, 12.w, 8.h),
                    decoration: BoxDecoration(
                      gradient: LinearGradient(
                        begin: Alignment.topCenter,
                        end: Alignment.bottomCenter,
                        colors: [
                          Colors.transparent,
                          Colors.black.withOpacity(0.7),
                        ],
                      ),
                    ),
                    child: Column(
                      children: [
                        // Seek Bar
                        SliderTheme(
                          data: SliderTheme.of(context).copyWith(
                            activeTrackColor: AppColors.primary,
                            inactiveTrackColor: Colors.white.withOpacity(0.3),
                            thumbColor: AppColors.primary,
                            trackHeight: 2.h,
                            thumbShape:
                                RoundSliderThumbShape(enabledThumbRadius: 5.r),
                          ),
                          child: Slider(
                            value: _currentPosition,
                            onChanged: (v) =>
                                setState(() => _currentPosition = v),
                          ),
                        ),
                        Row(
                          children: [
                            Text(
                              '03:24',
                              style: GoogleFonts.inter(
                                  fontSize: 11.sp, color: Colors.white70),
                            ),
                            const Spacer(),
                            // Playback Buttons
                            GestureDetector(
                              onTap: () {},
                              child: Icon(Icons.skip_previous,
                                  color: Colors.white, size: 22.sp),
                            ),
                            SizedBox(width: 16.w),
                            GestureDetector(
                              onTap: () =>
                                  setState(() => _isPlaying = !_isPlaying),
                              child: Icon(
                                _isPlaying
                                    ? Icons.pause_rounded
                                    : Icons.play_arrow_rounded,
                                color: Colors.white,
                                size: 28.sp,
                              ),
                            ),
                            SizedBox(width: 16.w),
                            GestureDetector(
                              onTap: () {},
                              child: Icon(Icons.skip_next,
                                  color: Colors.white, size: 22.sp),
                            ),
                            const Spacer(),
                            Text(
                              '10:45',
                              style: GoogleFonts.inter(
                                  fontSize: 11.sp, color: Colors.white70),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                ),

                // Quality Selector Button
                Positioned(
                  top: 8.h,
                  right: 8.w,
                  child: GestureDetector(
                    onTap: () => setState(
                        () => _showQualitySelector = !_showQualitySelector),
                    child: Container(
                      padding:
                          EdgeInsets.symmetric(horizontal: 10.w, vertical: 6.h),
                      decoration: BoxDecoration(
                        color: Colors.black.withOpacity(0.5),
                        borderRadius: BorderRadius.circular(6.r),
                      ),
                      child: Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Icon(Icons.settings_outlined,
                              color: Colors.white, size: 14.sp),
                          SizedBox(width: 4.w),
                          Text(
                            _selectedQuality,
                            style: GoogleFonts.inter(
                                fontSize: 11.sp, color: Colors.white),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),

                // Quality Dropdown
                if (_showQualitySelector)
                  Positioned(
                    top: 40.h,
                    right: 8.w,
                    child: Container(
                      padding: EdgeInsets.symmetric(vertical: 4.h),
                      decoration: BoxDecoration(
                        color: AppColors.surfaceContainerHigh,
                        borderRadius: BorderRadius.circular(10.r),
                        border: Border.all(color: AppColors.glassBorder),
                      ),
                      child: Column(
                        children: _qualities.map((q) {
                          final isSelected = q == _selectedQuality;
                          return GestureDetector(
                            onTap: () => setState(() {
                              _selectedQuality = q;
                              _showQualitySelector = false;
                            }),
                            child: Container(
                              padding: EdgeInsets.symmetric(
                                  horizontal: 16.w, vertical: 8.h),
                              color: isSelected
                                  ? AppColors.primary.withOpacity(0.1)
                                  : Colors.transparent,
                              child: Text(
                                q,
                                style: GoogleFonts.inter(
                                  fontSize: 13.sp,
                                  fontWeight: isSelected
                                      ? FontWeight.w600
                                      : FontWeight.w400,
                                  color: isSelected
                                      ? AppColors.primary
                                      : AppColors.onSurface,
                                ),
                              ),
                            ),
                          );
                        }).toList(),
                      ),
                    ),
                  ),
              ],
            ),

            // Info Section
            Expanded(
              child: SingleChildScrollView(
                padding: EdgeInsets.all(20.w),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Maxsus tabrik videosi',
                      style: GoogleFonts.montserrat(
                        fontSize: 18.sp,
                        fontWeight: FontWeight.w700,
                        color: AppColors.onSurface,
                      ),
                    ),
                    SizedBox(height: 8.h),
                    Row(
                      children: [
                        NetworkAvatarImage(radius: 16, imageUrl: null),
                        SizedBox(width: 10.w),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Row(
                                children: [
                                  Text(
                                    'Mashhur Inson',
                                    style: GoogleFonts.inter(
                                      fontSize: 13.sp,
                                      fontWeight: FontWeight.w600,
                                      color: AppColors.onSurface,
                                    ),
                                  ),
                                  SizedBox(width: 4.w),
                                  VerifiedBadge(size: 14),
                                ],
                              ),
                              Text(
                                '15 iyun, 2025',
                                style: GoogleFonts.inter(
                                  fontSize: 11.sp,
                                  color: AppColors.onSurfaceVariant,
                                ),
                              ),
                            ],
                          ),
                        ),
                        GestureDetector(
                          onTap: () {},
                          child: Icon(Icons.share_outlined,
                              color: AppColors.onSurfaceVariant, size: 20.sp),
                        ),
                        SizedBox(width: 16.w),
                        GestureDetector(
                          onTap: () {},
                          child: Icon(Icons.download_outlined,
                              color: AppColors.onSurfaceVariant, size: 20.sp),
                        ),
                      ],
                    ),
                    SizedBox(height: 16.h),
                    Divider(color: AppColors.glassBorder),
                    SizedBox(height: 16.h),

                    // Description
                    Text(
                      'Bu video maxsus buyurtma asosida tayyorlangan. '
                      'Mashhur Inson tomonidan shaxsiy tabrik.',
                      style: GoogleFonts.inter(
                        fontSize: 14.sp,
                        color: AppColors.onSurfaceVariant,
                        height: 1.5,
                      ),
                    ),
                    SizedBox(height: 24.h),

                    // Related Content
                    Text(
                      "O'xshash videolar",
                      style: GoogleFonts.montserrat(
                        fontSize: 16.sp,
                        fontWeight: FontWeight.w700,
                        color: AppColors.onSurface,
                      ),
                    ),
                    SizedBox(height: 12.h),
                    ...List.generate(3, (index) {
                      return Padding(
                        padding: EdgeInsets.only(bottom: 12.h),
                        child: GlassCard(
                          padding: EdgeInsets.all(10.w),
                          child: Row(
                            children: [
                              Container(
                                width: 100.w,
                                height: 64.h,
                                decoration: BoxDecoration(
                                  color: AppColors.surfaceContainerHigh,
                                  borderRadius: BorderRadius.circular(8.r),
                                ),
                                child: Center(
                                  child: Icon(Icons.play_circle_outline,
                                      color: AppColors.onSurfaceVariant,
                                      size: 24.sp),
                                ),
                              ),
                              SizedBox(width: 12.w),
                              Expanded(
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      'Video tabrik #${index + 1}',
                                      style: GoogleFonts.inter(
                                        fontSize: 13.sp,
                                        fontWeight: FontWeight.w600,
                                        color: AppColors.onSurface,
                                      ),
                                    ),
                                    SizedBox(height: 4.h),
                                    Text(
                                      'Mashhur Inson',
                                      style: GoogleFonts.inter(
                                        fontSize: 11.sp,
                                        color: AppColors.onSurfaceVariant,
                                      ),
                                    ),
                                    SizedBox(height: 2.h),
                                    Text(
                                      '5:${30 + index * 12}',
                                      style: GoogleFonts.inter(
                                        fontSize: 11.sp,
                                        color: AppColors.onSurfaceVariant,
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ],
                          ),
                        ),
                      );
                    }),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
