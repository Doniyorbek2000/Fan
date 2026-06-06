import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:cached_network_image/cached_network_image.dart';
import '../../core/theme/app_theme.dart';
import '../../core/widgets/common_widgets.dart';

// ---------------------------------------------------------------------------
// Data models
// ---------------------------------------------------------------------------

class _LiveStream {
  final String name;
  final String avatarUrl;
  final bool isLive;

  const _LiveStream({
    required this.name,
    required this.avatarUrl,
    this.isLive = true,
  });
}

class _MessageItem {
  final String id;
  final String senderName;
  final String avatarUrl;
  final String lastMessage;
  final String timestamp;
  final int unreadCount;
  final bool isOnline;
  final bool isPremium;
  final bool isVerified;

  const _MessageItem({
    required this.id,
    required this.senderName,
    required this.avatarUrl,
    required this.lastMessage,
    required this.timestamp,
    this.unreadCount = 0,
    this.isOnline = false,
    this.isPremium = false,
    this.isVerified = true,
  });
}

// ---------------------------------------------------------------------------
// Mock data
// ---------------------------------------------------------------------------

const _mockLiveStreams = [
  _LiveStream(name: 'Zulfiya', avatarUrl: 'https://i.pravatar.cc/150?img=47', isLive: true),
  _LiveStream(name: 'Sardor', avatarUrl: 'https://i.pravatar.cc/150?img=12', isLive: true),
  _LiveStream(name: 'Malika', avatarUrl: 'https://i.pravatar.cc/150?img=23', isLive: true),
  _LiveStream(name: 'Jasur', avatarUrl: 'https://i.pravatar.cc/150?img=33', isLive: false),
  _LiveStream(name: 'Nodira', avatarUrl: 'https://i.pravatar.cc/150?img=56', isLive: true),
];

const _mockMessages = [
  _MessageItem(
    id: '1',
    senderName: 'Zulfiya Xoliqova',
    avatarUrl: 'https://i.pravatar.cc/150?img=47',
    lastMessage: 'Rahmat, sizning yulduzingizman! \u{1F49C}',
    timestamp: '14:35',
    unreadCount: 3,
    isOnline: true,
  ),
  _MessageItem(
    id: '2',
    senderName: 'Sardor Rahimov',
    avatarUrl: 'https://i.pravatar.cc/150?img=12',
    lastMessage: 'Yangi konsert haqida ma\'lumot bormi?',
    timestamp: '12:10',
    isOnline: true,
    isPremium: true,
  ),
  _MessageItem(
    id: '3',
    senderName: 'Malika Yunusova',
    avatarUrl: 'https://i.pravatar.cc/150?img=23',
    lastMessage: 'Siz bilan suhbat qilish juda yoqimli edi',
    timestamp: 'Kecha',
    unreadCount: 1,
  ),
  _MessageItem(
    id: '4',
    senderName: 'Jasur Mirzayev',
    avatarUrl: 'https://i.pravatar.cc/150?img=33',
    lastMessage: '\u{1F512} Premium xabar — ko\'rish uchun obuna bo\'ling',
    timestamp: 'Kecha',
    isPremium: true,
    isVerified: false,
  ),
  _MessageItem(
    id: '5',
    senderName: 'Nodira Karimova',
    avatarUrl: 'https://i.pravatar.cc/150?img=56',
    lastMessage: 'Tug\'ilgan kuningiz bilan!',
    timestamp: 'Du',
    unreadCount: 5,
    isOnline: true,
  ),
  _MessageItem(
    id: '6',
    senderName: 'Bobur Yusupov',
    avatarUrl: 'https://i.pravatar.cc/150?img=65',
    lastMessage: 'Qachon navbatdagi jonli efir bo\'ladi?',
    timestamp: 'Du',
  ),
];

// ---------------------------------------------------------------------------
// Screen
// ---------------------------------------------------------------------------

class MessagesListScreen extends StatefulWidget {
  const MessagesListScreen({super.key});

  @override
  State<MessagesListScreen> createState() => _MessagesListScreenState();
}

class _MessagesListScreenState extends State<MessagesListScreen> {
  final TextEditingController _searchController = TextEditingController();
  List<_MessageItem> _filteredMessages = _mockMessages;

  @override
  void initState() {
    super.initState();
    _searchController.addListener(_onSearch);
  }

