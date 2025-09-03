import { StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';

// Dados mockados dos animais
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
    description: 'Luna é uma cadela muito carinhosa e brincalhona.',
    location: 'São Paulo, SP',
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
    description: 'Mimi é uma gatinha dócil e independente.',
    location: 'São Paulo, SP',
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
    description: 'Thor é um cão protetor e leal.',
    location: 'São Paulo, SP',
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
    description: 'Bella é muito amigável e adora crianças.',
    location: 'São Paulo, SP',
  },
];

export default function HomeScreen() {
  const handleAnimalPress = (animalId: string) => {
    router.push(`/animal/${animalId}` as any);
  };

  const renderAnimalCard = ({ item }: { item: typeof animals[0] }) => (
    <TouchableOpacity 
      style={styles.animalCard} 
      onPress={() => handleAnimalPress(item.id)}
    >
      <ThemedView style={styles.animalImage}>
        <ThemedText style={styles.animalEmoji}>{item.image}</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.animalInfo}>
        <ThemedText type="defaultSemiBold" style={styles.animalName}>{item.name}</ThemedText>
        <ThemedText style={styles.animalDetails}>{item.breed} • {item.age}</ThemedText>
        <ThemedText style={styles.animalDetails}>{item.size} • {item.gender}</ThemedText>
        <ThemedText style={styles.animalLocation}>📍 {item.location}</ThemedText>
        <ThemedText style={styles.animalDescription} numberOfLines={2}>
          {item.description}
        </ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.favoriteButton}>
        <ThemedText style={styles.favoriteIcon}>♡</ThemedText>
      </ThemedView>
    </TouchableOpacity>
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Animais para Adoção</ThemedText>
        <ThemedText type="subtitle">Encontre seu novo melhor amigo</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.filterContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
          <TouchableOpacity style={[styles.filterButton, styles.filterButtonActive]}>
            <ThemedText style={styles.filterTextActive}>Todos</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <ThemedText style={styles.filterText}>🐕 Cães</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <ThemedText style={styles.filterText}>🐱 Gatos</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <ThemedText style={styles.filterText}>Pequeno</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <ThemedText style={styles.filterText}>Grande</ThemedText>
          </TouchableOpacity>
        </ScrollView>
      </ThemedView>

      <FlatList
        data={animals}
        renderItem={renderAnimalCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.animalsList}
        showsVerticalScrollIndicator={false}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 60,
  },
  filterContainer: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  filterScroll: {
    flexGrow: 0,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    marginRight: 8,
  },
  filterButtonActive: {
    backgroundColor: '#007AFF',
  },
  filterText: {
    fontSize: 14,
  },
  filterTextActive: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
  animalsList: {
    padding: 20,
    gap: 16,
  },
  animalCard: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  animalImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  animalEmoji: {
    fontSize: 32,
  },
  animalInfo: {
    flex: 1,
    marginLeft: 16,
    gap: 4,
  },
  animalName: {
    fontSize: 18,
  },
  animalDetails: {
    fontSize: 14,
    opacity: 0.7,
  },
  animalLocation: {
    fontSize: 12,
    opacity: 0.6,
  },
  animalDescription: {
    fontSize: 14,
    marginTop: 4,
    opacity: 0.8,
  },
  favoriteButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 59, 48, 0.1)',
  },
  favoriteIcon: {
    fontSize: 18,
    color: '#FF3B30',
  },
});
