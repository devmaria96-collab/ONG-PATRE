import { StyleSheet, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function EventsScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Eventos & Voluntariado</ThemedText>
        <ThemedText type="subtitle">Participe dos nossos mutirões e feiras de adoção</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.content}>
        <ThemedView style={styles.eventCard}>
          <ThemedText type="defaultSemiBold">Feira de Adoção - Shopping Center</ThemedText>
          <ThemedText>📅 15 de Janeiro, 2025</ThemedText>
          <ThemedText>🕐 09:00 - 17:00</ThemedText>
          <ThemedText>📍 Shopping Center Norte - Praça Central</ThemedText>
          <ThemedText style={styles.description}>
            Grande feira de adoção com mais de 50 animais disponíveis. Venha conhecer seu novo melhor amigo!
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.eventCard}>
          <ThemedText type="defaultSemiBold">Mutirão de Castração</ThemedText>
          <ThemedText>📅 22 de Janeiro, 2025</ThemedText>
          <ThemedText>🕐 08:00 - 16:00</ThemedText>
          <ThemedText>📍 Clínica Veterinária Amigos</ThemedText>
          <ThemedText style={styles.description}>
            Mutirão gratuito de castração para animais da comunidade. Vagas limitadas!
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.eventCard}>
          <ThemedText type="defaultSemiBold">Arrecadação de Ração</ThemedText>
          <ThemedText>📅 Todo sábado</ThemedText>
          <ThemedText>🕐 14:00 - 18:00</ThemedText>
          <ThemedText>📍 Parque da Cidade</ThemedText>
          <ThemedText style={styles.description}>
            Ajude-nos a arrecadar ração e medicamentos para os animais resgatados.
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </ScrollView>
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
  content: {
    padding: 20,
    gap: 16,
  },
  eventCard: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    gap: 8,
  },
  description: {
    marginTop: 8,
    opacity: 0.8,
  },
});