  @override
  void dispose() {
    _searchController.dispose();
    super.dispose();
  }

  void _onSearch() {
    final query = _searchController.text.toLowerCase();
    setState(() {
      _filteredMessages = query.isEmpty
          ? _mockMessages
          : _mockMessages
              .where((m) => m.senderName.toLowerCase().contains(query))
              .toList();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      body: Stack(
        children: [
          _buildAmbientGlows(),
          SafeArea(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                _buildAppBar(),
                _buildLiveStreamsSection(),
                SizedBox(height: 12.h),
                _buildSearchBar(),
                SizedBox(height: 8.h),
                Expanded(child: _buildMessagesList()),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildAppBar() {
    return Padding(
      padding: EdgeInsets.fromLTRB(20.w, 16.h, 20.w, 0),
      child: Row(
        children: [
          ShaderMask(
            shaderCallback: (b) => AppGradients.primary.createShader(b),
            child: Text(
              'Xabarlar',
              style: GoogleFonts.montserrat(
                fontSize: 26.sp,
                fontWeight: FontWeight.w800,
                color: Colors.white,
              ),
            ),
          ),
          const Spacer(),
          GestureDetector(
            onTap: () {},
            child: Container(
              width: 40.w,
              height: 40.w,
              decoration: BoxDecoration(
                color: AppColors.glassBackground,
                borderRadius: BorderRadius.circular(12.r),
                border: Border.all(color: AppColors.glassBorder),
              ),
              child: Icon(Icons.edit_outlined, color: AppColors.primary, size: 20.sp),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildLiveStreamsSection() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: EdgeInsets.fromLTRB(20.w, 20.h, 20.w, 12.h),
          child: Text(
            'Jonli efirlar',
            style: GoogleFonts.inter(
              fontSize: 13.sp,
              fontWeight: FontWeight.w600,
              color: AppColors.onSurfaceVariant,
              letterSpacing: 0.5,
            ),
          ),
        ),
        SizedBox(
          height: 96.h,
          child: ListView.builder(
            scrollDirection: Axis.horizontal,
            padding: EdgeInsets.symmetric(horizontal: 16.w),
            itemCount: _mockLiveStreams.length,
            itemBuilder: (context, index) =>
                _LiveStreamAvatar(stream: _mockLiveStreams[index]),
          ),
        ),
      ],
    );
  }

  Widget _buildSearchBar() {
    return Padding(
      padding: EdgeInsets.symmetric(horizontal: 20.w),
      child: Container(
        height: 46.h,
        decoration: BoxDecoration(
          color: AppColors.glassBackground,
          borderRadius: BorderRadius.circular(14.r),
          border: Border.all(color: AppColors.glassBorder),
        ),
        child: Row(
          children: [
            SizedBox(width: 14.w),
            Icon(Icons.search, color: AppColors.onSurfaceVariant, size: 20.sp),
            SizedBox(width: 10.w),
            Expanded(
              child: TextField(
                controller: _searchController,
                style: GoogleFonts.inter(fontSize: 14.sp, color: AppColors.onSurface),
                decoration: InputDecoration(
                  hintText: 'Xabarlarni qidiring...',
                  hintStyle: GoogleFonts.inter(
                    fontSize: 14.sp,
                    color: AppColors.onSurfaceVariant,
                  ),
                  border: InputBorder.none,
                  isDense: true,
                  contentPadding: EdgeInsets.zero,
                ),
              ),
            ),
            if (_searchController.text.isNotEmpty)
              GestureDetector(
                onTap: () {
                  _searchController.clear();
                  FocusScope.of(context).unfocus();
                },
                child: Padding(
                  padding: EdgeInsets.only(right: 12.w),
                  child: Icon(Icons.close, color: AppColors.onSurfaceVariant, size: 18.sp),
                ),
              ),
          ],
        ),
      ),
    );
  }

  Widget _buildMessagesList() {
    if (_filteredMessages.isEmpty) {
      return Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(Icons.search_off_rounded, color: AppColors.onSurfaceVariant, size: 48.sp),
            SizedBox(height: 12.h),
            Text(
              'Xabar topilmadi',
              style: GoogleFonts.inter(fontSize: 14.sp, color: AppColors.onSurfaceVariant),
            ),
          ],
        ),
      );
    }
    return ListView.separated(
      padding: EdgeInsets.symmetric(horizontal: 20.w, vertical: 8.h),
      itemCount: _filteredMessages.length,
      separatorBuilder: (_, __) => SizedBox(height: 8.h),
      itemBuilder: (context, index) => _MessageTile(message: _filteredMessages[index]),
    );
  }

  Widget _buildAmbientGlows() {
    return Stack(
      children: [
        Positioned(
          top: -60.h,
          right: -60.w,
          child: Container(
            width: 220.w,
            height: 220.w,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              gradient: RadialGradient(
                colors: [AppColors.primary.withOpacity(0.15), Colors.transparent],
              ),
            ),
          ),
        ),
        Positioned(
          bottom: 100.h,
          left: -80.w,
          child: Container(
            width: 200.w,
            height: 200.w,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              gradient: RadialGradient(
                colors: [AppColors.secondary.withOpacity(0.1), Colors.transparent],
              ),
            ),
          ),
        ),
      ],
    );
  }
}

// ---------------------------------------------------------------------------
// Live stream avatar with pulsing ring
// ---------------------------------------------------------------------------

class _LiveStreamAvatar extends StatefulWidget {
  final _LiveStream stream;

  const _LiveStreamAvatar({required this.stream});

  @override
  State<_LiveStreamAvatar> createState() => _LiveStreamAvatarState();
}

class _LiveStreamAvatarState extends State<_LiveStreamAvatar>
    with SingleTickerProviderStateMixin {
  late AnimationController _pulseController;
  late Animation<double> _pulseAnim;

  @override
  void initState() {
    super.initState();
    _pulseController = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 1200),
    );
    _pulseAnim = Tween<double>(begin: 0.7, end: 1.0).animate(
      CurvedAnimation(parent: _pulseController, curve: Curves.easeInOut),
    );
    if (widget.stream.isLive) {
      _pulseController.repeat(reverse: true);
    }
  }

  @override
  void dispose() {
    _pulseController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => Navigator.pushNamed(context, '/live'),
      child: Padding(
        padding: EdgeInsets.symmetric(horizontal: 6.w),
        child: Column(
          children: [
            AnimatedBuilder(
              animation: _pulseAnim,
              builder: (context, child) {
                return Container(
                  width: 66.w,
                  height: 66.w,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    gradient: widget.stream.isLive
                        ? LinearGradient(
                            colors: [
                              AppColors.primary.withOpacity(_pulseAnim.value),
                              AppColors.secondary.withOpacity(_pulseAnim.value),
                            ],
                            begin: Alignment.topLeft,
                            end: Alignment.bottomRight,
                          )
                        : const LinearGradient(
                            colors: [Color(0xFF2D3449), Color(0xFF2D3449)],
                          ),
                    boxShadow: widget.stream.isLive
                        ? [
                            BoxShadow(
                              color: AppColors.primary.withOpacity(0.4 * _pulseAnim.value),
                              blurRadius: 12,
                              spreadRadius: 1,
                            ),
                          ]
                        : null,
                  ),
                  padding: const EdgeInsets.all(2.5),
                  child: child,
                );
              },
              child: ClipOval(
                child: CachedNetworkImage(
                  imageUrl: widget.stream.avatarUrl,
                  width: 62.w,
                  height: 62.w,
                  fit: BoxFit.cover,
                  placeholder: (_, __) =>
                      Container(color: AppColors.surfaceContainerHigh),
                  errorWidget: (_, __, ___) => Container(
                    color: AppColors.surfaceContainerHigh,
                    child: Icon(
                      Icons.person,
                      color: AppColors.onSurfaceVariant,
                      size: 28.sp,
                    ),
                  ),
                ),
              ),
            ),
            SizedBox(height: 6.h),
            if (widget.stream.isLive)
              Container(
                padding: EdgeInsets.symmetric(horizontal: 6.w, vertical: 2.h),
                decoration: BoxDecoration(
                  gradient: AppGradients.primary,
                  borderRadius: BorderRadius.circular(100.r),
                ),
                child: Text(
                  'LIVE',
                  style: GoogleFonts.inter(
                    fontSize: 8.sp,
                    fontWeight: FontWeight.w800,
                    color: AppColors.onPrimary,
                    letterSpacing: 0.5,
                  ),
                ),
              )
            else
              Text(
                widget.stream.name,
                style: GoogleFonts.inter(
                  fontSize: 10.sp,
                  color: AppColors.onSurfaceVariant,
                ),
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
              ),
          ],
        ),
      ),
    );
  }
}

