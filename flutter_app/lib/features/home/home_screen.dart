import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:cached_network_image/cached_network_image.dart';
import '../../core/theme/app_theme.dart';
import '../../core/widgets/common_widgets.dart';

// ---------------------------------------------------------------------------
// Mock data models
// ---------------------------------------------------------------------------

class _LiveCelebrity {
  final String name;
  final String imageUrl;
  final int viewers;
  final String category;

  const _LiveCelebrity({
    required this.name,
    required this.imageUrl,
    required this.viewers,
    required this.category,
  });
}

class _Celebrity {
  final String name;
  final String imageUrl;
  final String category;
  final double rating;
  final int reviewCount;
  final String bio;
  final int meetingPrice;
  final bool isOnline;

  const _Celebrity({
    required this.name,
    required this.imageUrl,
    required this.category,
    required this.rating,
    required this.reviewCount,
    required this.bio,
    required this.meetingPrice,
    required this.isOnline,
  });
}

// ---------------------------------------------------------------------------
// HomeScreen
// ---------------------------------------------------------------------------

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  int _selectedNavIndex = 0;
  int _selectedCategory = 0;
  final TextEditingController _searchController = TextEditingController();

  final List<String> _categories = [
    'Hammasi',
    'Musiqachilar',
    'Aktyorlar',
    'Sportchilar',
    'Bloggerlar',
  ];

  final List<_LiveCelebrity> _liveCelebrities = const [
    _LiveCelebrity(
      name: 'Shaxriyor',
      imageUrl: 'https://i.pravatar.cc/150?img=11',
      viewers: 4821,
      category: 'Musiqachi',
    ),
    _LiveCelebrity(
      name: 'Dilnoza Y.',
      imageUrl: 'https://i.pravatar.cc/150?img=47',
      viewers: 2310,
      category: 'Aktyor',
    ),
    _LiveCelebrity(
      name: 'Jasur U.',
      imageUrl: 'https://i.pravatar.cc/150?img=15',
      viewers: 1944,
      category: 'Blogger',
    ),
    _LiveCelebrity(
      name: 'Maftuna I.',
      imageUrl: 'https://i.pravatar.cc/150?img=44',
      viewers: 3102,
      category: 'Musiqachi',
    ),
    _LiveCelebrity(
      name: 'Sardor R.',
      imageUrl: 'https://i.pravatar.cc/150?img=12',
      viewers: 987,
      category: 'Musiqachi',
    ),
  ];

  final List<_Celebrity> _celebrities = const [
    _Celebrity(
      name: 'Shaxriyor Umarov',
      imageUrl: 'https://i.pravatar.cc/300?img=11',
      category: 'Musiqachi',
      rating: 4.9,
      reviewCount: 1243,
      bio: "O'zbekistonning eng mashhur pop-rock xonandasi. Grammy nominanti.",
      meetingPrice: 299000,
      isOnline: true,
    ),
    _Celebrity(
      name: 'Dilnoza Yusupova',
      imageUrl: 'https://i.pravatar.cc/300?img=47',
      category: 'Aktyor',
      rating: 4.8,
      reviewCount: 876,
      bio: "Milliy kinoning yulduz aktyori. 12 ta filmda bosh rol.",
      meetingPrice: 199000,
      isOnline: false,
    ),
    _Celebrity(
      name: 'Eldor Qodirov',
      imageUrl: 'https://i.pravatar.cc/300?img=13',
      category: 'Sportchi',
      rating: 4.7,
      reviewCount: 2105,
      bio: "Olimpiya o'yinlari bronza medali sohibi. Boks ustasi.",
      meetingPrice: 349000,
      isOnline: true,
    ),
    _Celebrity(
      name: 'Nilufar Usmonova',
      imageUrl: 'https://i.pravatar.cc/300?img=49',
      category: 'Blogger',
      rating: 4.6,
      reviewCount: 3410,
      bio: "4.2M obunachilik bilan O'zbekistonning top-bloggeri.",
      meetingPrice: 149000,
      isOnline: true,
    ),
    _Celebrity(
      name: 'Maftuna Ismoilova',
      imageUrl: 'https://i.pravatar.cc/300?img=44',
      category: 'Musiqachi',
      rating: 4.9,
      reviewCount: 984,
      bio: "Jazz va klassik musiqani uyg'unlashtirgan noyob ovoz egasi.",
      meetingPrice: 249000,
      isOnline: false,
    ),
    _Celebrity(
      name: 'Bahodir Jalolov',
      imageUrl: 'https://i.pravatar.cc/300?img=16',
      category: 'Sportchi',
      rating: 5.0,
      reviewCount: 5620,
      bio: "Jahon chempioni bokschi. Olimpiya oltin medali sohibi.",
      meetingPrice: 499000,
      isOnline: false,
    ),
  ];

  List<_Celebrity> get _filteredCelebrities {
    if (_selectedCategory == 0) return _celebrities;
    const categoryMap = {
      1: 'Musiqachi',
      2: 'Aktyor',
      3: 'Sportchi',
      4: 'Blogger',
    };
    final filter = categoryMap[_selectedCategory];
    return _celebrities.where((c) => c.category == filter).toList();
  }

  String _formatViewers(int count) {
    if (count >= 1000) {
      return '${(count / 1000).toStringAsFixed(1)}K';
    }
    return count.toString();
  }

  String _formatPrice(int price) {
    final str = price.toString();
    final buffer = StringBuffer();
    for (int i = 0; i < str.length; i++) {
      if (i > 0 && (str.length - i) % 3 == 0) buffer.write(' ');
      buffer.write(str[i]);
    }
    return "${buffer.toString()} so'm";
  }

  @override
  void dispose() {
    _searchController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      body: SafeArea(
        bottom: false,
        child: Column(
          children: [
            _buildAppBar(),
            Expanded(
              child: CustomScrollView(
                physics: const BouncingScrollPhysics(),
                slivers: [
                  SliverToBoxAdapter(child: SizedBox(height: 16.h)),
                  SliverToBoxAdapter(child: _buildGreetingAndSearch()),
                  SliverToBoxAdapter(child: SizedBox(height: 20.h)),
                  SliverToBoxAdapter(child: _buildCategoryChips()),
                  SliverToBoxAdapter(child: SizedBox(height: 24.h)),
                  SliverToBoxAdapter(
                    child: _buildSectionHeader(
                        'Jonli efirlar', Icons.live_tv_rounded),
                  ),
                  SliverToBoxAdapter(child: SizedBox(height: 12.h)),
                  SliverToBoxAdapter(child: _buildLiveSection()),
                  SliverToBoxAdapter(child: SizedBox(height: 28.h)),
                  SliverToBoxAdapter(
                    child: _buildSectionHeader(
                        'Mashhurlar', Icons.star_rounded),
                  ),
                  SliverToBoxAdapter(child: SizedBox(height: 12.h)),
                  SliverPadding(
                    padding: EdgeInsets.fromLTRB(16.w, 0, 16.w, 100.h),
                    sliver: SliverList(
                      delegate: SliverChildBuilderDelegate(
                        (context, index) {
                          final list = _filteredCelebrities;
                          if (index >= list.length) return null;
                          return Padding(
                            padding: EdgeInsets.only(bottom: 12.h),
                            child: _CelebrityCard(
                              celebrity: list[index],
                              formatPrice: _formatPrice,
                            ),
                          );
                        },
                        childCount: _filteredCelebrities.length,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
      bottomNavigationBar: AppBottomNav(
        currentIndex: _selectedNavIndex,
        onTap: (i) => setState(() => _selectedNavIndex = i),
      ),
    );
  }

  Widget _buildAppBar() {
    return Container(
      height: 56.h,
      padding: EdgeInsets.symmetric(horizontal: 20.w),
      decoration: BoxDecoration(
        color: AppColors.background.withOpacity(0.95),
        border: Border(bottom: BorderSide(color: AppColors.glassBorder)),
      ),
      child: Row(
        children: [
          ShaderMask(
            shaderCallback: (bounds) =>
                AppGradients.primary.createShader(bounds),
            child: Text(
              'FanMeet',
              style: GoogleFonts.montserrat(
                fontSize: 22.sp,
                fontWeight: FontWeight.w800,
                color: Colors.white,
              ),
            ),
          ),
          const Spacer(),
          _AppBarIconButton(icon: Icons.search_rounded, onTap: () {}),
          SizedBox(width: 4.w),
          _AppBarIconButton(
            icon: Icons.notifications_outlined,
            onTap: () {},
            badge: 3,
          ),
        ],
      ),
    );
  }

  Widget _buildGreetingAndSearch() {
    return Padding(
      padding: EdgeInsets.symmetric(horizontal: 20.w),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Salom, Alibek! 👋',
            style: GoogleFonts.montserrat(
              fontSize: 24.sp,
              fontWeight: FontWeight.w700,
              color: AppColors.onSurface,
            ),
          ),
          SizedBox(height: 4.h),
          Text(
            'Bugun kimni uchrashtirasiz?',
            style: GoogleFonts.inter(
              fontSize: 14.sp,
              color: AppColors.onSurfaceVariant,
            ),
          ),
          SizedBox(height: 16.h),
          GlassInput(
            hint: 'Mashhurlarni qidiring...',
            controller: _searchController,
            prefixIcon: Icon(
              Icons.search_rounded,
              color: AppColors.onSurfaceVariant,
              size: 20.sp,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildCategoryChips() {
    return SizedBox(
      height: 36.h,
      child: ListView.separated(
        scrollDirection: Axis.horizontal,
        padding: EdgeInsets.symmetric(horizontal: 20.w),
        physics: const BouncingScrollPhysics(),
        itemCount: _categories.length,
        separatorBuilder: (_, __) => SizedBox(width: 8.w),
        itemBuilder: (context, index) {
          final isSelected = _selectedCategory == index;
          return GestureDetector(
            onTap: () => setState(() => _selectedCategory = index),
            child: AnimatedContainer(
              duration: const Duration(milliseconds: 200),
              padding: EdgeInsets.symmetric(horizontal: 16.w, vertical: 8.h),
              decoration: BoxDecoration(
                gradient: isSelected ? AppGradients.primary : null,
                color: isSelected ? null : AppColors.surfaceContainerHigh,
                borderRadius: BorderRadius.circular(100.r),
                border: Border.all(
                  color: isSelected
                      ? Colors.transparent
                      : AppColors.glassBorder,
                ),
              ),
              child: Text(
                _categories[index],
                style: GoogleFonts.inter(
                  fontSize: 13.sp,
                  fontWeight:
                      isSelected ? FontWeight.w600 : FontWeight.w400,
                  color:
                      isSelected ? AppColors.onPrimary : AppColors.onSurface,
                ),
              ),
            ),
          );
        },
      ),
    );
  }

  Widget _buildSectionHeader(String title, IconData icon) {
    return Padding(
      padding: EdgeInsets.symmetric(horizontal: 20.w),
      child: Row(
        children: [
          Container(
            width: 32.w,
            height: 32.w,
            decoration: BoxDecoration(
              color: AppColors.primaryContainer.withOpacity(0.2),
              borderRadius: BorderRadius.circular(8.r),
            ),
            child: Icon(icon, color: AppColors.primary, size: 18.sp),
          ),
          SizedBox(width: 10.w),
          Text(
            title,
            style: GoogleFonts.montserrat(
              fontSize: 18.sp,
              fontWeight: FontWeight.w700,
              color: AppColors.onSurface,
            ),
          ),
          const Spacer(),
          GestureDetector(
            onTap: () {},
            child: Text(
              'Barchasi',
              style: GoogleFonts.inter(
                fontSize: 13.sp,
                fontWeight: FontWeight.w500,
                color: AppColors.primary,
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildLiveSection() {
    return SizedBox(
      height: 140.h,
      child: ListView.separated(
        scrollDirection: Axis.horizontal,
        padding: EdgeInsets.symmetric(horizontal: 20.w),
        physics: const BouncingScrollPhysics(),
        itemCount: _liveCelebrities.length,
        separatorBuilder: (_, __) => SizedBox(width: 12.w),
        itemBuilder: (context, index) {
          return _LiveCard(
            celebrity: _liveCelebrities[index],
            formatViewers: _formatViewers,
          );
        },
      ),
    );
  }
}

// ---------------------------------------------------------------------------
// Live Card
// ---------------------------------------------------------------------------

class _LiveCard extends StatelessWidget {
  final _LiveCelebrity celebrity;
  final String Function(int) formatViewers;

  const _LiveCard({
    required this.celebrity,
    required this.formatViewers,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {},
      child: SizedBox(
        width: 100.w,
        child: Column(
          children: [
            Stack(
              alignment: Alignment.center,
              children: [
                // Gradient ring
                Container(
                  width: 80.w,
                  height: 80.w,
                  decoration: const BoxDecoration(
                    shape: BoxShape.circle,
                    gradient: AppGradients.primary,
                  ),
                ),
                // Background gap
                Container(
                  width: 74.w,
                  height: 74.w,
                  decoration: const BoxDecoration(
                    shape: BoxShape.circle,
                    color: AppColors.background,
                  ),
                ),
                // Photo
                CircleAvatar(
                  radius: 34.r,
                  backgroundColor: AppColors.surfaceContainerHigh,
                  child: ClipOval(
                    child: CachedNetworkImage(
                      imageUrl: celebrity.imageUrl,
                      width: 68.w,
                      height: 68.w,
                      fit: BoxFit.cover,
                      placeholder: (_, __) =>
                          Container(color: AppColors.surfaceContainerHigh),
                      errorWidget: (_, __, ___) => Icon(
                        Icons.person,
                        color: AppColors.onSurfaceVariant,
                        size: 28.sp,
                      ),
                    ),
                  ),
                ),
                // LIVE badge
                Positioned(
                  bottom: 0,
                  child: const LiveBadge(),
                ),
              ],
            ),
            SizedBox(height: 6.h),
            Text(
              celebrity.name,
              textAlign: TextAlign.center,
              maxLines: 1,
              overflow: TextOverflow.ellipsis,
              style: GoogleFonts.inter(
                fontSize: 12.sp,
                fontWeight: FontWeight.w600,
                color: AppColors.onSurface,
              ),
            ),
            SizedBox(height: 2.h),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(
                  Icons.remove_red_eye_outlined,
                  size: 11.sp,
                  color: AppColors.onSurfaceVariant,
                ),
                SizedBox(width: 3.w),
                Text(
                  formatViewers(celebrity.viewers),
                  style: GoogleFonts.inter(
                    fontSize: 11.sp,
                    color: AppColors.onSurfaceVariant,
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

// ---------------------------------------------------------------------------
// Celebrity Card
// ---------------------------------------------------------------------------

class _CelebrityCard extends StatelessWidget {
  final _Celebrity celebrity;
  final String Function(int) formatPrice;

  const _CelebrityCard({
    required this.celebrity,
    required this.formatPrice,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {},
      child: Container(
        decoration: BoxDecoration(
          color: AppColors.surfaceContainer,
          borderRadius: BorderRadius.circular(20.r),
          border: Border.all(color: AppColors.glassBorder),
        ),
        child: Padding(
          padding: EdgeInsets.all(14.w),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Photo
              Stack(
                children: [
                  ClipRRect(
                    borderRadius: BorderRadius.circular(14.r),
                    child: CachedNetworkImage(
                      imageUrl: celebrity.imageUrl,
                      width: 80.w,
                      height: 90.h,
                      fit: BoxFit.cover,
                      placeholder: (_, __) => Container(
                        width: 80.w,
                        height: 90.h,
                        color: AppColors.surfaceContainerHigh,
                      ),
                      errorWidget: (_, __, ___) => Container(
                        width: 80.w,
                        height: 90.h,
                        color: AppColors.surfaceContainerHigh,
                        child: Icon(
                          Icons.person,
                          color: AppColors.onSurfaceVariant,
                          size: 36.sp,
                        ),
                      ),
                    ),
                  ),
                  if (celebrity.isOnline)
                    Positioned(
                      top: 6.h,
                      right: 6.w,
                      child: Container(
                        width: 10.w,
                        height: 10.w,
                        decoration: BoxDecoration(
                          color: const Color(0xFF4CAF50),
                          shape: BoxShape.circle,
                          border: Border.all(
                            color: AppColors.surfaceContainer,
                            width: 2,
                          ),
                        ),
                      ),
                    ),
                ],
              ),
              SizedBox(width: 14.w),
              // Info
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        Flexible(
                          child: Text(
                            celebrity.name,
                            style: GoogleFonts.montserrat(
                              fontSize: 15.sp,
                              fontWeight: FontWeight.w700,
                              color: AppColors.onSurface,
                            ),
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis,
                          ),
                        ),
                        SizedBox(width: 4.w),
                        const VerifiedBadge(size: 15),
                      ],
                    ),
                    SizedBox(height: 6.h),
                    Row(
                      children: [
                        Container(
                          padding: EdgeInsets.symmetric(
                              horizontal: 8.w, vertical: 3.h),
                          decoration: BoxDecoration(
                            color:
                                AppColors.primaryContainer.withOpacity(0.2),
                            borderRadius: BorderRadius.circular(100.r),
                          ),
                          child: Text(
                            celebrity.category,
                            style: GoogleFonts.inter(
                              fontSize: 11.sp,
                              fontWeight: FontWeight.w500,
                              color: AppColors.primary,
                            ),
                          ),
                        ),
                        SizedBox(width: 8.w),
                        Icon(
                          Icons.star_rounded,
                          color: const Color(0xFFFFC107),
                          size: 14.sp,
                        ),
                        SizedBox(width: 2.w),
                        Text(
                          celebrity.rating.toString(),
                          style: GoogleFonts.inter(
                            fontSize: 12.sp,
                            fontWeight: FontWeight.w600,
                            color: AppColors.onSurface,
                          ),
                        ),
                        SizedBox(width: 2.w),
                        Text(
                          '(${celebrity.reviewCount})',
                          style: GoogleFonts.inter(
                            fontSize: 11.sp,
                            color: AppColors.onSurfaceVariant,
                          ),
                        ),
                      ],
                    ),
                    SizedBox(height: 6.h),
                    Text(
                      celebrity.bio,
                      style: GoogleFonts.inter(
                        fontSize: 12.sp,
                        color: AppColors.onSurfaceVariant,
                        height: 1.4,
                      ),
                      maxLines: 2,
                      overflow: TextOverflow.ellipsis,
                    ),
                    SizedBox(height: 8.h),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Container(
                          padding: EdgeInsets.symmetric(
                              horizontal: 10.w, vertical: 4.h),
                          decoration: BoxDecoration(
                            gradient: AppGradients.primary,
                            borderRadius: BorderRadius.circular(100.r),
                          ),
                          child: Row(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              Icon(
                                Icons.video_camera_front_outlined,
                                size: 12.sp,
                                color: AppColors.onPrimary,
                              ),
                              SizedBox(width: 4.w),
                              Text(
                                formatPrice(celebrity.meetingPrice),
                                style: GoogleFonts.inter(
                                  fontSize: 11.sp,
                                  fontWeight: FontWeight.w600,
                                  color: AppColors.onPrimary,
                                ),
                              ),
                            ],
                          ),
                        ),
                        Text(
                          'Uchrashuv',
                          style: GoogleFonts.inter(
                            fontSize: 11.sp,
                            color: AppColors.onSurfaceVariant,
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

// ---------------------------------------------------------------------------
// AppBar icon button helper
// ---------------------------------------------------------------------------

class _AppBarIconButton extends StatelessWidget {
  final IconData icon;
  final VoidCallback onTap;
  final int? badge;

  const _AppBarIconButton({
    required this.icon,
    required this.onTap,
    this.badge,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        width: 40.w,
        height: 40.w,
        decoration: BoxDecoration(
          color: AppColors.surfaceContainer,
          borderRadius: BorderRadius.circular(12.r),
          border: Border.all(color: AppColors.glassBorder),
        ),
        child: Stack(
          alignment: Alignment.center,
          children: [
            Icon(icon, color: AppColors.onSurface, size: 20.sp),
            if (badge != null && badge! > 0)
              Positioned(
                top: 6.h,
                right: 6.w,
                child: Container(
                  width: 16.w,
                  height: 16.w,
                  decoration: BoxDecoration(
                    color: AppColors.secondary,
                    shape: BoxShape.circle,
                  ),
                  child: Center(
                    child: Text(
                      badge.toString(),
                      style: GoogleFonts.inter(
                        fontSize: 9.sp,
                        fontWeight: FontWeight.w700,
                        color: AppColors.onSecondary,
                      ),
                    ),
                  ),
                ),
              ),
          ],
        ),
      ),
    );
  }
}
