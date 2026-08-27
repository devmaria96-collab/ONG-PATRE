import { StyleSheet, Text, type TextProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { Typography } from '@/constants/Theme';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const linkColor = useThemeColor({}, 'primary');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? [styles.link, { color: linkColor }] : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: Typography.body,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: Typography.body,
    lineHeight: 24,
    fontWeight: '700',
  },
  title: {
    fontSize: Typography.title,
    fontWeight: '800',
    lineHeight: 37,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: Typography.section,
    lineHeight: 28,
    fontWeight: '700',
  },
  link: {
    lineHeight: 24,
    fontSize: Typography.body,
    fontWeight: '700',
  },
});
