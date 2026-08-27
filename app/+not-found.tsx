import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Stack, router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { AppButton } from '@/components/ui/AppButton';
import { BrandMark } from '@/components/ui/BrandMark';
import { AppCard, ScreenContainer } from '@/components/ui/ScreenLayout';
import { Palette, Radius, Spacing } from '@/constants/Theme';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function NotFoundScreen() {
  const text = useThemeColor({}, 'text');
  const muted = useThemeColor({}, 'muted');

  return (
    <>
      <Stack.Screen options={{ title: 'Página não encontrada' }} />
      <ScreenContainer scroll={false} maxWidth={680} contentContainerStyle={styles.page}>
        <BrandMark compact />
        <AppCard style={styles.card}>
          <View style={styles.icon}>
            <MaterialIcons name="travel-explore" size={42} color={Palette.forest} />
          </View>
          <Text style={[styles.code, { color: Palette.coral }]}>ERRO 404</Text>
          <Text style={[styles.title, { color: text }]}>Esta página não foi encontrada</Text>
          <Text style={[styles.description, { color: muted }]}>
            O endereço pode ter mudado ou não está mais disponível. Volte para continuar conhecendo
            o trabalho da PATRE.
          </Text>
          <AppButton
            label="Ir para o início"
            icon="home"
            onPress={() => router.replace('/(tabs)')}
          />
        </AppCard>
      </ScreenContainer>
    </>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: Spacing.xl },
  card: { width: '100%', padding: Spacing.xxl, alignItems: 'center', gap: Spacing.lg },
  icon: {
    width: 78,
    height: 78,
    borderRadius: Radius.pill,
    backgroundColor: Palette.sageLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  code: { fontSize: 12, fontWeight: '900', letterSpacing: 1.5 },
  title: { fontSize: 27, lineHeight: 34, fontWeight: '900', textAlign: 'center' },
  description: { maxWidth: 460, fontSize: 15, lineHeight: 23, textAlign: 'center' },
});
