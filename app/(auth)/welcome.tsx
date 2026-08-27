import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';

import { AppButton } from '@/components/ui/AppButton';
import { BrandMark } from '@/components/ui/BrandMark';
import { ScreenContainer } from '@/components/ui/ScreenLayout';
import { Palette, Radius, Spacing, Typography } from '@/constants/Theme';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function WelcomeScreen() {
  const { width } = useWindowDimensions();
  const text = useThemeColor({}, 'text');
  const muted = useThemeColor({}, 'muted');
  const desktop = width >= 820;

  return (
    <ScreenContainer
      scroll={false}
      maxWidth={1180}
      contentContainerStyle={[styles.page, desktop && styles.pageDesktop]}>
      <View style={[styles.copy, desktop && styles.copyDesktop]}>
        <BrandMark />
        <View style={styles.heading}>
          <Text style={[styles.eyebrow, { color: Palette.coral }]}>Conectando corações e patinhas</Text>
          <Text style={[styles.title, { color: text }, desktop && styles.titleDesktop]}>
            Uma segunda chance começa com um encontro.
          </Text>
          <Text style={[styles.description, { color: muted }]}>
            Encontre seu novo melhor amigo e dê um lar cheio de amor a animais que esperam por uma
            família.
          </Text>
        </View>
        <AppButton
          label="Entrar"
          icon="arrow-forward"
          fullWidth={!desktop}
          onPress={() => router.push('/login')}
          style={desktop ? styles.buttonDesktop : undefined}
        />
      </View>

      <View style={[styles.visual, desktop && styles.visualDesktop]}>
        <View style={styles.orbitLarge}>
          <View style={styles.orbitSmall}>
            <MaterialIcons name="pets" size={desktop ? 100 : 72} color={Palette.white} />
          </View>
        </View>
        <View style={[styles.note, styles.noteTop]}>
          <MaterialIcons name="favorite" size={20} color={Palette.coral} />
          <Text style={styles.noteText}>Adoção responsável</Text>
        </View>
        <View style={[styles.note, styles.noteBottom]}>
          <MaterialIcons name="home" size={20} color={Palette.forest} />
          <Text style={styles.noteText}>Um lar para cada história</Text>
        </View>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, justifyContent: 'center', gap: Spacing.xxl, paddingVertical: Spacing.xxl },
  pageDesktop: { flexDirection: 'row', alignItems: 'center', gap: Spacing.xxxl },
  copy: { flex: 1, gap: Spacing.xxxl },
  copyDesktop: { maxWidth: 560 },
  heading: { gap: Spacing.lg },
  eyebrow: {
    fontSize: Typography.caption,
    lineHeight: 18,
    fontWeight: '900',
    letterSpacing: 1.4,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 38,
    lineHeight: 45,
    fontWeight: '900',
    letterSpacing: -1,
  },
  titleDesktop: { fontSize: 56, lineHeight: 64 },
  description: { fontSize: Typography.body, lineHeight: 26, maxWidth: 520 },
  buttonDesktop: { width: 190 },
  visual: {
    minHeight: 300,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  visualDesktop: { minHeight: 560 },
  orbitLarge: {
    width: 270,
    height: 270,
    borderRadius: Radius.pill,
    backgroundColor: Palette.sageLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orbitSmall: {
    width: 180,
    height: 180,
    borderRadius: Radius.pill,
    backgroundColor: Palette.forest,
    alignItems: 'center',
    justifyContent: 'center',
  },
  note: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderRadius: Radius.pill,
    backgroundColor: Palette.white,
  },
  noteTop: { top: '12%', right: '2%' },
  noteBottom: { bottom: '12%', left: '2%' },
  noteText: { color: Palette.ink, fontSize: 13, fontWeight: '700' },
});
