import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useLocalSearchParams, router } from 'expo-router';

// Dados mockados dos animais (mesmo do index)
const animals = [
  {
    id: '1',
    name: 'Luna',
    species: 'Cão',
    breed: 'Labrador',
    age: '2 anos',
    size: 'Grande',
    gender: 'Fêmea',
    image: '🐕',
    description: 'Luna é uma cadela muito carinhosa e brincalhona. Ela adora brincar com crianças e outros cães. Foi resgatada quando ainda era filhote e agora está pronta para encontrar uma família amorosa.',
    location: 'São Paulo, SP',
    health: 'Vacinada, castrada, vermifugada',
    personality: ['Carinhosa', 'Brincalhona', 'Sociável', 'Obediente'],
    story: 'Luna foi encontrada abandonada em uma caixa de papelão quando tinha apenas 2 meses. Desde então, tem sido cuidada com muito amor pela nossa equipe.',
    weight: '25kg',
    photos: ['🐕', '🐕‍🦺', '🦮'],
  },
  {
    id: '2',
    name: 'Mimi',
    species: 'Gato',
    breed: 'SRD',
    age: '1 ano',
    size: 'Pequeno',
    gender: 'Fêmea',
    image: '🐱',
    description: 'Mimi é uma gatinha dócil e independente. Perfeita para quem busca um companheiro tranquilo.',
    location: 'São Paulo, SP',
    health: 'Vacinada, castrada, vermifugada',
    personality: ['Dócil', 'Independente', 'Carinhosa', 'Calma'],
    story: 'Mimi foi resgatada de uma colônia de gatos de rua. É muito carinhosa e se adapta bem a ambientes internos.',
    weight: '3kg',
    photos: ['🐱', '😺', '😸'],
  },
  {
    id: '3',
    name: 'Thor',
    species: 'Cão',
    breed: 'Pastor Alemão',
    age: '3 anos',
    size: 'Grande',
    gender: 'Macho',
    image: '🐕‍🦺',
    description: 'Thor é um cão protetor e leal. Ideal para quem busca um companheiro fiel.',
    location: 'São Paulo, SP',
    health: 'Vacinado, castrado, vermifugado',
    personality: ['Protetor', 'Leal', 'Inteligente', 'Corajoso'],
    story: 'Thor foi abandonado por sua família anterior, mas não perdeu a fé nos humanos. É um cão muito especial.',
    weight: '35kg',
    photos: ['🐕‍🦺', '🐕', '🦮'],
  },
  {
    id: '4',
    name: 'Bella',
    species: 'Cão',
    breed: 'Golden Retriever',
    age: '4 anos',
    size: 'Grande',
    gender: 'Fêmea',
    image: '🦮',
    description: 'Bella é muito amigável e adora crianças. Uma companheira perfeita para famílias.',
    location: 'São Paulo, SP',
    health: 'Vacinada, castrada, vermifugada',
    personality: ['Amigável', 'Paciente', 'Brincalhona', 'Gentil'],
    story: 'Bella chegou até nós após seu dono idoso não conseguir mais cuidar dela. É uma cadelinha muito especial.',
    weight: '28kg',
    photos: ['🦮', '🐕', '🐕‍🦺'],
  },
];

export default function AnimalDetailScreen() {
  const { id } = useLocalSearchParams();
  const animal = animals.find(a => a.id === id);

  if (!animal) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText>Animal não encontrado</ThemedText>
      </ThemedView>
    );
  }

  const handleAdoptPress = () => {
    router.push('/adoption/form');
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <ThemedText style={styles.backButtonText}>← Voltar</ThemedText>
        </TouchableOpacity>
        
        <ThemedView style={styles.favoriteButton}>
          <ThemedText style={styles.favoriteIcon}>♡</ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.imageGallery}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.photosScroll}>
          {animal.photos.map((photo, index) => (
            <ThemedView key={index} style={styles.photoContainer}>
              <ThemedText style={styles.photoEmoji}>{photo}</ThemedText>
            </ThemedView>
          ))}
        </ScrollView>
      </ThemedView>

      <ThemedView style={styles.content}>
        <ThemedView style={styles.basicInfo}>
          <ThemedText type="title">{animal.name}</ThemedText>
          <ThemedText style={styles.breed}>{animal.breed} • {animal.age}</ThemedText>
          <ThemedText style={styles.location}>📍 {animal.location}</ThemedText>
        </ThemedView>

        <ThemedView style={styles.quickInfo}>
          <ThemedView style={styles.infoItem}>
            <ThemedText style={styles.infoLabel}>Porte</ThemedText>
            <ThemedText style={styles.infoValue}>{animal.size}</ThemedText>
          </ThemedView>
          <ThemedView style={styles.infoItem}>
            <ThemedText style={styles.infoLabel}>Sexo</ThemedText>
            <ThemedText style={styles.infoValue}>{animal.gender}</ThemedText>
          </ThemedView>
          <ThemedView style={styles.infoItem}>
            <ThemedText style={styles.infoLabel}>Peso</ThemedText>
            <ThemedText style={styles.infoValue}>{animal.weight}</ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>História</ThemedText>
          <ThemedText style={styles.sectionText}>{animal.story}</ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>Personalidade</ThemedText>
          <ThemedView style={styles.personalityTags}>
            {animal.personality.map((trait, index) => (
              <ThemedView key={index} style={styles.personalityTag}>
                <ThemedText style={styles.personalityText}>{trait}</ThemedText>
              </ThemedView>
            ))}
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>Saúde</ThemedText>
          <ThemedText style={styles.sectionText}>✅ {animal.health}</ThemedText>
        </ThemedView>

        <TouchableOpacity style={styles.adoptButton} onPress={handleAdoptPress}>
          <ThemedText style={styles.adoptButtonText}>❤️ Quero Adotar</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007AFF',
  },
  favoriteButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 59, 48, 0.1)',
  },
  favoriteIcon: {
    fontSize: 20,
    color: '#FF3B30',
  },
  imageGallery: {
    height: 200,
    marginBottom: 20,
  },
  photosScroll: {
    paddingHorizontal: 20,
  },
  photoContainer: {
    width: 160,
    height: 160,
    borderRadius: 16,
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  photoEmoji: {
    fontSize: 64,
  },
  content: {
    padding: 20,
    gap: 24,
  },
  basicInfo: {
    gap: 8,
  },
  breed: {
    fontSize: 16,
    opacity: 0.7,
  },
  location: {
    fontSize: 14,
    opacity: 0.6,
  },
  quickInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    borderRadius: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  infoItem: {
    alignItems: 'center',
    gap: 4,
  },
  infoLabel: {
    fontSize: 12,
    opacity: 0.6,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  section: {
    gap: 12,
  },
  sectionTitle: {
    fontSize: 18,
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 24,
    opacity: 0.8,
  },
  personalityTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  personalityTag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: 'rgba(52, 199, 89, 0.1)',
  },
  personalityText: {
    fontSize: 14,
    color: '#34C759',
    fontWeight: 'bold',
  },
  adoptButton: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#FF3B30',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  adoptButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
