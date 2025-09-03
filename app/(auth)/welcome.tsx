import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';

export default function WelcomeScreen() {
  const handleEnterPress = () => {
    router.push('/(tabs)');
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.content}>
        {/* Logo/Ícone */}
        <ThemedView style={styles.logoContainer}>
          <ThemedText style={styles.logoEmoji}>🐾</ThemedText>
        </ThemedView>
        
        {/* Nome do Local */}
        <ThemedText type="title" style={styles.title}>
          Patre
        </ThemedText>
        
        <ThemedText type="subtitle" style={styles.subtitle}>
          Conectando corações e patinhas
        </ThemedText>
        
        <ThemedText style={styles.description}>
          Encontre seu novo melhor amigo e dê uma segunda chance para animais que precisam de um lar cheio de amor.
        </ThemedText>
      </ThemedView>
      
      {/* Botão Entrar */}
      <ThemedView style={styles.buttonContainer}>
        <TouchableOpacity style={styles.enterButton} onPress={handleEnterPress}>
          <ThemedText style={styles.enterButtonText}>Entrar</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    paddingVertical: 60,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
  },
  logoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  logoEmoji: {
    fontSize: 48,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    opacity: 0.8,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.7,
    lineHeight: 24,
    paddingHorizontal: 16,
  },
  buttonContainer: {
    paddingBottom: 20,
  },
  enterButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#007AFF',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  enterButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
