import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';

import { AppCard, PageHeader, ScreenContainer } from '@/components/ui/ScreenLayout';
import { Palette, Radius, Spacing } from '@/constants/Theme';
import { useThemeColor } from '@/hooks/useThemeColor';

const pillars = [
  {
    icon: 'pets',
    title: 'Resgate e proteção',
    text: 'Acolhemos animais em situação de vulnerabilidade e garantimos cuidado até a recuperação.',
  },
  {
    icon: 'medical-services',
    title: 'Saúde e bem-estar',
    text: 'Promovemos vacinação, castração, acompanhamento veterinário e uma rotina segura.',
  },
  {
    icon: 'home',
    title: 'Adoção responsável',
    text: 'Conectamos animais e famílias com orientação e acompanhamento em cada etapa.',
  },
] as const;

export default function ExploreScreen() {
  const { width } = useWindowDimensions();
  const text = useThemeColor({}, 'text');
  const muted = useThemeColor({}, 'muted');
  const primary = useThemeColor({}, 'primary');
  const surfaceSoft = useThemeColor({}, 'surfaceSoft');
  const desktop = width >= 900;

  return (
    <ScreenContainer>
      <PageHeader
        eyebrow="Conheça a PATRE"
        title="Proteção que transforma histórias"
        subtitle="Uma rede dedicada ao resgate, cuidado e encontro responsável entre animais e novas famílias."
      />

      <View style={[styles.hero, desktop && styles.heroDesktop]}>
        <View style={styles.heroCopy}>
          <Text style={styles.quote}>“Toda vida merece cuidado, respeito e um lugar para chamar de lar.”</Text>
          <Text style={[styles.heroText, { color: muted }]}>
            Desde 2015, a PATRE mobiliza voluntários, profissionais e apoiadores para oferecer uma
            segunda chance a animais em situação de abandono. Nosso trabalho vai do acolhimento à
            adoção, sempre com responsabilidade e afeto.
          </Text>
        </View>
        <View style={styles.heroVisual}>
          <View style={[styles.visualCircle, { backgroundColor: primary }]}>
            <MaterialIcons name="volunteer-activism" size={76} color={Palette.white} />
          </View>
        </View>
      </View>

      <View style={styles.grid}>
        {pillars.map((pillar) => (
          <AppCard key={pillar.title} style={[styles.pillar, desktop && styles.pillarDesktop]}>
            <View style={[styles.icon, { backgroundColor: surfaceSoft }]}>
              <MaterialIcons name={pillar.icon} size={28} color={primary} />
            </View>
            <Text style={[styles.pillarTitle, { color: text }]}>{pillar.title}</Text>
            <Text style={[styles.pillarText, { color: muted }]}>{pillar.text}</Text>
          </AppCard>
        ))}
      </View>

      <AppCard style={[styles.impact, { backgroundColor: Palette.forest }]}>
        <View style={styles.impactHeading}>
          <MaterialIcons name="groups" size={28} color={Palette.sageLight} />
          <View style={styles.impactCopy}>
            <Text style={styles.impactTitle}>Uma missão construída em comunidade</Text>
            <Text style={styles.impactText}>
              Adotantes, voluntários e doadores tornam possível cada resgate e cada recomeço.
            </Text>
          </View>
        </View>
        <View style={styles.values}>
          {['Respeito à vida', 'Transparência', 'Responsabilidade', 'Cuidado contínuo'].map((value) => (
            <View key={value} style={styles.value}>
              <MaterialIcons name="check-circle" size={18} color={Palette.sageLight} />
              <Text style={styles.valueText}>{value}</Text>
            </View>
          ))}
        </View>
      </AppCard>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  hero: {
    borderRadius: Radius.xl,
    backgroundColor: Palette.sageLight,
    padding: Spacing.xl,
    gap: Spacing.xl,
    overflow: 'hidden',
  },
  heroDesktop: { flexDirection: 'row', alignItems: 'center', padding: Spacing.xxxl },
  heroCopy: { flex: 1, gap: Spacing.lg },
  quote: { color: Palette.forestDark, fontSize: 25, lineHeight: 34, fontWeight: '800' },
  heroText: { fontSize: 15, lineHeight: 24 },
  heroVisual: { flex: 0.65, alignItems: 'center', justifyContent: 'center' },
  visualCircle: {
    width: 180,
    height: 180,
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.xl },
  pillar: { width: '100%', padding: Spacing.xl, gap: Spacing.lg },
  pillarDesktop: { flex: 1, minWidth: 230 },
  icon: { width: 54, height: 54, borderRadius: Radius.md, alignItems: 'center', justifyContent: 'center' },
  pillarTitle: { fontSize: 19, fontWeight: '800' },
  pillarText: { fontSize: 15, lineHeight: 23 },
  impact: { padding: Spacing.xl, gap: Spacing.xl },
  impactHeading: { flexDirection: 'row', alignItems: 'flex-start', gap: Spacing.md },
  impactCopy: { flex: 1, gap: Spacing.sm },
  impactTitle: { color: Palette.white, fontSize: 21, lineHeight: 27, fontWeight: '800' },
  impactText: { color: Palette.sageLight, fontSize: 15, lineHeight: 22 },
  values: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.md },
  value: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm, minWidth: 170 },
  valueText: { color: Palette.white, fontSize: 14, fontWeight: '700' },
});
