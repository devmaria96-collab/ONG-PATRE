import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ProfileScreen() {
  const user = {
    name: 'Maria Silva',
    email: 'maria.silva@email.com',
    phone: '(11) 99999-9999',
    adoptionRequests: 2,
    favorites: 5,
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedView style={styles.avatar}>
          <ThemedText style={styles.avatarText}>MS</ThemedText>
        </ThemedView>
        <ThemedText type="title">{user.name}</ThemedText>
        <ThemedText style={styles.email}>{user.email}</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.content}>
        <ThemedView style={styles.section}>
          <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>Minha Conta</ThemedText>
          
          <TouchableOpacity style={styles.menuItem}>
            <ThemedText>👤 Dados Pessoais</ThemedText>
            <ThemedText style={styles.arrow}>›</ThemedText>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <ThemedText>📱 Contato</ThemedText>
            <ThemedText style={styles.arrow}>›</ThemedText>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <ThemedText>🔒 Alterar Senha</ThemedText>
            <ThemedText style={styles.arrow}>›</ThemedText>
          </TouchableOpacity>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>Minhas Atividades</ThemedText>
          
          <TouchableOpacity style={styles.menuItem}>
            <ThemedView style={styles.menuItemContent}>
              <ThemedText>📋 Meus Pedidos de Adoção</ThemedText>
              <ThemedView style={styles.badge}>
                <ThemedText style={styles.badgeText}>{user.adoptionRequests}</ThemedText>
              </ThemedView>
            </ThemedView>
            <ThemedText style={styles.arrow}>›</ThemedText>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <ThemedView style={styles.menuItemContent}>
              <ThemedText>❤️ Animais Favoritos</ThemedText>
              <ThemedView style={styles.badge}>
                <ThemedText style={styles.badgeText}>{user.favorites}</ThemedText>
              </ThemedView>
            </ThemedView>
            <ThemedText style={styles.arrow}>›</ThemedText>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <ThemedText>🎫 Eventos Inscritos</ThemedText>
            <ThemedText style={styles.arrow}>›</ThemedText>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <ThemedText>💝 Histórico de Doações</ThemedText>
            <ThemedText style={styles.arrow}>›</ThemedText>
          </TouchableOpacity>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>Configurações</ThemedText>
          
          <TouchableOpacity style={styles.menuItem}>
            <ThemedText>🔔 Notificações</ThemedText>
            <ThemedText style={styles.arrow}>›</ThemedText>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <ThemedText>🌙 Tema Escuro</ThemedText>
            <ThemedText style={styles.arrow}>›</ThemedText>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <ThemedText>🌍 Idioma</ThemedText>
            <ThemedText style={styles.arrow}>›</ThemedText>
          </TouchableOpacity>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>Suporte</ThemedText>
          
          <TouchableOpacity style={styles.menuItem}>
            <ThemedText>❓ Central de Ajuda</ThemedText>
            <ThemedText style={styles.arrow}>›</ThemedText>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <ThemedText>📞 Fale Conosco</ThemedText>
            <ThemedText style={styles.arrow}>›</ThemedText>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <ThemedText>⭐ Avaliar App</ThemedText>
            <ThemedText style={styles.arrow}>›</ThemedText>
          </TouchableOpacity>
        </ThemedView>

        <TouchableOpacity style={styles.logoutButton}>
          <ThemedText style={styles.logoutText}>Sair da Conta</ThemedText>
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
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    opacity: 0.7,
  },
  content: {
    padding: 20,
    gap: 24,
  },
  section: {
    gap: 4,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 12,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    marginBottom: 8,
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  badge: {
    backgroundColor: '#FF3B30',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    minWidth: 24,
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  arrow: {
    fontSize: 18,
    opacity: 0.5,
  },
  logoutButton: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 59, 48, 0.1)',
    alignItems: 'center',
    marginTop: 20,
  },
  logoutText: {
    color: '#FF3B30',
    fontWeight: 'bold',
  },
});
