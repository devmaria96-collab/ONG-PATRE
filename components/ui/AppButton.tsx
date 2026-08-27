import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ActivityIndicator, Pressable, StyleSheet, Text, ViewStyle } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { Radius, Spacing } from '@/constants/Theme';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';

type AppButtonProps = {
  label: string;
  onPress?: () => void;
  icon?: keyof typeof MaterialIcons.glyphMap;
  variant?: ButtonVariant;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  style?: ViewStyle;
};

export function AppButton({
  label,
  onPress,
  icon,
  variant = 'primary',
  loading = false,
  disabled = false,
  fullWidth = true,
  style,
}: AppButtonProps) {
  const primary = useThemeColor({}, 'primary');
  const primaryPressed = useThemeColor({}, 'primaryPressed');
  const accent = useThemeColor({}, 'accent');
  const surfaceSoft = useThemeColor({}, 'surfaceSoft');
  const text = useThemeColor({}, 'text');
  const border = useThemeColor({}, 'border');

  const backgrounds = {
    primary,
    secondary: surfaceSoft,
    danger: accent,
    ghost: 'transparent',
  };
  const foreground = variant === 'primary' || variant === 'danger' ? '#FFFFFF' : text;

  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled || loading}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        fullWidth && styles.fullWidth,
        {
          backgroundColor: pressed && variant === 'primary' ? primaryPressed : backgrounds[variant],
          borderColor: variant === 'ghost' ? border : backgrounds[variant],
          opacity: disabled ? 0.55 : pressed ? 0.9 : 1,
          transform: [{ scale: pressed ? 0.99 : 1 }],
        },
        style,
      ]}>
      {loading ? (
        <ActivityIndicator color={foreground} />
      ) : (
        <>
          {icon && <MaterialIcons name={icon} size={20} color={foreground} />}
          <Text style={[styles.label, { color: foreground }]}>{label}</Text>
        </>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 52,
    paddingHorizontal: Spacing.xl,
    borderRadius: Radius.md,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  fullWidth: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
  },
});
