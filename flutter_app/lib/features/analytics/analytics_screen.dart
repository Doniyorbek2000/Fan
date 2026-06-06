import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:go_router/go_router.dart';
import 'package:google_fonts/google_fonts.dart';
import '../../core/theme/app_theme.dart';
import '../../core/widgets/common_widgets.dart';

class AnalyticsScreen extends StatefulWidget {
  const AnalyticsScreen({super.key});

  @override
  State<AnalyticsScreen> createState() => _AnalyticsScreenState();
}

class _AnalyticsScreenState extends State<AnalyticsScreen>
    with SingleTickerProviderStateMixin {
  late TabController _tabController;
  int _selectedRange = 1; // 0=hafta, 1=oy, 2=yil

  final _summaryStats = [
    {'label': 'Jami muxlislar', 'value': '12,450', 'icon': Icons.people, 'trend': '+8%'},
    {'label': 'Bu oy daromad', 'value': '3.2M', 'icon': Icons.monetization_on, 'trend': '+15%'},
    {'label': 'Profil ko\'rish', 'value': '84,200', 'icon': Icons.visibility, 'trend': '+22%'},
    {'label': 'Reyting', 'value': '4.9 ⭐', 'icon': Icons.star, 'trend': '+0.1'},
  ];

  final _earningsData = [420, 380, 510, 490, 620, 580, 740, 690, 820, 750, 910, 880];
  final _months = ['Yan', 'Fev', 'Mar', 'Apr', 'May', 'Iyn', 'Iyl', 'Avg', 'Sen', 'Okt', 'Noy', 'Dek'];

  final _topContent = [
    {'title': 'Salom video xabari', 'type': 'Video Xabar', 'views': '1,240', 'revenue': '620,000'},
    {'title': 'Tug\'ilgan kun tabrigi', 'type': 'Maxsus xabar', 'views': '890', 'revenue': '445,000'},
    {'title': 'Jonli efir - Suhbat', 'type': 'Jonli efir', 'views': '3,450', 'revenue': '380,000'},
    {'title': 'Shaxsiy uchrashuv', 'type': 'Uchrashuv', 'views': '12', 'revenue': '300,000'},
  ];

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 3, vsync: this, initialIndex: 1);
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

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
          'Statistika va tahlil',
          style: GoogleFonts.montserrat(
              fontSize: 18.sp, fontWeight: FontWeight.w700),
        ),
        actions: [
          IconButton(
            icon: const Icon(Icons.download_outlined, color: AppColors.onSurfaceVariant),
            onPressed: () {},
          ),
        ],
        bottom: TabBar(
          controller: _tabController,
          labelColor: AppColors.primary,
          unselectedLabelColor: AppColors.onSurfaceVariant,
          indicatorColor: AppColors.primary,
          tabs: const [
            Tab(text: 'Hafta'),
            Tab(text: 'Oy'),
            Tab(text: 'Yil'),
          ],
        ),
      ),
      body: SingleChildScrollView(
        padding: EdgeInsets.all(20.w),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            _buildSummaryGrid(),
            SizedBox(height: 24.h),
            _buildEarningsChart(),
            SizedBox(height: 24.h),
            _buildAudienceSection(),
            SizedBox(height: 24.h),
            _buildTopContent(),
            SizedBox(height: 80.h),
          ],
        ),
      ),
    );
  }

  Widget _buildSummaryGrid() {
    return GridView.builder(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2,
        crossAxisSpacing: 12.w,
        mainAxisSpacing: 12.h,
        childAspectRatio: 1.6,
      ),
      itemCount: _summaryStats.length,
      itemBuilder: (_, i) {
        final stat = _summaryStats[i];
        return GlassCard(
          padding: EdgeInsets.all(14.w),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Icon(stat['icon'] as IconData,
                      color: AppColors.primary, size: 20.sp),
                  Container(
                    padding: EdgeInsets.symmetric(horizontal: 6.w, vertical: 2.h),
                    decoration: BoxDecoration(
                      color: Colors.green.withOpacity(0.2),
                      borderRadius: BorderRadius.circular(100.r),
                    ),
                    child: Text(
                      stat['trend'] as String,
                      style: GoogleFonts.inter(
                          fontSize: 10.sp,
                          color: Colors.greenAccent,
                          fontWeight: FontWeight.w600),
                    ),
                  ),
                ],
              ),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    stat['value'] as String,
                    style: GoogleFonts.montserrat(
                        fontSize: 20.sp,
                        fontWeight: FontWeight.w800,
                        color: AppColors.onSurface),
                  ),
                  Text(
                    stat['label'] as String,
                    style: GoogleFonts.inter(
                        fontSize: 11.sp, color: AppColors.onSurfaceVariant),
                  ),
                ],
              ),
            ],
          ),
        );
      },
    );
  }

  Widget _buildEarningsChart() {
    final max = _earningsData.reduce((a, b) => a > b ? a : b).toDouble();
    return GlassCard(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('Daromad (ming so\'m)',
              style: GoogleFonts.montserrat(
                  fontSize: 16.sp, fontWeight: FontWeight.w700)),
          SizedBox(height: 20.h),
          SizedBox(
            height: 120.h,
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.end,
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: List.generate(_earningsData.length, (i) {
                final height = (_earningsData[i] / max) * 100.h;
                final isLast = i == _earningsData.length - 1;
                return Column(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    AnimatedContainer(
                      duration: Duration(milliseconds: 300 + i * 50),
                      width: 18.w,
                      height: height,
                      decoration: BoxDecoration(
                        gradient: isLast
                            ? AppGradients.primary
                            : LinearGradient(
                                begin: Alignment.topCenter,
                                end: Alignment.bottomCenter,
                                colors: [
                                  AppColors.primaryContainer.withOpacity(0.6),
                                  AppColors.primaryContainer.withOpacity(0.3),
                                ],
                              ),
                        borderRadius: BorderRadius.vertical(
                            top: Radius.circular(4.r)),
                      ),
                    ),
                    SizedBox(height: 4.h),
                    Text(_months[i],
                        style: GoogleFonts.inter(
                            fontSize: 9.sp,
                            color: AppColors.onSurfaceVariant)),
                  ],
                );
              }),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildAudienceSection() {
    final segments = [
      {'label': '18-24 yosh', 'percent': 0.35, 'color': AppColors.primary},
      {'label': '25-34 yosh', 'percent': 0.42, 'color': AppColors.secondary},
      {'label': '35-44 yosh', 'percent': 0.15, 'color': AppColors.tertiary},
      {'label': '45+ yosh', 'percent': 0.08, 'color': AppColors.outlineVariant},
    ];
    return GlassCard(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('Auditoriya demografiyasi',
              style: GoogleFonts.montserrat(
                  fontSize: 16.sp, fontWeight: FontWeight.w700)),
          SizedBox(height: 16.h),
          ClipRRect(
            borderRadius: BorderRadius.circular(8.r),
            child: SizedBox(
              height: 20.h,
              child: Row(
                children: segments.map((s) {
                  return Expanded(
                    flex: ((s['percent'] as double) * 100).round(),
                    child: Container(color: s['color'] as Color),
                  );
                }).toList(),
              ),
            ),
          ),
          SizedBox(height: 16.h),
          Wrap(
            spacing: 16.w,
            runSpacing: 8.h,
            children: segments.map((s) {
              return Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Container(
                    width: 12.w,
                    height: 12.w,
                    decoration: BoxDecoration(
                      color: s['color'] as Color,
                      shape: BoxShape.circle,
                    ),
                  ),
                  SizedBox(width: 6.w),
                  Text(
                    '${s['label']} (${((s['percent'] as double) * 100).round()}%)',
                    style: GoogleFonts.inter(
                        fontSize: 12.sp, color: AppColors.onSurfaceVariant),
                  ),
                ],
              );
            }).toList(),
          ),
        ],
      ),
    );
  }

  Widget _buildTopContent() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text('Top kontent',
            style: GoogleFonts.montserrat(
                fontSize: 18.sp, fontWeight: FontWeight.w700)),
        SizedBox(height: 12.h),
        ..._topContent.asMap().entries.map((e) {
          final i = e.key;
          final c = e.value;
          return GlassCard(
            padding: EdgeInsets.all(14.w),
            borderRadius: BorderRadius.circular(12.r),
            child: Padding(
              padding: EdgeInsets.only(bottom: i < _topContent.length - 1 ? 10.h : 0),
              child: Row(
                children: [
                  Container(
                    width: 36.w,
                    height: 36.w,
                    decoration: BoxDecoration(
                      gradient: AppGradients.primary,
                      borderRadius: BorderRadius.circular(8.r),
                    ),
                    child: Center(
                      child: Text('${i + 1}',
                          style: GoogleFonts.montserrat(
                              fontWeight: FontWeight.w800,
                              color: AppColors.onPrimary)),
                    ),
                  ),
                  SizedBox(width: 12.w),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(c['title'] as String,
                            style: GoogleFonts.inter(
                                fontSize: 14.sp, fontWeight: FontWeight.w600)),
                        Text(c['type'] as String,
                            style: GoogleFonts.inter(
                                fontSize: 12.sp,
                                color: AppColors.onSurfaceVariant)),
                      ],
                    ),
                  ),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.end,
                    children: [
                      Text('${c['revenue']} so\'m',
                          style: GoogleFonts.inter(
                              fontSize: 13.sp,
                              fontWeight: FontWeight.w600,
                              color: AppColors.primary)),
                      Row(
                        children: [
                          Icon(Icons.visibility_outlined,
                              size: 12.sp,
                              color: AppColors.onSurfaceVariant),
                          SizedBox(width: 3.w),
                          Text(c['views'] as String,
                              style: GoogleFonts.inter(
                                  fontSize: 11.sp,
                                  color: AppColors.onSurfaceVariant)),
                        ],
                      ),
                    ],
                  ),
                ],
              ),
            ),
          );
        }),
      ],
    );
  }
}
