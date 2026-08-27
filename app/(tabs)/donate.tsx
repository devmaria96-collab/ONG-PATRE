import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

import { AppButton } from '@/components/ui/AppButton';
import { AppCard, PageHeader, ScreenContainer } from '@/components/ui/ScreenLayout';
import { Palette, Radius, Spacing } from '@/constants/Theme';
import { useThemeColor } from '@/hooks/useThemeColor';

const donationOptions = [
  { amount: '10', description: '1 kg de ração', icon: 'restaurant' },
  { amount: '25', description: 'Medicamentos', icon: 'medication' },
  { amount: '50', description: 'Consulta veterinária', icon: 'medical-services' },
  { amount: '100', description: 'Castração', icon: 'pets' },
] as const;

export default function DonateScreen() {
  const { width } = useWindowDimensions();
  const text = useThemeColor({}, 'text');
  const muted = useThemeColor({}, 'muted');
  const primary = useThemeColor({}, 'primary');
  const surface = useThemeColor({}, 'surface');
  const surfaceSoft = useThemeColor({}, 'surfaceSoft');
  const border = useThemeColor({}, 'border');
  const desktop = width >= 900;

  const handleDonation = (amount: string) => {
    // Implementar lógica de doação
    console.log(`Doação de R$ ${amount}`);
  };

  return (
    <ScreenContainer>
      <PageHeader
        eyebrow="Apoie a missão"
        title="Doações"
        subtitle="Sua ajuda faz a diferença na vida dos animais."
      />

      <View style={[styles.columns, desktop && styles.columnsDesktop]}>
        <View style={styles.mainColumn}>
          <AppCard style={styles.section}>
            <SectionTitle
              icon="favorite"
              title="Valores sugeridos"
              subtitle="Escolha como deseja transformar uma vida hoje."
              color={text}
              muted={muted}
            />
            <View style={styles.donationGrid}>
              {donationOptions.map((option) => (
                <Pressable
                  accessibilityRole="button"
                  key={option.amount}
                  onPress={() => handleDonation(option.amount)}
                  style={({ pressed }) => [
                    styles.donationButton,
                    { backgroundColor: surfaceSoft, borderColor: border, opacity: pressed ? 0.8 : 1 },
                  ]}>
                  <MaterialIcons name={option.icon} size={23} color={Palette.coral} />
                  <Text style={styles.donationAmount}>R$ {option.amount}</Text>
                  <Text style={[styles.donationDescription, { color: muted }]}>
                    {option.description}
                  </Text>
                </Pressable>
              ))}
            </View>
          </AppCard>

          <AppCard style={styles.section}>
            <SectionTitle
              icon="autorenew"
              title="Doação recorrente"
              subtitle="Torne-se um padrinho/madrinha e ajude mensalmente com qualquer valor."
              color={text}
              muted={muted}
            />
            <AppButton label="Configurar doação mensal" icon="calendar-month" variant="secondary" />
          </AppCard>
        </View>

        <View style={styles.sideColumn}>
          <AppCard style={[styles.section, { backgroundColor: surfaceSoft }]}>
            <SectionTitle
              icon="pix"
              title="PIX"
              subtitle="Transferência rápida e sem taxas."
              color={text}
              muted={muted}
            />
            <View style={[styles.pixKey, { backgroundColor: surface, borderColor: border }]}>
              <Text style={[styles.pixLabel, { color: muted }]}>Chave PIX</Text>
              <Text selectable style={[styles.pixValue, { color: text }]}>
                ong.animais@email.com
              </Text>
            </View>
            <AppButton label="Copiar chave" icon="content-copy" />
          </AppCard>

          <AppCard style={styles.section}>
            <SectionTitle
              icon="pie-chart"
              title="Transparência"
              subtitle="Veja como suas doações estão sendo utilizadas:"
              color={text}
              muted={muted}
            />
            <View style={styles.transparency}>
              {[
                ['medical-services', 'Veterinário', '40%'],
                ['restaurant', 'Alimentação', '35%'],
                ['home', 'Abrigo', '15%'],
                ['description', 'Administrativo', '10%'],
              ].map(([icon, label, value]) => (
                <View key={label} style={styles.transparencyItem}>
                  <View style={styles.transparencyLabel}>
                    <MaterialIcons
                      name={icon as keyof typeof MaterialIcons.glyphMap}
                      size={19}
                      color={primary}
                    />
                    <Text style={[styles.itemText, { color: text }]}>{label}</Text>
                  </View>
                  <Text style={[styles.percent, { color: primary }]}>{value}</Text>
                </View>
              ))}
            </View>
          </AppCard>
        </View>
      </View>
    </ScreenContainer>
  );
}

function SectionTitle({
  icon,
  title,
  subtitle,
  color,
  muted,
}: {
  icon: keyof typeof MaterialIcons.glyphMap;
  title: string;
  subtitle: string;
  color: string;
  muted: string;
}) {
  return (
    <View style={styles.sectionHeading}>
      <MaterialIcons name={icon} size={24} color={Palette.coral} />
      <View style={styles.sectionCopy}>
        <Text style={[styles.sectionTitle, { color }]}>{title}</Text>
        <Text style={[styles.sectionSubtitle, { color: muted }]}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  columns: { gap: Spacing.xl },
  columnsDesktop: { flexDirection: 'row', alignItems: 'flex-start' },
  mainColumn: { flex: 1.35, gap: Spacing.xl },
  sideColumn: { flex: 1, gap: Spacing.xl },
  section: { padding: Spacing.xl, gap: Spacing.xl },
  sectionHeading: { flexDirection: 'row', alignItems: 'flex-start', gap: Spacing.md },
  sectionCopy: { flex: 1, gap: Spacing.xs },
  sectionTitle: { fontSize: 20, lineHeight: 25, fontWeight: '800' },
  sectionSubtitle: { fontSize: 14, lineHeight: 20 },
  donationGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.md },
  donationButton: {
    flexGrow: 1,
    flexBasis: 145,
    minHeight: 128,
    padding: Spacing.lg,
    borderWidth: 1,
    borderRadius: Radius.md,
    justifyContent: 'center',
    gap: Spacing.sm,
  },
  donationAmount: { color: Palette.coral, fontSize: 20, fontWeight: '900' },
  donationDescription: { fontSize: 13, lineHeight: 18 },
  pixKey: { borderWidth: 1, borderRadius: Radius.md, padding: Spacing.lg, gap: Spacing.xs },
  pixLabel: { fontSize: 12, fontWeight: '700', textTransform: 'uppercase' },
  pixValue: { fontSize: 16, fontWeight: '700' },
  transparency: { gap: Spacing.lg },
  transparencyItem: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  transparencyLabel: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md },
  itemText: { fontSize: 15 },
  percent: { fontSize: 15, fontWeight: '900' },
});