// ---------------------------------------------------------------------------
// Individual message tile
// ---------------------------------------------------------------------------

class _MessageTile extends StatelessWidget {
  final _MessageItem message;

  const _MessageTile({required this.message});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => Navigator.pushNamed(
        context,
        '/chat',
        arguments: {
          'name': message.senderName,
          'avatarUrl': message.avatarUrl,
          'isVerified': message.isVerified,
        },
      ),
      child: Container(
        padding: EdgeInsets.all(14.w),
        decoration: BoxDecoration(
          color: AppColors.glassBackground,
          borderRadius: BorderRadius.circular(16.r),
          border: Border.all(
            color: message.unreadCount > 0
                ? AppColors.primary.withOpacity(0.25)
                : AppColors.glassBorder,
          ),
        ),
        child: Row(
          children: [
            _buildAvatar(),
            SizedBox(width: 12.w),
            Expanded(child: _buildContent()),
            SizedBox(width: 8.w),
            _buildTrailing(),
          ],
        ),
      ),
    );
  }

  Widget _buildAvatar() {
    return Stack(
      children: [
        CircleAvatar(
          radius: 26.r,
          backgroundColor: AppColors.surfaceContainerHigh,
          child: ClipOval(
            child: CachedNetworkImage(
              imageUrl: message.avatarUrl,
              width: 52.w,
              height: 52.w,
              fit: BoxFit.cover,
              placeholder: (_, __) =>
                  Container(color: AppColors.surfaceContainerHigh),
              errorWidget: (_, __, ___) => Icon(
                Icons.person,
                color: AppColors.onSurfaceVariant,
                size: 24.sp,
              ),
            ),
          ),
        ),
        if (message.isOnline)
          Positioned(
            right: 0,
            bottom: 0,
            child: Container(
              width: 13.w,
              height: 13.w,
              decoration: BoxDecoration(
                color: const Color(0xFF4CAF50),
                shape: BoxShape.circle,
                border: Border.all(color: AppColors.background, width: 2),
              ),
            ),
          ),
      ],
    );
  }

  Widget _buildContent() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          children: [
            Flexible(
              child: Text(
                message.senderName,
                style: GoogleFonts.inter(
                  fontSize: 14.sp,
                  fontWeight: FontWeight.w600,
                  color: AppColors.onSurface,
                ),
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
              ),
            ),
            if (message.isVerified) ...[
              SizedBox(width: 4.w),
              Icon(Icons.verified, color: AppColors.primary, size: 14.sp),
            ],
          ],
        ),
        SizedBox(height: 4.h),
        Row(
          children: [
            if (message.isPremium) ...[
              Icon(Icons.lock_outline, color: AppColors.secondary, size: 12.sp),
              SizedBox(width: 4.w),
            ],
            Flexible(
              child: Text(
                message.lastMessage,
                style: GoogleFonts.inter(
                  fontSize: 12.sp,
                  color: message.unreadCount > 0
                      ? AppColors.onSurface
                      : AppColors.onSurfaceVariant,
                  fontWeight: message.unreadCount > 0
                      ? FontWeight.w500
                      : FontWeight.w400,
                ),
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
              ),
            ),
          ],
        ),
      ],
    );
  }

  Widget _buildTrailing() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.end,
      children: [
        Text(
          message.timestamp,
          style: GoogleFonts.inter(
            fontSize: 11.sp,
            color: message.unreadCount > 0
                ? AppColors.primary
                : AppColors.onSurfaceVariant,
          ),
        ),
        SizedBox(height: 6.h),
        if (message.unreadCount > 0)
          Container(
            padding: EdgeInsets.symmetric(horizontal: 7.w, vertical: 2.h),
            decoration: BoxDecoration(
              gradient: AppGradients.primary,
              borderRadius: BorderRadius.circular(100.r),
            ),
            child: Text(
              message.unreadCount > 99 ? '99+' : '${message.unreadCount}',
              style: GoogleFonts.inter(
                fontSize: 10.sp,
                fontWeight: FontWeight.w700,
                color: AppColors.onPrimary,
              ),
            ),
          )
        else
          SizedBox(height: 16.h),
      ],
    );
  }
}
