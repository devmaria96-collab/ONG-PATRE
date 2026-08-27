import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

import { AppCard, PageHeader, ScreenContainer } from '@/components/ui/ScreenLayout';
import { Palette, Radius, Spacing } from '@/constants/Theme';
import { Animal, animals } from '@/data/animals';
import { useThemeColor } from '@/hooks/useThemeColor';

const filters = [
  { label: 'Todos', icon: 'apps' },
  { label: 'Cães', icon: 'pets' },
  { label: 'Gatos', icon: 'pets' },
  { label: 'Pequeno', icon: 'filter-alt' },
  { label: 'Grande', icon: 'filter-alt' },
] as const;

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const text = useThemeColor({}, 'text');
  const muted = useThemeColor({}, 'muted');
  const primary = useThemeColor({}, 'primary');
  const surfaceSoft = useThemeColor({}, 'surfaceSoft');
  const border = useThemeColor({}, 'border');
  const columns = width >= 980 ? 2 : 1;

  const handleAnimalPress = (animalId: string) => {
    router.push(`/animal/${animalId}` as never);
  };

  const renderAnimalCard = (animal: Animal) => (
    <Pressable
      accessibilityRole="button"
      key={animal.id}
      onPress={() => handleAnimalPress(animal.id)}
      style={({ pressed }) => [
        styles.cardPressable,
        columns === 2 && styles.cardDesktop,
        { opacity: pressed ? 0.88 : 1 },
      ]}>
      <AppCard style={styles.animalCard}>
        <View style={[styles.animalImage, { backgroundColor: surfaceSoft }]}>
          <Text style={styles.animalEmoji}>{animal.image}</Text>
        </View>
        <View style={styles.animalInfo}>
          <View style={styles.cardTitleRow}>
            <View style={styles.cardTitleCopy}>
              <Text style={[styles.animalName, { color: text }]}>{animal.name}</Text>
              <Text style={[styles.animalDetails, { color: muted }]}>
                {animal.breed} · {animal.age}
              </Text>
            </View>
            <View style={[styles.favoriteButton, { backgroundColor: Palette.coralSoft }]}>
              <MaterialIcons name="favorite-border" size={20} color={Palette.coral} />
            </View>
          </View>
          <View style={styles.metaRow}>
            <View style={[styles.tag, { borderColor: border }]}>
              <Text style={[styles.tagText, { color: muted }]}>{animal.size}</Text>
            </View>
            <View style={[styles.tag, { borderColor: border }]}>
              <Text style={[styles.tagText, { color: muted }]}>{animal.gender}</Text>
            </View>
          </View>
          <View style={styles.locationRow}>
            <MaterialIcons name="location-on" size={16} color={primary} />
            <Text style={[styles.location, { color: muted }]}>{animal.location}</Text>
          </View>
          <Text style={[styles.description, { color: muted }]} numberOfLines={2}>
            {animal.summary}
          </Text>
          <View style={styles.detailsLink}>
            <Text style={[styles.detailsLinkText, { color: primary }]}>Conhecer {animal.name}</Text>
            <MaterialIcons name="arrow-forward" size={18} color={primary} />
          </View>
        </View>
      </AppCard>
    </Pressable>
  );

  return (
    <ScreenContainer>
      <PageHeader
        eyebrow="Adoção responsável"
        title="Animais para adoção"
        subtitle="Encontre seu novo melhor amigo e conheça a história de cada animal."
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filters}>
        {filters.map((filter, index) => (
          <Pressable
            accessibilityRole="button"
            key={filter.label}
            style={[
              styles.filter,
              index === 0
                ? { backgroundColor: primary, borderColor: primary }
                : { backgroundColor: surfaceSoft, borderColor: border },
            ]}>
            <MaterialIcons
              name={filter.icon}
              size={18}
              color={index === 0 ? Palette.white : muted}
            />
            <Text style={[styles.filterText, { color: index === 0 ? Palette.white : text }]}>
              {filter.label}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      <View style={styles.grid}>{animals.map(renderAnimalCard)}</View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  filters: { gap: Spacing.sm, paddingRight: Spacing.lg },
  filter: {
    minHeight: 42,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    paddingHorizontal: Spacing.lg,
    borderRadius: Radius.pill,
    borderWidth: 1,
  },
  filterText: { fontSize: 14, fontWeight: '700' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.xl },
  cardPressable: { width: '100%' },
  cardDesktop: { width: '48.8%', flexGrow: 1 },
  animalCard: {
    padding: Spacing.lg,
    flexDirection: 'row',
    gap: Spacing.lg,
    minHeight: 210,
  },
  animalImage: {
    width: 116,
    borderRadius: Radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animalEmoji: { fontSize: 48 },
  animalInfo: { flex: 1, gap: Spacing.md },
  cardTitleRow: { flexDirection: 'row', alignItems: 'flex-start', gap: Spacing.md },
  cardTitleCopy: { flex: 1, gap: 2 },
  animalName: { fontSize: 21, lineHeight: 26, fontWeight: '800' },
  animalDetails: { fontSize: 14 },
  favoriteButton: {
    width: 36,
    height: 36,
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  metaRow: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.sm },
  tag: { borderWidth: 1, borderRadius: Radius.pill, paddingHorizontal: Spacing.md, paddingVertical: 4 },
  tagText: { fontSize: 12, fontWeight: '700' },
  locationRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.xs },
  location: { fontSize: 13 },
  description: { fontSize: 14, lineHeight: 20 },
  detailsLink: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm, marginTop: 'auto' },
  detailsLinkText: { fontSize: 14, fontWeight: '800' },
});
