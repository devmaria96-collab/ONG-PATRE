import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

import { AppButton } from '@/components/ui/AppButton';
import { AppCard, PageHeader, ScreenContainer } from '@/components/ui/ScreenLayout';
import { Palette, Radius, Spacing } from '@/constants/Theme';
import { useAuth } from '@/contexts/AuthContext';
import { useThemeColor } from '@/hooks/useThemeColor';

const sections = [
  {
    title: 'Minha conta',
    items: [
      { label: 'Dados Pessoais', icon: 'person-outline' },
      { label: 'Contato', icon: 'phone-iphone' },
      { label: 'Alterar Senha', icon: 'lock-outline' },
    ],
  },
  {
    title: 'Minhas atividades',
    items: [
      { label: 'Meus Pedidos de Adoção', icon: 'assignment', badge: 2 },
      { label: 'Animais Favoritos', icon: 'favorite-border', badge: 5 },
      { label: 'Eventos Inscritos', icon: 'confirmation-number' },
      { label: 'Histórico de Doações', icon: 'volunteer-activism' },
    ],
  },
  {
    title: 'Configurações',
    items: [
      { label: 'Notificações', icon: 'notifications-none' },
      { label: 'Tema Escuro', icon: 'dark-mode' },
      { label: 'Idioma', icon: 'language' },
    ],
  },
  {
    title: 'Suporte',
    items: [
      { label: 'Central de Ajuda', icon: 'help-outline' },
      { label: 'Fale Conosco', icon: 'support-agent' },
      { label: 'Avaliar App', icon: 'star-outline' },
    ],
  },
] as const;

export default function ProfileScreen() {
  const { width } = useWindowDimensions();
  const { signOut } = useAuth();
  const text = useThemeColor({}, 'text');
  const muted = useThemeColor({}, 'muted');
  const primary = useThemeColor({}, 'primary');
  const surfaceSoft = useThemeColor({}, 'surfaceSoft');
  const border = useThemeColor({}, 'border');
  const desktop = width >= 900;
  const user = {
    name: 'Maria Silva',
    email: 'maria.silva@email.com',
    phone: '(11) 99999-9999',
    adoptionRequests: 2,
    favorites: 5,
  };

  const handleLogout = () => {
    signOut();
    router.replace('/login');
  };

  return (
    <ScreenContainer>
      <PageHeader
        eyebrow="Área do usuário"
        title="Meu perfil"
        subtitle="Acompanhe sua conta, atividades e preferências."
      />

      <View style={[styles.layout, desktop && styles.layoutDesktop]}>
        <AppCard style={[styles.profileCard, desktop && styles.profileCardDesktop]}>
          <View style={[styles.avatar, { backgroundColor: primary }]}>
            <Text style={styles.avatarText}>MS</Text>
          </View>
          <View style={styles.userCopy}>
            <Text style={[styles.userName, { color: text }]}>{user.name}</Text>
            <Text style={[styles.userMeta, { color: muted }]}>{user.email}</Text>
            <Text style={[styles.userMeta, { color: muted }]}>{user.phone}</Text>
          </View>
          <View style={styles.stats}>
            <View style={styles.stat}>
              <Text style={[styles.statValue, { color: primary }]}>{user.adoptionRequests}</Text>
              <Text style={[styles.statLabel, { color: muted }]}>Pedidos</Text>
            </View>
            <View style={[styles.statDivider, { backgroundColor: border }]} />
            <View style={styles.stat}>
              <Text style={[styles.statValue, { color: primary }]}>{user.favorites}</Text>
              <Text style={[styles.statLabel, { color: muted }]}>Favoritos</Text>
            </View>
          </View>
          <AppButton label="Sair da conta" icon="logout" variant="ghost" onPress={handleLogout} />
        </AppCard>

        <View style={styles.sections}>
          {sections.map((section) => (
            <AppCard key={section.title} style={styles.section}>
              <Text style={[styles.sectionTitle, { color: text }]}>{section.title}</Text>
              <View style={styles.menu}>
                {section.items.map((item) => (
                  <Pressable
                    accessibilityRole="button"
                    key={item.label}
                    style={({ pressed }) => [
                      styles.menuItem,
                      { backgroundColor: surfaceSoft, opacity: pressed ? 0.75 : 1 },
                    ]}>
                    <View style={styles.itemMain}>
                      <View style={[styles.itemIcon, { backgroundColor: Palette.sageLight }]}>
                        <MaterialIcons
                          name={item.icon}
                          size={20}
                          color={Palette.forest}
                        />
                      </View>
                      <Text style={[styles.itemLabel, { color: text }]}>{item.label}</Text>
                      {'badge' in item && (
                        <View style={styles.badge}>
                          <Text style={styles.badgeText}>{item.badge}</Text>
                        </View>
                      )}
                    </View>
                    <MaterialIcons name="chevron-right" size={22} color={muted} />
                  </Pressable>
                ))}
              </View>
            </AppCard>
          ))}
        </View>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  layout: { gap: Spacing.xl },
  layoutDesktop: { flexDirection: 'row', alignItems: 'flex-start' },
  profileCard: { padding: Spacing.xl, alignItems: 'center', gap: Spacing.lg },
  profileCardDesktop: { width: 320 },
  avatar: { width: 84, height: 84, borderRadius: Radius.pill, alignItems: 'center', justifyContent: 'center' },
  avatarText: { color: Palette.white, fontSize: 25, fontWeight: '900' },
  userCopy: { alignItems: 'center', gap: Spacing.xs },
  userName: { fontSize: 23, fontWeight: '800' },
  userMeta: { fontSize: 14 },
  stats: { width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  stat: { flex: 1, alignItems: 'center', gap: 2 },
  statDivider: { width: 1, height: 38 },
  statValue: { fontSize: 22, fontWeight: '900' },
  statLabel: { fontSize: 12 },
  sections: { flex: 1, flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.xl },
  section: { width: '100%', padding: Spacing.xl, gap: Spacing.lg },
  sectionTitle: { fontSize: 18, fontWeight: '800' },
  menu: { gap: Spacing.sm },
  menuItem: {
    minHeight: 58,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: Radius.md,
    padding: Spacing.md,
    gap: Spacing.md,
  },
  itemMain: { flex: 1, flexDirection: 'row', alignItems: 'center', gap: Spacing.md },
  itemIcon: { width: 36, height: 36, borderRadius: Radius.sm, alignItems: 'center', justifyContent: 'center' },
  itemLabel: { flexShrink: 1, fontSize: 15, fontWeight: '600' },
  badge: {
    minWidth: 24,
    height: 24,
    borderRadius: Radius.pill,
    backgroundColor: Palette.coral,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.sm,
  },
  badgeText: { color: Palette.white, fontSize: 12, fontWeight: '900' },
});
