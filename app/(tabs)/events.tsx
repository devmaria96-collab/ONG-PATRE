import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';

import { AppCard, PageHeader, ScreenContainer } from '@/components/ui/ScreenLayout';
import { Palette, Radius, Spacing } from '@/constants/Theme';
import { useThemeColor } from '@/hooks/useThemeColor';

const events = [
  {
    title: 'Feira de Adoção - Shopping Center',
    date: '15 de Janeiro, 2025',
    time: '09:00 - 17:00',
    location: 'Shopping Center Norte - Praça Central',
    description:
      'Grande feira de adoção com mais de 50 animais disponíveis. Venha conhecer seu novo melhor amigo!',
    kind: 'Feira de adoção',
  },
  {
    title: 'Mutirão de Castração',
    date: '22 de Janeiro, 2025',
    time: '08:00 - 16:00',
    location: 'Clínica Veterinária Amigos',
    description: 'Mutirão gratuito de castração para animais da comunidade. Vagas limitadas!',
    kind: 'Saúde animal',
  },
  {
    title: 'Arrecadação de Ração',
    date: 'Todo sábado',
    time: '14:00 - 18:00',
    location: 'Parque da Cidade',
    description: 'Ajude-nos a arrecadar ração e medicamentos para os animais resgatados.',
    kind: 'Voluntariado',
  },
];

export default function EventsScreen() {
  const { width } = useWindowDimensions();
  const text = useThemeColor({}, 'text');
  const muted = useThemeColor({}, 'muted');
  const primary = useThemeColor({}, 'primary');
  const surfaceSoft = useThemeColor({}, 'surfaceSoft');
  const twoColumns = width >= 900;

  return (
    <ScreenContainer>
      <PageHeader
        eyebrow="Faça parte"
        title="Eventos & Voluntariado"
        subtitle="Participe dos nossos mutirões e feiras de adoção."
      />
      <View style={styles.grid}>
        {events.map((event, index) => (
          <AppCard
            key={event.title}
            style={[styles.card, twoColumns && styles.cardDesktop, index === 0 && twoColumns && styles.featured]}>
            <View style={styles.cardTop}>
              <View style={[styles.icon, { backgroundColor: index === 0 ? Palette.coralSoft : surfaceSoft }]}>
                <MaterialIcons
                  name={index === 0 ? 'pets' : index === 1 ? 'medical-services' : 'volunteer-activism'}
                  size={25}
                  color={index === 0 ? Palette.coral : primary}
                />
              </View>
              <View style={[styles.badge, { backgroundColor: surfaceSoft }]}>
                <Text style={[styles.badgeText, { color: primary }]}>{event.kind}</Text>
              </View>
            </View>
            <Text style={[styles.title, { color: text }]}>{event.title}</Text>
            <View style={styles.meta}>
              <Meta icon="calendar-today" value={event.date} color={muted} />
              <Meta icon="schedule" value={event.time} color={muted} />
              <Meta icon="location-on" value={event.location} color={muted} />
            </View>
            <Text style={[styles.description, { color: muted }]}>{event.description}</Text>
          </AppCard>
        ))}
      </View>
    </ScreenContainer>
  );
}

function Meta({
  icon,
  value,
  color,
}: {
  icon: keyof typeof MaterialIcons.glyphMap;
  value: string;
  color: string;
}) {
  return (
    <View style={styles.metaRow}>
      <MaterialIcons name={icon} size={17} color={color} />
      <Text style={[styles.metaText, { color }]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.xl },
  card: { width: '100%', padding: Spacing.xl, gap: Spacing.lg },
  cardDesktop: { width: '47.5%', flexGrow: 1 },
  featured: { width: '100%' },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: Spacing.md },
  icon: { width: 48, height: 48, borderRadius: Radius.md, alignItems: 'center', justifyContent: 'center' },
  badge: { borderRadius: Radius.pill, paddingHorizontal: Spacing.md, paddingVertical: Spacing.sm },
  badgeText: { fontSize: 12, fontWeight: '800' },
  title: { fontSize: 20, lineHeight: 26, fontWeight: '800' },
  meta: { gap: Spacing.sm },
  metaRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm },
  metaText: { flex: 1, fontSize: 14, lineHeight: 20 },
  description: { fontSize: 15, lineHeight: 23 },
});
