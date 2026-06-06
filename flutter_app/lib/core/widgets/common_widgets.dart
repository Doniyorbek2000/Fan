import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';
import '../theme/app_theme.dart';

class GlassCard extends StatelessWidget {
  final Widget child;
  final EdgeInsetsGeometry? padding;
  final BorderRadius? borderRadius;
  final List<BoxShadow>? boxShadow;

  const GlassCard({
    super.key,
    required this.child,
    this.padding,
    this.borderRadius,
    this.boxShadow,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: padding ?? EdgeInsets.all(16.w),
      decoration: BoxDecoration(
        color: AppColors.glassBackground,
        borderRadius: borderRadius ?? BorderRadius.circular(16.r),
        border: Border.all(color: AppColors.glassBorder),
        boxShadow: boxShadow,
      ),
      child: child,
    );
  }
}

class GradientButton extends StatelessWidget {
  final String text;
  final VoidCallback? onPressed;
  final double? height;
  final double? width;
  final Widget? leadingIcon;

  const GradientButton({
    super.key,
    required this.text,
    this.onPressed,
    this.height,
    this.width,
    this.leadingIcon,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onPressed,
      child: Container(
        height: height ?? 52.h,
        width: width ?? double.infinity,
        decoration: BoxDecoration(
          gradient: AppGradients.primary,
          borderRadius: BorderRadius.circular(100.r),
          boxShadow: [
            BoxShadow(
              color: AppColors.primaryGlow,
              blurRadius: 20,
              spreadRadius: 0,
            ),
          ],
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            if (leadingIcon != null) ...[
              leadingIcon!,
              SizedBox(width: 8.w),
            ],
            Text(
              text,
              style: GoogleFonts.inter(
                fontSize: 16.sp,
                fontWeight: FontWeight.w600,
                color: AppColors.onPrimary,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class GlassInput extends StatelessWidget {
  final String hint;
  final String? label;
  final bool obscureText;
  final TextEditingController? controller;
  final Widget? prefixIcon;
  final Widget? suffixIcon;
  final TextInputType? keyboardType;
  final int? maxLines;

  const GlassInput({
    super.key,
    required this.hint,
    this.label,
    this.obscureText = false,
    this.controller,
    this.prefixIcon,
    this.suffixIcon,
    this.keyboardType,
    this.maxLines = 1,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: AppColors.surfaceContainer,
        borderRadius: BorderRadius.circular(16.r),
        border: Border.all(color: AppColors.glassBorder),
      ),
      child: TextField(
        controller: controller,
        obscureText: obscureText,
        keyboardType: keyboardType,
        maxLines: maxLines,
        style: GoogleFonts.inter(
          fontSize: 16.sp,
          color: AppColors.onSurface,
        ),
        decoration: InputDecoration(
          hintText: hint,
          hintStyle: GoogleFonts.inter(
            fontSize: 16.sp,
            color: AppColors.onSurfaceVariant,
          ),
          labelText: label,
          prefixIcon: prefixIcon,
          suffixIcon: suffixIcon,
          border: InputBorder.none,
          contentPadding: EdgeInsets.symmetric(
            horizontal: 16.w,
            vertical: 14.h,
          ),
        ),
      ),
    );
  }
}

class AppBottomNav extends StatelessWidget {
  final int currentIndex;
  final Function(int) onTap;
  final bool isCelebrity;

  const AppBottomNav({
    super.key,
    required this.currentIndex,
    required this.onTap,
    this.isCelebrity = false,
  });

  @override
  Widget build(BuildContext context) {
    final items = isCelebrity
        ? _celebrityItems()
        : _fanItems();

    return Container(
      height: 68.h + MediaQuery.of(context).padding.bottom,
      decoration: BoxDecoration(
        color: AppColors.surfaceContainer,
        border: Border(
          top: BorderSide(color: AppColors.glassBorder),
        ),
        boxShadow: [
          BoxShadow(
            color: AppColors.primaryGlow.withOpacity(0.1),
            blurRadius: 20,
            spreadRadius: 0,
            offset: const Offset(0, -4),
          ),
        ],
      ),
      child: SafeArea(
        top: false,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: List.generate(items.length, (i) {
            final item = items[i];
            final isActive = i == currentIndex;
            return GestureDetector(
              onTap: () => onTap(i),
              behavior: HitTestBehavior.opaque,
              child: Padding(
                padding: EdgeInsets.symmetric(horizontal: 12.w, vertical: 8.h),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Icon(
                      isActive ? item['activeIcon'] as IconData : item['icon'] as IconData,
                      color: isActive ? AppColors.primary : AppColors.onSurfaceVariant,
                      size: 24.sp,
                    ),
                    SizedBox(height: 4.h),
                    Text(
                      item['label'] as String,
                      style: GoogleFonts.inter(
                        fontSize: 10.sp,
                        fontWeight: isActive ? FontWeight.w600 : FontWeight.w400,
                        color: isActive ? AppColors.primary : AppColors.onSurfaceVariant,
                      ),
                    ),
                  ],
                ),
              ),
            );
          }),
        ),
      ),
    );
  }

  List<Map<String, dynamic>> _fanItems() => [
    {'icon': Icons.home_outlined, 'activeIcon': Icons.home, 'label': 'Bosh'},
    {'icon': Icons.live_tv_outlined, 'activeIcon': Icons.live_tv, 'label': 'Jonli'},
    {'icon': Icons.chat_bubble_outline, 'activeIcon': Icons.chat_bubble, 'label': 'Chat'},
    {'icon': Icons.person_outline, 'activeIcon': Icons.person, 'label': 'Profil'},
  ];

  List<Map<String, dynamic>> _celebrityItems() => [
    {'icon': Icons.dashboard_outlined, 'activeIcon': Icons.dashboard, 'label': 'Panel'},
    {'icon': Icons.book_outlined, 'activeIcon': Icons.book, 'label': 'Buyurtma'},
    {'icon': Icons.video_library_outlined, 'activeIcon': Icons.video_library, 'label': 'Media'},
    {'icon': Icons.bar_chart_outlined, 'activeIcon': Icons.bar_chart, 'label': 'Tahlil'},
    {'icon': Icons.person_outline, 'activeIcon': Icons.person, 'label': 'Profil'},
  ];
}

class LiveBadge extends StatefulWidget {
  const LiveBadge({super.key});

  @override
  State<LiveBadge> createState() => _LiveBadgeState();
}

class _LiveBadgeState extends State<LiveBadge> with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _animation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 2),
    )..repeat(reverse: true);
    _animation = Tween<double>(begin: 0.7, end: 1.0).animate(
      CurvedAnimation(parent: _controller, curve: Curves.easeInOut),
    );
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: _animation,
      builder: (context, child) {
        return Container(
          padding: EdgeInsets.symmetric(horizontal: 8.w, vertical: 3.h),
          decoration: BoxDecoration(
            color: AppColors.secondaryContainer,
            borderRadius: BorderRadius.circular(100.r),
          ),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Container(
                width: 6.w,
                height: 6.w,
                decoration: BoxDecoration(
                  color: AppColors.secondary.withOpacity(_animation.value),
                  shape: BoxShape.circle,
                ),
              ),
              SizedBox(width: 4.w),
              Text(
                'LIVE',
                style: GoogleFonts.inter(
                  fontSize: 10.sp,
                  fontWeight: FontWeight.w700,
                  color: AppColors.secondary,
                  letterSpacing: 0.5,
                ),
              ),
            ],
          ),
        );
      },
    );
  }
}

