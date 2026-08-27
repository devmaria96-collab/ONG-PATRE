/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Palette } from './Theme';

export const Colors = {
  light: {
    text: Palette.ink,
    background: Palette.cream,
    surface: Palette.white,
    surfaceSoft: '#EFF4F0',
    tint: Palette.forest,
    primary: Palette.forest,
    primaryPressed: Palette.forestDark,
    accent: Palette.coral,
    muted: Palette.muted,
    border: Palette.border,
    error: Palette.danger,
    success: Palette.success,
    icon: Palette.muted,
    tabIconDefault: '#7B8783',
    tabIconSelected: Palette.forest,
  },
  dark: {
    text: '#ECF3EF',
    background: '#0E1917',
    surface: '#172522',
    surfaceSoft: '#20312D',
    tint: '#9CC3AE',
    primary: '#9CC3AE',
    primaryPressed: '#B9D4C5',
    accent: '#E99682',
    muted: '#A8B5B0',
    border: '#334640',
    error: '#F19A89',
    success: '#8BC5AB',
    icon: '#A8B5B0',
    tabIconDefault: '#879590',
    tabIconSelected: '#9CC3AE',
  },
};
