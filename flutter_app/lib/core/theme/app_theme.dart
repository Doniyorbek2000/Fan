import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class AppColors {
  // Primary (Electric Purple)
  static const Color primary = Color(0xFFD0BCFF);
  static const Color onPrimary = Color(0xFF3C0091);
  static const Color primaryContainer = Color(0xFFA078FF);
  static const Color onPrimaryContainer = Color(0xFF340080);

  // Secondary (Neon Pink)
  static const Color secondary = Color(0xFFFFB0CD);
  static const Color onSecondary = Color(0xFF640039);
  static const Color secondaryContainer = Color(0xFFAA0266);
  static const Color onSecondaryContainer = Color(0xFFFFBAD3);

  // Tertiary (Vivid Cyan)
  static const Color tertiary = Color(0xFF4CD7F6);
  static const Color onTertiary = Color(0xFF003640);
  static const Color tertiaryContainer = Color(0xFF009EB9);

  // Surface / Background (Deep Navy)
  static const Color background = Color(0xFF0B1326);
  static const Color surface = Color(0xFF0B1326);
  static const Color surfaceContainerLowest = Color(0xFF060E20);
  static const Color surfaceContainerLow = Color(0xFF131B2E);
  static const Color surfaceContainer = Color(0xFF171F33);
  static const Color surfaceContainerHigh = Color(0xFF222A3D);
  static const Color surfaceContainerHighest = Color(0xFF2D3449);
  static const Color surfaceVariant = Color(0xFF2D3449);

  // On Surface
  static const Color onSurface = Color(0xFFDAE2FD);
  static const Color onSurfaceVariant = Color(0xFFCBC3D7);

  // Outline
  static const Color outline = Color(0xFF958EA0);
  static const Color outlineVariant = Color(0xFF494454);

  // Error
  static const Color error = Color(0xFFFFB4AB);
  static const Color errorContainer = Color(0xFF93000A);

  // Gradient colors
  static const Color gradientStart = Color(0xFFA078FF);
  static const Color gradientEnd = Color(0xFFFFB0CD);

  // Glass effect
  static Color get glassBackground => Colors.white.withOpacity(0.05);
  static Color get glassBorder => Colors.white.withOpacity(0.1);

  // Glow colors
  static Color get primaryGlow => primary.withOpacity(0.3);
  static Color get secondaryGlow => secondary.withOpacity(0.3);
}

class AppTheme {
  static ThemeData get darkTheme {
    return ThemeData(
      useMaterial3: true,
      brightness: Brightness.dark,
      colorScheme: const ColorScheme.dark(
        primary: AppColors.primary,
        onPrimary: AppColors.onPrimary,
        primaryContainer: AppColors.primaryContainer,
        onPrimaryContainer: AppColors.onPrimaryContainer,
        secondary: AppColors.secondary,
        onSecondary: AppColors.onSecondary,
        secondaryContainer: AppColors.secondaryContainer,
        onSecondaryContainer: AppColors.onSecondaryContainer,
        tertiary: AppColors.tertiary,
        onTertiary: AppColors.onTertiary,
        tertiaryContainer: AppColors.tertiaryContainer,
        surface: AppColors.surface,
        onSurface: AppColors.onSurface,
        surfaceContainerHighest: AppColors.surfaceContainerHighest,
        error: AppColors.error,
        errorContainer: AppColors.errorContainer,
        outline: AppColors.outline,
        outlineVariant: AppColors.outlineVariant,
      ),
      scaffoldBackgroundColor: AppColors.background,
      textTheme: _buildTextTheme(),
      appBarTheme: _buildAppBarTheme(),
      elevatedButtonTheme: _buildElevatedButtonTheme(),
      inputDecorationTheme: _buildInputDecorationTheme(),
      bottomNavigationBarTheme: _buildBottomNavTheme(),
      cardTheme: _buildCardTheme(),
      chipTheme: _buildChipTheme(),
      pageTransitionsTheme: const PageTransitionsTheme(
        builders: {
          TargetPlatform.android: CupertinoPageTransitionsBuilder(),
          TargetPlatform.iOS: CupertinoPageTransitionsBuilder(),
        },
      ),
    );
  }

