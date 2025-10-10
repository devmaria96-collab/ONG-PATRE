import { StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function DonateScreen() {
  const pixKey = 'ong.animais@email.com';

  const handleCopyPix = () => {
    Alert.alert(
      '📋 Chave PIX',
      `Chave copiada:\n${pixKey}\n\nCole no seu app de pagamento para fazer a doação.`,
      [{ text: 'OK' }]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Doações</ThemedText>
        <ThemedText type="subtitle">Sua ajuda faz a diferença na vida dos animais</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.content}>
        <ThemedView style={styles.section}>
          <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>PIX</ThemedText>
          
          <ThemedView style={styles.qrCodeContainer}>
            <ThemedView style={styles.qrCode}>
              <ThemedText style={styles.qrCodeText}>QR CODE</ThemedText>
              <ThemedText style={styles.qrCodeSubtext}>Escaneie para doar</ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={styles.pixContainer}>
            <ThemedText style={styles.pixLabel}>Chave PIX:</ThemedText>
            <ThemedText type="defaultSemiBold" style={styles.pixKey}>
              ong.animais@email.com
            </ThemedText>
            <TouchableOpacity style={styles.copyButton} onPress={handleCopyPix}>
              <ThemedText style={styles.copyButtonText}>Copiar Chave</ThemedText>
            </TouchableOpacity>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>Transparência</ThemedText>
          <ThemedText style={styles.description}>
            Veja como suas doações estão sendo utilizadas:
          </ThemedText>
          <ThemedView style={styles.transparencyItem}>
            <ThemedView style={styles.transparencyRow}>
              <ThemedText style={styles.transparencyEmoji}>🏥</ThemedText>
              <ThemedText style={styles.transparencyText}>Veterinário: 40%</ThemedText>
            </ThemedView>
            <ThemedView style={styles.transparencyRow}>
              <ThemedText style={styles.transparencyEmoji}>🍖</ThemedText>
              <ThemedText style={styles.transparencyText}>Alimentação: 35%</ThemedText>
            </ThemedView>
            <ThemedView style={styles.transparencyRow}>
              <ThemedText style={styles.transparencyEmoji}>🏠</ThemedText>
              <ThemedText style={styles.transparencyText}>Abrigo: 15%</ThemedText>
            </ThemedView>
            <ThemedView style={styles.transparencyRow}>
              <ThemedText style={styles.transparencyEmoji}>📋</ThemedText>
              <ThemedText style={styles.transparencyText}>Administrativo: 10%</ThemedText>
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
  header: {
    padding: 20,
    paddingTop: 60,
  },
  content: {
    padding: 20,
    gap: 32,
  },
  section: {
    gap: 16,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 8,
  },
  qrCodeContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  qrCode: {
    width: 200,
    height: 200,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  qrCodeText: {
    fontSize: 24,
    fontWeight: 'bold',
    opacity: 0.3,
  },
  qrCodeSubtext: {
    fontSize: 12,
    opacity: 0.3,
  },
  pixContainer: {
    padding: 20,
    borderRadius: 12,
    backgroundColor: 'rgba(52, 199, 89, 0.1)',
    gap: 12,
    alignItems: 'center',
  },
  pixLabel: {
    fontSize: 14,
    opacity: 0.7,
  },
  pixKey: {
    fontSize: 16,
    textAlign: 'center',
  },
  copyButton: {
    padding: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    backgroundColor: '#34C759',
    marginTop: 8,
  },
  copyButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  description: {
    opacity: 0.8,
    lineHeight: 20,
  },
  transparencyItem: {
    padding: 20,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 149, 0, 0.1)',
    gap: 16,
  },
  transparencyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  transparencyEmoji: {
    fontSize: 24,
  },
  transparencyText: {
    fontSize: 16,
  },
});
