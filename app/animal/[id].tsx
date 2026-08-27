import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

import { AppButton } from '@/components/ui/AppButton';
import { AppCard, PageHeader, ScreenContainer } from '@/components/ui/ScreenLayout';
import { Palette, Radius, Spacing } from '@/constants/Theme';
import { animals } from '@/data/animals';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function AnimalDetailScreen() {
  const { id } = useLocalSearchParams<{ id?: string | string[] }>();
  const { width } = useWindowDimensions();
  const text = useThemeColor({}, 'text');
  const muted = useThemeColor({}, 'muted');
  const primary = useThemeColor({}, 'primary');
  const surfaceSoft = useThemeColor({}, 'surfaceSoft');
  const border = useThemeColor({}, 'border');
  const animalId = Array.isArray(id) ? id[0] : id;
  const animal = animals.find((item) => item.id === animalId);
  const desktop = width >= 900;

  if (!animal) {
    return (
      <ScreenContainer maxWidth={680} contentContainerStyle={styles.notFound}>
        <AppCard style={styles.notFoundCard}>
          <MaterialIcons name="search-off" size={48} color={muted} />
          <Text style={[styles.notFoundTitle, { color: text }]}>Animal não encontrado</Text>
          <Text style={[styles.notFoundText, { color: muted }]}>
            Não encontramos um animal com este identificador.
          </Text>
          <AppButton label="Voltar" icon="arrow-back" onPress={() => router.back()} />
        </AppCard>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <PageHeader
        back
        eyebrow="Conheça sua história"
        title={animal.name}
        subtitle={`${animal.breed} · ${animal.age}`}
        action={
          <View style={[styles.favorite, { backgroundColor: Palette.coralSoft }]}>
            <MaterialIcons name="favorite-border" size={23} color={Palette.coral} />
          </View>
        }
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.gallery}>
        {animal.photos.map((photo, index) => (
          <View
            key={`${photo}-${index}`}
            style={[styles.photo, desktop && styles.photoDesktop, { backgroundColor: surfaceSoft }]}>
            <Text style={styles.photoEmoji}>{photo}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={[styles.layout, desktop && styles.layoutDesktop]}>
        <View style={styles.mainColumn}>
          <AppCard style={styles.section}>
            <View style={styles.location}>
              <MaterialIcons name="location-on" size={20} color={primary} />
              <Text style={[styles.locationText, { color: muted }]}>{animal.location}</Text>
            </View>
            <Text style={[styles.description, { color: text }]}>{animal.description}</Text>
          </AppCard>

          <AppCard style={styles.section}>
            <SectionTitle icon="auto-stories" label="História" color={text} />
            <Text style={[styles.sectionText, { color: muted }]}>{animal.story}</Text>
          </AppCard>

          <AppCard style={styles.section}>
            <SectionTitle icon="psychology-alt" label="Personalidade" color={text} />
            <View style={styles.tags}>
              {animal.personality.map((trait) => (
                <View key={trait} style={[styles.tag, { backgroundColor: surfaceSoft }]}>
                  <Text style={[styles.tagText, { color: primary }]}>{trait}</Text>
                </View>
              ))}
            </View>
          </AppCard>
        </View>

        <View style={styles.sideColumn}>
          <AppCard style={styles.section}>
            <Text style={[styles.sideTitle, { color: text }]}>Sobre {animal.name}</Text>
            <View style={styles.quickInfo}>
              {[
                ['straighten', 'Porte', animal.size],
                ['wc', 'Sexo', animal.gender],
                ['monitor-weight', 'Peso', animal.weight],
              ].map(([icon, label, value]) => (
                <View key={label} style={[styles.infoItem, { borderBottomColor: border }]}>
                  <View style={styles.infoLabel}>
                    <MaterialIcons
                      name={icon as keyof typeof MaterialIcons.glyphMap}
                      size={19}
                      color={primary}
                    />
                    <Text style={[styles.infoLabelText, { color: muted }]}>{label}</Text>
                  </View>
                  <Text style={[styles.infoValue, { color: text }]}>{value}</Text>
                </View>
              ))}
            </View>
          </AppCard>

          <AppCard style={styles.section}>
            <SectionTitle icon="health-and-safety" label="Saúde" color={text} />
            <View style={styles.health}>
              <MaterialIcons name="check-circle" size={21} color={Palette.success} />
              <Text style={[styles.healthText, { color: muted }]}>{animal.health}</Text>
            </View>
          </AppCard>

          <AppButton
            label="Quero adotar"
            icon="favorite"
            variant="danger"
            onPress={() => router.push('/adoption/form')}
          />
        </View>
      </View>
    </ScreenContainer>
  );
}

function SectionTitle({
  icon,
  label,
  color,
}: {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  color: string;
}) {
  return (
    <View style={styles.sectionTitleRow}>
      <MaterialIcons name={icon} size={22} color={Palette.forest} />
      <Text style={[styles.sectionTitle, { color }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  favorite: {
    width: 44,
    height: 44,
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gallery: { gap: Spacing.lg, paddingRight: Spacing.lg },
  photo: {
    width: 220,
    height: 220,
    borderRadius: Radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoDesktop: { width: 340, height: 280 },
  photoEmoji: { fontSize: 76 },
  layout: { gap: Spacing.xl },
  layoutDesktop: { flexDirection: 'row', alignItems: 'flex-start' },
  mainColumn: { flex: 1.6, gap: Spacing.xl },
  sideColumn: { flex: 1, gap: Spacing.xl },
  section: { padding: Spacing.xl, gap: Spacing.lg },
  location: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm },
  locationText: { fontSize: 14, fontWeight: '700' },
  description: { fontSize: 17, lineHeight: 27 },
  sectionTitleRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm },
  sectionTitle: { fontSize: 19, fontWeight: '800' },
  sectionText: { fontSize: 16, lineHeight: 25 },
  tags: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.sm },
  tag: { paddingHorizontal: Spacing.md, paddingVertical: Spacing.sm, borderRadius: Radius.pill },
  tagText: { fontSize: 13, fontWeight: '800' },
  sideTitle: { fontSize: 19, fontWeight: '800' },
  quickInfo: { gap: Spacing.xs },
  infoItem: {
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
  },
  infoLabel: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm },
  infoLabelText: { fontSize: 14 },
  infoValue: { fontSize: 14, fontWeight: '800' },
  health: { flexDirection: 'row', alignItems: 'flex-start', gap: Spacing.sm },
  healthText: { flex: 1, fontSize: 14, lineHeight: 21 },
  notFound: { flexGrow: 1, justifyContent: 'center' },
  notFoundCard: { padding: Spacing.xxl, alignItems: 'center', gap: Spacing.lg },
  notFoundTitle: { fontSize: 24, fontWeight: '800', textAlign: 'center' },
  notFoundText: { fontSize: 15, lineHeight: 22, textAlign: 'center' },
});
