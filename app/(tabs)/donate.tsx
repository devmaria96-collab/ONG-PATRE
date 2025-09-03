import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function DonateScreen() {
  const handleDonation = (amount: string) => {
    // Implementar lógica de doação
    console.log(`Doação de R$ ${amount}`);
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Doações</ThemedText>
        <ThemedText type="subtitle">Sua ajuda faz a diferença na vida dos animais</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.content}>
        <ThemedView style={styles.section}>
          <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>Valores Sugeridos</ThemedText>
          <ThemedView style={styles.donationGrid}>
            <TouchableOpacity style={styles.donationButton} onPress={() => handleDonation('10')}>
              <ThemedText style={styles.donationAmount}>R$ 10</ThemedText>
              <ThemedText style={styles.donationDescription}>1 kg de ração</ThemedText>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.donationButton} onPress={() => handleDonation('25')}>
              <ThemedText style={styles.donationAmount}>R$ 25</ThemedText>
              <ThemedText style={styles.donationDescription}>Medicamentos</ThemedText>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.donationButton} onPress={() => handleDonation('50')}>
              <ThemedText style={styles.donationAmount}>R$ 50</ThemedText>
              <ThemedText style={styles.donationDescription}>Consulta veterinária</ThemedText>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.donationButton} onPress={() => handleDonation('100')}>
              <ThemedText style={styles.donationAmount}>R$ 100</ThemedText>
              <ThemedText style={styles.donationDescription}>Castração</ThemedText>
            </TouchableOpacity>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>PIX</ThemedText>
          <ThemedView style={styles.pixContainer}>
            <ThemedText>Chave PIX: ong.animais@email.com</ThemedText>
            <TouchableOpacity style={styles.copyButton}>
              <ThemedText style={styles.copyButtonText}>Copiar Chave</ThemedText>
            </TouchableOpacity>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>Doação Recorrente</ThemedText>
          <ThemedText style={styles.description}>
            Torne-se um padrinho/madrinha e ajude mensalmente com qualquer valor.
          </ThemedText>
          <TouchableOpacity style={styles.recurringButton}>
            <ThemedText style={styles.recurringButtonText}>Configurar Doação Mensal</ThemedText>
          </TouchableOpacity>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>Transparência</ThemedText>
          <ThemedText style={styles.description}>
            Veja como suas doações estão sendo utilizadas:
          </ThemedText>
          <ThemedView style={styles.transparencyItem}>
            <ThemedText>🏥 Veterinário: 40%</ThemedText>
            <ThemedText>🍖 Alimentação: 35%</ThemedText>
            <ThemedText>🏠 Abrigo: 15%</ThemedText>
            <ThemedText>📋 Administrativo: 10%</ThemedText>
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
  header: {
    padding: 20,
    paddingTop: 60,
  },
  content: {
    padding: 20,
    gap: 24,
  },
  section: {
    gap: 12,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 8,
  },
  donationGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  donationButton: {
    flex: 1,
    minWidth: '45%',
    padding: 16,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 59, 48, 0.1)',
    alignItems: 'center',
    gap: 4,
  },
  donationAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF3B30',
  },
  donationDescription: {
    fontSize: 12,
    opacity: 0.8,
    textAlign: 'center',
  },
  pixContainer: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: 'rgba(52, 199, 89, 0.1)',
    gap: 12,
  },
  copyButton: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#34C759',
    alignItems: 'center',
  },
  copyButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  recurringButton: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    alignItems: 'center',
  },
  recurringButtonText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  description: {
    opacity: 0.8,
    lineHeight: 20,
  },
  transparencyItem: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 149, 0, 0.1)',
    gap: 8,
  },
});
