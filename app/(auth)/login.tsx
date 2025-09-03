import { StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';
import { useState } from 'react';

export default function LoginScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = () => {
    if (!formData.email || !formData.password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (!isLogin) {
      if (!formData.name) {
        Alert.alert('Erro', 'Por favor, preencha seu nome.');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        Alert.alert('Erro', 'As senhas não coincidem.');
        return;
      }
    }

    // Simular login/cadastro
    setTimeout(() => {
      Alert.alert(
        'Bem-vindo ao PATRE!',
        isLogin ? 'Login realizado com sucesso!' : 'Cadastro realizado com sucesso! Agora você faz parte da nossa família.',
        [
          {
            text: 'Começar',
            onPress: () => router.push('/(tabs)')
          }
        ]
      );
    }, 1000);
  };

  const handleSocialLogin = (provider: string) => {
    Alert.alert(
      'Login Social',
      `Login com ${provider} será implementado em breve!`,
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
        <ThemedView style={styles.logoContainer}>
          <ThemedText style={styles.logoIcon}>🐾</ThemedText>
        </ThemedView>
        <ThemedText type="title" style={styles.brandName}>PATRE</ThemedText>
        <ThemedText style={styles.tagline}>Proteção Animal & Resgate</ThemedText>
        <ThemedText style={styles.subtitle}>
          Conectando corações e transformando vidas desde 2015
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.content}>
        <ThemedView style={styles.welcomeMessage}>
          <ThemedText style={styles.welcomeText}>
            {isLogin ? 'Bem-vindo de volta!' : 'Junte-se à nossa missão!'}
          </ThemedText>
          <ThemedText style={styles.welcomeSubtext}>
            {isLogin 
              ? 'Entre na sua conta para continuar ajudando os animais' 
              : 'Cadastre-se e faça parte da família PATRE'
            }
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, isLogin && styles.activeTab]}
            onPress={() => setIsLogin(true)}
          >
            <ThemedText style={[styles.tabText, isLogin && styles.activeTabText]}>
              Entrar
            </ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, !isLogin && styles.activeTab]}
            onPress={() => setIsLogin(false)}
          >
            <ThemedText style={[styles.tabText, !isLogin && styles.activeTabText]}>
              Cadastrar
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>

        <ThemedView style={styles.form}>
          {!isLogin && (
            <ThemedView style={styles.inputGroup}>
              <ThemedText style={styles.label}>Nome Completo</ThemedText>
              <TextInput
                style={styles.input}
                value={formData.name}
                onChangeText={(text) => setFormData({...formData, name: text})}
                placeholder="Como você gostaria de ser chamado?"
                autoCapitalize="words"
              />
            </ThemedView>
          )}

          <ThemedView style={styles.inputGroup}>
            <ThemedText style={styles.label}>E-mail</ThemedText>
            <TextInput
              style={styles.input}
              value={formData.email}
              onChangeText={(text) => setFormData({...formData, email: text})}
              placeholder="seu.email@exemplo.com"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </ThemedView>

          <ThemedView style={styles.inputGroup}>
            <ThemedText style={styles.label}>Senha</ThemedText>
            <TextInput
              style={styles.input}
              value={formData.password}
              onChangeText={(text) => setFormData({...formData, password: text})}
              placeholder="Mínimo 6 caracteres"
              secureTextEntry
            />
          </ThemedView>

          {!isLogin && (
            <ThemedView style={styles.inputGroup}>
              <ThemedText style={styles.label}>Confirmar Senha</ThemedText>
              <TextInput
                style={styles.input}
                value={formData.confirmPassword}
                onChangeText={(text) => setFormData({...formData, confirmPassword: text})}
                placeholder="Digite a senha novamente"
                secureTextEntry
              />
            </ThemedView>
          )}

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <ThemedText style={styles.submitButtonText}>
              {isLogin ? '🐕 Entrar no PATRE' : '❤️ Criar Conta no PATRE'}
            </ThemedText>
          </TouchableOpacity>

          {isLogin && (
            <TouchableOpacity style={styles.forgotPassword}>
              <ThemedText style={styles.forgotPasswordText}>
                Esqueceu sua senha?
              </ThemedText>
            </TouchableOpacity>
          )}
        </ThemedView>

        <ThemedView style={styles.divider}>
          <ThemedView style={styles.dividerLine} />
          <ThemedText style={styles.dividerText}>ou continue com</ThemedText>
          <ThemedView style={styles.dividerLine} />
        </ThemedView>

        <ThemedView style={styles.socialButtons}>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => handleSocialLogin('Google')}
          >
            <ThemedText style={styles.socialButtonText}>🔍 Google</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => handleSocialLogin('Apple')}
          >
            <ThemedText style={styles.socialButtonText}>🍎 Apple</ThemedText>
          </TouchableOpacity>
        </ThemedView>

        <ThemedView style={styles.footer}>
          <ThemedText style={styles.footerText}>
            Ao se cadastrar, você concorda em ajudar a transformar vidas e aceita nossos{' '}
            <ThemedText style={styles.link}>Termos de Uso</ThemedText> e{' '}
            <ThemedText style={styles.link}>Política de Privacidade</ThemedText>
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
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 40,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 122, 255, 0.05)',
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  logoIcon: {
    fontSize: 48,
    color: 'white',
  },
  brandName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 8,
    letterSpacing: 2,
  },
  tagline: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    opacity: 0.7,
    fontStyle: 'italic',
  },
  content: {
    paddingHorizontal: 20,
    gap: 24,
  },
  welcomeMessage: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  welcomeSubtext: {
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.7,
    lineHeight: 22,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 12,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#007AFF',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
  },
  activeTabText: {
    color: 'white',
    fontWeight: 'bold',
  },
  form: {
    gap: 16,
  },
  inputGroup: {
    gap: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
  },
  input: {
    borderWidth: 2,
    borderColor: 'rgba(0, 122, 255, 0.2)',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    backgroundColor: 'rgba(0, 122, 255, 0.05)',
  },
  submitButton: {
    backgroundColor: '#007AFF',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#007AFF',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  forgotPasswordText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '500',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  dividerText: {
    fontSize: 14,
    opacity: 0.6,
  },
  socialButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  socialButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  footer: {
    paddingVertical: 20,
    paddingBottom: 40,
  },
  footerText: {
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 18,
    opacity: 0.7,
  },
  link: {
    color: '#007AFF',
    fontWeight: '600',
  },
});
