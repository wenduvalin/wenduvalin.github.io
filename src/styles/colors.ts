/**
 * Centralized Color Palette for Portfolio
 * 
 * This file contains all colors used throughout the application
 * organized by semantic meaning and theme variants.
 */

export const colors = {
  // Base colors
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',

  // Primary Burgundy Palette — anchored on brand primary #800020 (700)
  pink: {
    25: '#FAF4F6',         // Whisper-warm ivory blush (section transitions)
    50: '#F7E8EC',         // Soft ivory-blush background
    100: '#F0CCD4',        // Light blush
    200: '#E495A7',        // Dusty rose (borders, soft accents)
    300: '#D7476B',        // Rose-burgundy (primary accent, dark-mode text)
    400: '#C7234C',        // Rich burgundy-rose (button gradients)
    500: '#AA1339',        // Vivid burgundy
    600: '#900629',        // Deep burgundy
    700: '#800020',        // Brand primary — Borgoña
    800: '#5C0018',        // Dark burgundy (main body text ink)
    900: '#3B0010',        // Near-black wine
  },

  // Neutral scale — warm, near-black tones derived from the burgundy hue
  dark: {
    50: '#FBFAF9',         // Warm off-white
    100: '#F4F2F0',        // Warm very light neutral
    200: '#E4E0DD',        // Warm light neutral
    300: '#C3BBB6',        // Warm light-medium neutral
    400: '#9C928B',        // Warm medium neutral
    500: '#796D67',        // Warm neutral gray
    600: '#5A4E49',        // Warm medium-dark neutral
    700: '#41342F',        // Warm dark neutral
    800: '#321B1F',        // Deep warm neutral (dark-mode cards)
    900: '#220F12',        // Near-black, burgundy-derived (dark-mode bg)
    950: '#15070A',        // Darkest — near-black wine
  },

  // Semantic colors
  background: {
    light: {
      primary: '#FFFFFF',
      secondary: '#F7E8EC',
      gradient: 'linear-gradient(180deg, rgb(250 244 246) 0%, rgb(248 238 241) 50%, rgb(247 232 236) 100%)',
      gradientEnd: 'rgb(247 232 236)', // End color of the main gradient for seamless transitions
      overlay: 'rgba(255, 255, 255, 0.5)',
      // Section-specific gradients - mostly white/ivory with a very light burgundy brush at edges
      sections: {
        about: 'linear-gradient(180deg, rgb(255 255 255) 0%, rgb(253 248 250) 30%, #FAF4F6 100%)',
        skills: 'linear-gradient(180deg, rgb(250 244 246) 0%, rgb(253 250 251) 30%, rgb(253 250 251) 70%, rgb(255 255 255) 100%)',
        projects: 'linear-gradient(180deg, rgb(250 244 246) 0%, rgb(255 255 255) 15%, rgb(255 255 255) 85%, rgb(250 244 246) 100%)',
        experience: 'linear-gradient(180deg, rgb(250 244 246) 0%, rgb(253 250 251) 25%, rgb(253 250 251) 75%, rgb(250 244 246) 100%)',
        certifications: 'linear-gradient(180deg, rgb(255 255 255) 0%, rgb(255 255 255) 60%, rgb(253 250 251) 100%)',
      },
    },
    dark: {
      primary: '#220F12',
      secondary: '#321B1F',
      gradient: '#15070A',
      gradientEnd: '#15070A', // Consistent dark background for seamless transitions
      overlay: 'rgba(0, 0, 0, 0.7)',
      // Dark mode sections maintain consistent dark background
      sections: {
        about: '#15070A',
        skills: '#15070A',
        projects: '#15070A',
        experience: '#15070A',
        certifications: '#15070A',
      },
    },
  },

  // Text colors
  text: {
    light: {
      primary: '#321B1F',     // Warm near-black ink (rgb(50, 27, 31))
      secondary: '#5A4E49',   // Warm dark neutral (rgb(90, 78, 73))
      tertiary: '#796D67',    // Warm mid neutral (rgb(121, 109, 103))
      accent: '#5C0018',      // Dark burgundy text
      pink: '#800020',        // Brand burgundy text (rgb(128, 0, 32))
    },
    dark: {
      primary: '#FFFFFF',
      secondary: '#F0CCD4',
      tertiary: '#E495A7',
      accent: '#D7476B',
      pink: '#E495A7',
    },
  },

  // Interactive elements
  interactive: {
    light: {
      primary: 'rgba(215, 71, 107, 0.1)',
      hover: 'rgba(215, 71, 107, 0.2)',
      active: '#D7476B',
      focus: 'rgba(215, 71, 107, 0.3)',
    },
    dark: {
      primary: 'rgba(215, 71, 107, 0.1)',
      hover: 'rgba(215, 71, 107, 0.2)',
      active: '#D7476B',
      focus: 'rgba(215, 71, 107, 0.3)',
    },
  },

  // Navigation specific
  navigation: {
    light: {
      background: 'rgba(240, 204, 212, 0.4)',
      backgroundScrolled: 'rgba(240, 204, 212, 0.6)',
      border: 'rgba(228, 149, 167, 0.15)',
      borderScrolled: 'rgba(228, 149, 167, 0.2)',
      shadow: 'rgba(228, 149, 167, 0.08)',
      shadowScrolled: 'rgba(228, 149, 167, 0.12)',
      mobile: 'rgba(250, 244, 246, 0.95)',
    },
    dark: {
      background: 'rgba(21, 7, 10, 0.4)',
      backgroundScrolled: 'rgba(21, 7, 10, 0.6)',
      border: 'rgba(215, 71, 107, 0.1)',
      borderScrolled: 'rgba(215, 71, 107, 0.15)',
      shadow: 'rgba(0, 0, 0, 0.2)',
      shadowScrolled: 'rgba(0, 0, 0, 0.3)',
      mobile: 'rgba(21, 7, 10, 0.95)',
    },
  },

  // Button variants
  button: {
    primary: {
      light: {
        background: '#D7476B',
        text: '#FFFFFF',
        hover: '#C7234C',
        shadow: 'rgba(215, 71, 107, 0.3)',
      },
      dark: {
        background: '#D7476B',
        text: '#15070A',
        hover: '#E495A7',
        shadow: 'rgba(215, 71, 107, 0.4)',
      },
    },
    secondary: {
      light: {
        background: 'rgba(255, 255, 255, 0.8)',
        text: '#321B1F',
        border: '#D7476B',
        hover: '#F0CCD4',
      },
      dark: {
        background: 'rgba(50, 27, 31, 0.9)',
        text: '#FFFFFF',
        border: '#41342F',
        hover: 'rgba(215, 71, 107, 0.1)',
      },
    },
    outline: {
      light: {
        background: 'transparent',
        text: '#900629',
        border: '#D7476B',
        hover: '#F0CCD4',
      },
      dark: {
        background: '#321B1F',
        text: '#E495A7',
        border: '#C7234C',
        hover: 'rgba(215, 71, 107, 0.1)',
      },
    },
  },

  // Card colors
  card: {
    light: {
      background: '#FFFFFF',
      border: 'rgba(215, 71, 107, 0.3)',
      shadow: 'rgba(0, 0, 0, 0.1)',
    },
    dark: {
      background: '#321B1F',
      border: 'rgba(65, 52, 47, 0.3)',
      shadow: 'rgba(0, 0, 0, 0.3)',
    },
  },

  // Special effects
  effects: {
    glow: 'rgba(228, 149, 167, 0.3)',
    dropShadow: 'rgba(215, 71, 107, 0.3)',
    textShadow: 'rgba(0, 0, 0, 0.1)',
    blur: 'rgba(255, 255, 255, 0.1)',
  },

  // Utility colors
  utility: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    neutral: '#6B7280',
  },

  // Special colors
  special: {
    dragMe: '#EC4999',       // Hot pink for drag me star — intentionally left unchanged (decorative/punk accent, not driven from this constant)
    aurora: {
      dark: '#D7476B',       // Burgundy aurora glow for dark mode
      light: {
        1: '#F7E8EC',        // Light burgundy aurora stop 1
        2: '#F0CCD4',        // Light burgundy aurora stop 2
        3: '#E495A7',        // Light burgundy aurora stop 3
      }
    }
  },
} as const;

// Type definitions for better TypeScript support
type ColorTheme = 'light' | 'dark';
type ColorVariant = keyof typeof colors;

export type { ColorTheme, ColorVariant };

// Helper function to get theme-specific colors
export const getThemeColors = (theme: ColorTheme) => ({
  background: colors.background[theme],
  text: colors.text[theme],
  interactive: colors.interactive[theme],
  navigation: colors.navigation[theme],
  button: {
    primary: colors.button.primary[theme],
    secondary: colors.button.secondary[theme],
    outline: colors.button.outline[theme],
  },
  card: colors.card[theme],
});