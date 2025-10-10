import { StyleSheet, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ExploreScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.content}>
        <ThemedView style={styles.header}>
          <ThemedText type="title" style={styles.title}>🐾 Quem Somos</ThemedText>
        </ThemedView>
        
        <ThemedView style={styles.card}>
          <ThemedText style={styles.description}>
            <ThemedText type="defaultSemiBold">Patre</ThemedText> é uma iniciativa sem fins lucrativos que{' '}
            <ThemedText type="defaultSemiBold">resgata, cuida e conecta cães e gatos a lares responsáveis</ThemedText>.
          </ThemedText>
          
          <ThemedText style={styles.description}>
            Trabalhamos com carinho, responsabilidade e transparência para oferecer a cada animal{' '}
            <ThemedText type="defaultSemiBold">segurança, saúde e uma segunda chance</ThemedText>.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.valuesSection}>
          <ThemedText type="subtitle" style={styles.valuesTitle}>Nossos Valores</ThemedText>
          
          <ThemedView style={styles.valueItem}>
            <ThemedText style={styles.valueEmoji}>❤️</ThemedText>
            <ThemedView style={styles.valueText}>
              <ThemedText type="defaultSemiBold">Amor e Respeito</ThemedText>
              <ThemedText style={styles.valueDescription}>
                Cada animal merece ser tratado com dignidade e carinho
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={styles.valueItem}>
            <ThemedText style={styles.valueEmoji}>🏥</ThemedText>
            <ThemedView style={styles.valueText}>
              <ThemedText type="defaultSemiBold">Cuidado Integral</ThemedText>
              <ThemedText style={styles.valueDescription}>
                Garantimos assistência veterinária e bem-estar para todos
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={styles.valueItem}>
            <ThemedText style={styles.valueEmoji}>🤝</ThemedText>
            <ThemedView style={styles.valueText}>
              <ThemedText type="defaultSemiBold">Adoção Responsável</ThemedText>
              <ThemedText style={styles.valueDescription}>
                Conectamos animais a famílias preparadas para cuidar deles
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={styles.valueItem}>
            <ThemedText style={styles.valueEmoji}>🌟</ThemedText>
            <ThemedView style={styles.valueText}>
              <ThemedText type="defaultSemiBold">Transparência</ThemedText>
              <ThemedText style={styles.valueDescription}>
                Mantemos clareza em todas as nossas ações e processos
              </ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingTop: 60,
  },
  header: {
    marginBottom: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'rgba(0, 122, 255, 0.08)',
    borderRadius: 16,
    padding: 20,
    gap: 16,
    marginBottom: 32,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
  },
  valuesSection: {
    gap: 16,
  },
  valuesTitle: {
    fontSize: 24,
    marginBottom: 8,
  },
  valueItem: {
    flexDirection: 'row',
    gap: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  valueEmoji: {
    fontSize: 32,
  },
  valueText: {
    flex: 1,
    gap: 4,
  },
  valueDescription: {
    opacity: 0.7,
    fontSize: 14,
  },
});
