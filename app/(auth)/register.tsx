import { StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';
import { useState, useEffect } from 'react';
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

export default function RegisterScreen() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleRegister = () => {
    if (!formData.name || !formData.email || !formData.password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    if (formData.password.length < 6) {
      Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    // Simular cadastro
    setTimeout(() => {
      Alert.alert(
        'Bem-vindo ao PATRE!',
        'Cadastro realizado com sucesso! Agora você pode encontrar seu novo melhor amigo.',
        [
          {
            text: 'Começar',
            onPress: () => router.push('/(tabs)')
          }
        ]
      );
    }, 1000);
  };

  const handleGoogleLogin = () => {
    Alert.alert(
      'Login com Google',
      'Funcionalidade será implementada em breve!',
      [
        {
          text: 'OK',
          onPress: () => router.push('/(tabs)')
        }
      ]
    );
  };

  const handleLoginRedirect = () => {
    router.push('/(auth)/login');
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedView style={styles.logoContainer}>
          <ThemedText style={styles.logoIcon}>🐾</ThemedText>
        </ThemedView>
        <ThemedText type="title" style={styles.brandName}>PATRE</ThemedText>
        <ThemedText style={styles.subtitle}>
          Junte-se à nossa missão de conectar corações e transformar vidas
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.content}>
        <ThemedView style={styles.welcomeMessage}>
          <ThemedText style={styles.welcomeText}>
            Crie sua conta
          </ThemedText>
          <ThemedText style={styles.welcomeSubtext}>
            Cadastre-se para encontrar seu novo melhor amigo
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.form}>
          <ThemedView style={styles.inputGroup}>
            <ThemedText style={styles.label}>Nome</ThemedText>
            <TextInput
              style={styles.input}
              value={formData.name}
              onChangeText={(text) => setFormData({...formData, name: text})}
              placeholder="Seu nome completo"
              autoCapitalize="words"
            />
          </ThemedView>

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

          <TouchableOpacity style={styles.submitButton} onPress={handleRegister}>
            <ThemedText style={styles.submitButtonText}>
              ❤️ Criar Conta
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>

        <ThemedView style={styles.divider}>
          <ThemedView style={styles.dividerLine} />
          <ThemedText style={styles.dividerText}>ou</ThemedText>
          <ThemedView style={styles.dividerLine} />
        </ThemedView>

        <TouchableOpacity
          style={styles.googleButton}
          onPress={handleGoogleLogin}
        >
          <ThemedText style={styles.googleButtonText}>🔍 Entrar com Google</ThemedText>
        </TouchableOpacity>

        <ThemedView style={styles.loginRedirect}>
          <ThemedText style={styles.loginText}>
            Já tem uma conta?{' '}
          </ThemedText>
          <TouchableOpacity onPress={handleLoginRedirect}>
            <ThemedText style={styles.loginLink}>Entrar</ThemedText>
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
    marginBottom: 16,
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.7,
    lineHeight: 22,
    paddingHorizontal: 20,
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
    fontSize: 28,
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
  form: {
    gap: 20,
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
  googleButton: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
  },
  googleButtonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  loginRedirect: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },
  loginText: {
    fontSize: 16,
    opacity: 0.7,
  },
  loginLink: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
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
