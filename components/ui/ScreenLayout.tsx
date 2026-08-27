import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ReactNode } from 'react';
import {
  Pressable,
  ScrollView,
  ScrollViewProps,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  ViewProps,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import { Radius, Shadow, Spacing, Typography } from '@/constants/Theme';
import { useThemeColor } from '@/hooks/useThemeColor';

type ScreenContainerProps = ScrollViewProps & {
  children: ReactNode;
  maxWidth?: number;
  scroll?: boolean;
};

export function ScreenContainer({
  children,
  maxWidth = 1120,
  scroll = true,
  contentContainerStyle,
  ...props
}: ScreenContainerProps) {
  const background = useThemeColor({}, 'background');
  const content = (
    <View style={[styles.content, { maxWidth }, contentContainerStyle]}>{children}</View>
  );

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: background }]} edges={['top']}>
      {scroll ? (
        <ScrollView
          {...props}
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          {content}
        </ScrollView>
      ) : (
        <View style={styles.nonScroll}>{content}</View>
      )}
    </SafeAreaView>
  );
}

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  back?: boolean;
  action?: ReactNode;
};

export function PageHeader({ title, subtitle, eyebrow, back, action }: PageHeaderProps) {
  const text = useThemeColor({}, 'text');
  const muted = useThemeColor({}, 'muted');
  const primary = useThemeColor({}, 'primary');

  return (
    <View style={styles.header}>
      {back && (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Voltar"
          onPress={() => router.back()}
          style={({ pressed }) => [styles.backButton, { opacity: pressed ? 0.6 : 1 }]}>
          <MaterialIcons name="arrow-back" size={20} color={primary} />
          <Text style={[styles.backText, { color: primary }]}>Voltar</Text>
        </Pressable>
      )}
      <View style={styles.headerRow}>
        <View style={styles.headerCopy}>
          {eyebrow && <Text style={[styles.eyebrow, { color: primary }]}>{eyebrow}</Text>}
          <Text style={[styles.title, { color: text }]}>{title}</Text>
          {subtitle && <Text style={[styles.subtitle, { color: muted }]}>{subtitle}</Text>}
        </View>
        {action}
      </View>
    </View>
  );
}

export function AppCard({ style, ...props }: ViewProps) {
  const surface = useThemeColor({}, 'surface');
  const border = useThemeColor({}, 'border');
  return (
    <View
      style={[styles.card, { backgroundColor: surface, borderColor: border }, Shadow, style]}
      {...props}
    />
  );
}

export function ResponsiveGrid({ children }: { children: ReactNode }) {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.grid, width >= 900 && styles.gridDesktop]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  nonScroll: {
    flex: 1,
  },
  content: {
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.lg,
    paddingBottom: 110,
    gap: Spacing.xl,
  },
  header: {
    gap: Spacing.lg,
    paddingTop: Spacing.sm,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: Spacing.lg,
  },
  headerCopy: {
    flex: 1,
    gap: Spacing.sm,
  },
  eyebrow: {
    fontSize: Typography.caption,
    fontWeight: '800',
    letterSpacing: 1.4,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: Typography.title,
    lineHeight: 37,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: Typography.body,
    lineHeight: 24,
    maxWidth: 720,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    alignSelf: 'flex-start',
    minHeight: 40,
  },
  backText: {
    fontSize: 15,
    fontWeight: '700',
  },
  card: {
    borderWidth: 1,
    borderRadius: Radius.lg,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.lg,
  },
  gridDesktop: {
    gap: Spacing.xl,
  },
});
