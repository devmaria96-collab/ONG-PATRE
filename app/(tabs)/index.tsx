import { StyleSheet, ScrollView, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Image } from 'expo-image';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';
import { useState } from 'react';

// Dados mockados dos animais
const animals = [
  {
    id: '1',
    name: 'Luna',
    species: 'Cão',
    breed: 'SRD',
    age: '1 anos',
    size: 'Médio',
    gender: 'Fêmea',
    image: require('@/assets/images/luna.jpg'),
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
    image: require('@/assets/images/mimi.jpg'),
    description: 'Mimi é uma gatinha dócil e independente.',
    location: 'Taboão da Serra- SP',
  },
  {
    id: '3',
    name: 'Thor',
    species: 'Cão',
    breed: 'SRD',
    age: '3 anos',
    size: 'Grande',
    gender: 'Macho',
    image: require('@/assets/images/thor.jpg'),
    description: 'Thor é um cão protetor e leal.',
    location: 'São Paulo, SP',
  },
  {
    id: '4',
    name: 'Bella',
    species: 'Cão',
    breed: 'SRD',
    age: '4 anos',
    size: 'Grande',
    gender: 'Fêmea',
    image: require('@/assets/images/bela.jpg'),
    description: 'Bella é muito amigável e adora crianças.',
    location: 'São Paulo, SP',
  },
];

export default function HomeScreen() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const handleAnimalPress = (animalId: string) => {
    router.push(`/animal/${animalId}` as any);
  };

  const handleFavorite = (animalId: string, animalName: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(animalId)) {
      newFavorites.delete(animalId);
      Alert.alert('💔', `${animalName} removido dos favoritos`);
    } else {
      newFavorites.add(animalId);
      Alert.alert('❤️', `${animalName} adicionado aos favoritos!`);
    }
    setFavorites(newFavorites);
  };

  const renderAnimalCard = ({ item }: { item: typeof animals[0] }) => (
    <TouchableOpacity 
      style={styles.animalCard} 
      onPress={() => handleAnimalPress(item.id)}
    >
      <ThemedView style={styles.animalImage}>
        <Image 
          source={item.image} 
          style={styles.animalPhoto}
          contentFit="cover"
        />
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
      
      <TouchableOpacity 
        style={styles.favoriteButton}
        onPress={() => handleFavorite(item.id, item.name)}
      >
        <ThemedText style={styles.favoriteIcon}>
          {favorites.has(item.id) ? '♥' : '♡'}
        </ThemedText>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Animais para Adoção</ThemedText>
        <ThemedText type="subtitle">Encontre seu novo melhor amigo</ThemedText>
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
    paddingBottom: 10,
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
    overflow: 'hidden',
  },
  animalPhoto: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
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