class VerifiedBadge extends StatelessWidget {
  final double size;
  const VerifiedBadge({super.key, this.size = 16});

  @override
  Widget build(BuildContext context) {
    return Icon(
      Icons.verified,
      color: AppColors.primary,
      size: size.sp,
    );
  }
}

class NetworkAvatarImage extends StatelessWidget {
  final String? imageUrl;
  final double radius;
  final Widget? placeholder;

  const NetworkAvatarImage({
    super.key,
    this.imageUrl,
    required this.radius,
    this.placeholder,
  });

  @override
  Widget build(BuildContext context) {
    return CircleAvatar(
      radius: radius.r,
      backgroundColor: AppColors.surfaceContainerHigh,
      child: imageUrl != null
          ? ClipOval(
              child: CachedNetworkImage(
                imageUrl: imageUrl!,
                width: radius * 2,
                height: radius * 2,
                fit: BoxFit.cover,
                placeholder: (_, __) => Container(
                  color: AppColors.surfaceContainerHigh,
                ),
                errorWidget: (_, __, ___) => Icon(
                  Icons.person,
                  color: AppColors.onSurfaceVariant,
                  size: radius.sp,
                ),
              ),
            )
          : placeholder ?? Icon(
              Icons.person,
              color: AppColors.onSurfaceVariant,
              size: radius.sp,
            ),
    );
  }
}

class GlowContainer extends StatelessWidget {
  final Widget child;
  final Color glowColor;
  final double blurRadius;

  const GlowContainer({
    super.key,
    required this.child,
    this.glowColor = AppColors.primary,
    this.blurRadius = 20,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        boxShadow: [
          BoxShadow(
            color: glowColor.withOpacity(0.3),
            blurRadius: blurRadius,
            spreadRadius: 0,
          ),
        ],
      ),
      child: child,
    );
  }
}