  static TextTheme _buildTextTheme() {
    return TextTheme(
      displayLarge: GoogleFonts.montserrat(
        fontSize: 40, fontWeight: FontWeight.w800,
        height: 1.2, letterSpacing: -0.02 * 40,
        color: AppColors.onSurface,
      ),
      displayMedium: GoogleFonts.montserrat(
        fontSize: 32, fontWeight: FontWeight.w700,
        height: 1.25, letterSpacing: -0.01 * 32,
        color: AppColors.onSurface,
      ),
      displaySmall: GoogleFonts.montserrat(
        fontSize: 28, fontWeight: FontWeight.w700,
        height: 1.28, color: AppColors.onSurface,
      ),
      headlineMedium: GoogleFonts.montserrat(
        fontSize: 24, fontWeight: FontWeight.w700,
        height: 1.33, color: AppColors.onSurface,
      ),
      bodyLarge: GoogleFonts.inter(
        fontSize: 18, fontWeight: FontWeight.w400,
        height: 1.55, color: AppColors.onSurface,
      ),
      bodyMedium: GoogleFonts.inter(
        fontSize: 16, fontWeight: FontWeight.w400,
        height: 1.5, color: AppColors.onSurface,
      ),
      bodySmall: GoogleFonts.inter(
        fontSize: 14, fontWeight: FontWeight.w400,
        height: 1.43, color: AppColors.onSurfaceVariant,
      ),
      labelLarge: GoogleFonts.inter(
        fontSize: 14, fontWeight: FontWeight.w600,
        height: 1.43, letterSpacing: 0.05 * 14,
        color: AppColors.onSurface,
      ),
      labelMedium: GoogleFonts.inter(
        fontSize: 12, fontWeight: FontWeight.w500,
        height: 1.33, color: AppColors.onSurfaceVariant,
      ),
    );
  }

  static AppBarTheme _buildAppBarTheme() {
    return AppBarTheme(
      backgroundColor: AppColors.background.withOpacity(0.8),
      elevation: 0,
      scrolledUnderElevation: 0,
      centerTitle: false,
      titleTextStyle: GoogleFonts.montserrat(
        fontSize: 20, fontWeight: FontWeight.w700,
        color: AppColors.onSurface,
      ),
      iconTheme: const IconThemeData(color: AppColors.primary),
    );
  }

  static ElevatedButtonThemeData _buildElevatedButtonTheme() {
    return ElevatedButtonThemeData(
      style: ElevatedButton.styleFrom(
        backgroundColor: AppColors.primaryContainer,
        foregroundColor: AppColors.onPrimary,
        minimumSize: const Size(double.infinity, 52),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(100)),
        textStyle: GoogleFonts.inter(fontSize: 16, fontWeight: FontWeight.w600),
      ),
    );
  }

  static InputDecorationTheme _buildInputDecorationTheme() {
    return InputDecorationTheme(
      filled: true,
      fillColor: AppColors.surfaceContainer,
      contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
      border: OutlineInputBorder(
        borderRadius: BorderRadius.circular(16),
        borderSide: BorderSide(color: AppColors.glassBorder),
      ),
      enabledBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(16),
        borderSide: BorderSide(color: AppColors.glassBorder),
      ),
      focusedBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(16),
        borderSide: const BorderSide(color: AppColors.primary, width: 1.5),
      ),
      hintStyle: GoogleFonts.inter(color: AppColors.onSurfaceVariant, fontSize: 16),
      labelStyle: GoogleFonts.inter(color: AppColors.onSurfaceVariant, fontSize: 16),
    );
  }

  static BottomNavigationBarThemeData _buildBottomNavTheme() {
    return const BottomNavigationBarThemeData(
      backgroundColor: AppColors.surfaceContainer,
      selectedItemColor: AppColors.primary,
      unselectedItemColor: AppColors.onSurfaceVariant,
      type: BottomNavigationBarType.fixed,
      elevation: 0,
    );
  }

  static CardThemeData _buildCardTheme() {
    return CardThemeData(
      color: AppColors.glassBackground,
      elevation: 0,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(16),
        side: BorderSide(color: AppColors.glassBorder),
      ),
    );
  }

  static ChipThemeData _buildChipTheme() {
    return ChipThemeData(
      backgroundColor: AppColors.surfaceContainerHigh,
      labelStyle: GoogleFonts.inter(fontSize: 12, color: AppColors.onSurface),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(100)),
      side: BorderSide.none,
    );
  }
}

// Gradient decorations
class AppGradients {
  static const LinearGradient primary = LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
    colors: [AppColors.gradientStart, AppColors.gradientEnd],
  );

  static const LinearGradient primaryHorizontal = LinearGradient(
    begin: Alignment.centerLeft,
    end: Alignment.centerRight,
    colors: [AppColors.primary, AppColors.secondary],
  );

  static LinearGradient backstageOverlay = LinearGradient(
    begin: Alignment.topCenter,
    end: Alignment.bottomCenter,
    colors: [
      Colors.transparent,
      AppColors.background.withOpacity(0.8),
      AppColors.background,
    ],
    stops: const [0.0, 0.7, 1.0],
  );
}
