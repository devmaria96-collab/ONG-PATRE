import { Platform } from 'react-native';

export const Palette = {
  forest: '#174C45',
  forestDark: '#103934',
  sage: '#6D8D78',
  sageLight: '#DDE8E0',
  cream: '#F7F4ED',
  sand: '#E9E1D3',
  coral: '#D96C56',
  coralSoft: '#F6E1DB',
  gold: '#C9933E',
  white: '#FFFFFF',
  ink: '#1D2A27',
  muted: '#65716E',
  border: '#DCE3DF',
  danger: '#B8493A',
  success: '#2F765E',
} as const;

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
} as const;

export const Radius = {
  sm: 10,
  md: 14,
  lg: 20,
  xl: 28,
  pill: 999,
} as const;

export const Typography = {
  display: 40,
  title: 30,
  section: 20,
  body: 16,
  small: 14,
  caption: 12,
} as const;

export const Shadow = Platform.select({
  web: {
    boxShadow: '0 10px 30px rgba(23, 76, 69, 0.10)',
  },
  default: {
    shadowColor: Palette.forestDark,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 4,
  },
});
