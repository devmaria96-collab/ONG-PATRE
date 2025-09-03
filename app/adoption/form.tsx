import { StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';
import { useState } from 'react';

export default function AdoptionFormScreen() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cpf: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    houseType: '',
    hasYard: false,
    hasOtherPets: false,
    petExperience: '',
    reason: '',
    availability: '',
    agreeTerms: false,
  });

  const handleSubmit = () => {
    // Validação básica
    if (!formData.name || !formData.email || !formData.phone) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (!formData.agreeTerms) {
      Alert.alert('Erro', 'Você deve concordar com os termos de adoção.');
      return;
    }

    // Simular envio do formulário
    Alert.alert(
      'Sucesso!', 
      'Seu pedido de adoção foi enviado com sucesso! Entraremos em contato em breve.',
      [
        {
          text: 'OK',
          onPress: () => router.push('/(tabs)')
        }
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <ThemedText style={styles.backButtonText}>← Voltar</ThemedText>
        </TouchableOpacity>
        <ThemedText type="title">Formulário de Adoção</ThemedText>
        <ThemedText type="subtitle">Preencha os dados para adotar seu novo amigo</ThemedText>
      </ThemedView>

      <ThemedView style={styles.content}>
        <ThemedView style={styles.section}>
          <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>Dados Pessoais</ThemedText>
          
          <ThemedView style={styles.inputGroup}>
            <ThemedText style={styles.label}>Nome Completo *</ThemedText>
            <TextInput
              style={styles.input}
              value={formData.name}
              onChangeText={(text) => setFormData({...formData, name: text})}
              placeholder="Digite seu nome completo"
            />
          </ThemedView>

          <ThemedView style={styles.inputGroup}>
            <ThemedText style={styles.label}>E-mail *</ThemedText>
            <TextInput
              style={styles.input}
              value={formData.email}
              onChangeText={(text) => setFormData({...formData, email: text})}
              placeholder="Digite seu e-mail"
              keyboardType="email-address"
            />
          </ThemedView>

          <ThemedView style={styles.inputGroup}>
            <ThemedText style={styles.label}>Telefone *</ThemedText>
            <TextInput
              style={styles.input}
              value={formData.phone}
              onChangeText={(text) => setFormData({...formData, phone: text})}
              placeholder="(11) 99999-9999"
              keyboardType="phone-pad"
            />
          </ThemedView>

          <ThemedView style={styles.inputGroup}>
            <ThemedText style={styles.label}>CPF</ThemedText>
            <TextInput
              style={styles.input}
              value={formData.cpf}
              onChangeText={(text) => setFormData({...formData, cpf: text})}
              placeholder="000.000.000-00"
              keyboardType="numeric"
            />
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>Endereço</ThemedText>
          
          <ThemedView style={styles.inputGroup}>
            <ThemedText style={styles.label}>Endereço Completo</ThemedText>
            <TextInput
              style={styles.input}
              value={formData.address}
              onChangeText={(text) => setFormData({...formData, address: text})}
              placeholder="Rua, número, complemento"
            />
          </ThemedView>

          <ThemedView style={styles.row}>
            <ThemedView style={[styles.inputGroup, styles.flex1]}>
              <ThemedText style={styles.label}>Cidade</ThemedText>
              <TextInput
                style={styles.input}
                value={formData.city}
                onChangeText={(text) => setFormData({...formData, city: text})}
                placeholder="Cidade"
              />
            </ThemedView>

            <ThemedView style={[styles.inputGroup, styles.flex1]}>
              <ThemedText style={styles.label}>Estado</ThemedText>
              <TextInput
                style={styles.input}
                value={formData.state}
                onChangeText={(text) => setFormData({...formData, state: text})}
                placeholder="SP"
              />
            </ThemedView>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>Informações sobre Moradia</ThemedText>
          
          <ThemedView style={styles.inputGroup}>
            <ThemedText style={styles.label}>Tipo de Moradia</ThemedText>
            <TextInput
              style={styles.input}
              value={formData.houseType}
              onChangeText={(text) => setFormData({...formData, houseType: text})}
              placeholder="Casa, apartamento, etc."
            />
          </ThemedView>

          <TouchableOpacity 
            style={styles.checkboxRow}
            onPress={() => setFormData({...formData, hasYard: !formData.hasYard})}
          >
            <ThemedView style={[styles.checkbox, formData.hasYard && styles.checkboxChecked]}>
              {formData.hasYard && <ThemedText style={styles.checkmark}>✓</ThemedText>}
            </ThemedView>
            <ThemedText style={styles.checkboxLabel}>Possui quintal ou área externa</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.checkboxRow}
            onPress={() => setFormData({...formData, hasOtherPets: !formData.hasOtherPets})}
          >
            <ThemedView style={[styles.checkbox, formData.hasOtherPets && styles.checkboxChecked]}>
              {formData.hasOtherPets && <ThemedText style={styles.checkmark}>✓</ThemedText>}
            </ThemedView>
            <ThemedText style={styles.checkboxLabel}>Possui outros animais de estimação</ThemedText>
          </TouchableOpacity>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>Experiência com Animais</ThemedText>
          
          <ThemedView style={styles.inputGroup}>
            <ThemedText style={styles.label}>Experiência Anterior</ThemedText>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={formData.petExperience}
              onChangeText={(text) => setFormData({...formData, petExperience: text})}
              placeholder="Conte sobre sua experiência com animais de estimação"
              multiline
              numberOfLines={3}
            />
          </ThemedView>

          <ThemedView style={styles.inputGroup}>
            <ThemedText style={styles.label}>Por que deseja adotar?</ThemedText>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={formData.reason}
              onChangeText={(text) => setFormData({...formData, reason: text})}
              placeholder="Conte-nos o motivo da adoção"
              multiline
              numberOfLines={3}
            />
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>Termos de Adoção</ThemedText>
          
          <ThemedView style={styles.termsBox}>
            <ThemedText style={styles.termsText}>
              • Comprometo-me a cuidar do animal com amor e responsabilidade{'\n'}
              • Fornecerei alimentação adequada, cuidados veterinários e carinho{'\n'}
              • Não abandonarei o animal em hipótese alguma{'\n'}
              • Permitirei visitas da ONG para acompanhamento{'\n'}
              • Comunicarei qualquer problema ou necessidade de devolução
            </ThemedText>
          </ThemedView>

          <TouchableOpacity 
            style={styles.checkboxRow}
            onPress={() => setFormData({...formData, agreeTerms: !formData.agreeTerms})}
          >
            <ThemedView style={[styles.checkbox, formData.agreeTerms && styles.checkboxChecked]}>
              {formData.agreeTerms && <ThemedText style={styles.checkmark}>✓</ThemedText>}
            </ThemedView>
            <ThemedText style={styles.checkboxLabel}>Concordo com os termos de adoção *</ThemedText>
          </TouchableOpacity>
        </ThemedView>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <ThemedText style={styles.submitButtonText}>Enviar Pedido de Adoção</ThemedText>
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
    padding: 20,
    paddingTop: 60,
    gap: 8,
  },
  backButton: {
    alignSelf: 'flex-start',
    padding: 8,
    marginBottom: 8,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007AFF',
  },
  content: {
    padding: 20,
    gap: 24,
  },
  section: {
    gap: 16,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 8,
  },
  inputGroup: {
    gap: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  flex1: {
    flex: 1,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 8,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#007AFF',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#007AFF',
  },
  checkmark: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkboxLabel: {
    flex: 1,
    fontSize: 16,
  },
  termsBox: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(0, 122, 255, 0.05)',
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  termsText: {
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.8,
  },
  submitButton: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#34C759',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
