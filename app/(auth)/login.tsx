import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

import { AppButton } from '@/components/ui/AppButton';
import { BrandMark } from '@/components/ui/BrandMark';
import { FormField } from '@/components/ui/FormField';
import { AppCard, ScreenContainer } from '@/components/ui/ScreenLayout';
import { Palette, Radius, Spacing, Typography } from '@/constants/Theme';
import { useAuth } from '@/contexts/AuthContext';
import { useThemeColor } from '@/hooks/useThemeColor';

type FormErrors = Partial<Record<'name' | 'email' | 'password' | 'confirmPassword', string>>;

export default function LoginScreen() {
  const { width } = useWindowDimensions();
  const { signIn } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const text = useThemeColor({}, 'text');
  const muted = useThemeColor({}, 'muted');
  const primary = useThemeColor({}, 'primary');
  const surfaceSoft = useThemeColor({}, 'surfaceSoft');
  const border = useThemeColor({}, 'border');

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validate = () => {
    const nextErrors: FormErrors = {};
    const normalizedEmail = formData.email.trim();

    if (!normalizedEmail) nextErrors.email = 'Informe seu e-mail.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      nextErrors.email = 'Digite um e-mail válido.';
    }
    if (!formData.password) nextErrors.password = 'Informe sua senha.';

    if (!isLogin) {
      if (!formData.name.trim()) nextErrors.name = 'Informe seu nome completo.';
      if (!formData.confirmPassword) nextErrors.confirmPassword = 'Confirme sua senha.';
      else if (formData.password !== formData.confirmPassword) {
        nextErrors.confirmPassword = 'As senhas não coincidem.';
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const completeAuthentication = () => {
    // TODO: substituir a simulação pela autenticação real.
    signIn();
    router.replace('/(tabs)');
  };

  const handleSubmit = () => {
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      completeAuthentication();
    }, 700);
  };

  const handleSocialLogin = (provider: string) => {
    Alert.alert(
      'Login social simulado',
      `A integração com ${provider} será adicionada em breve. Você entrará no modo de demonstração.`,
      [{ text: 'Continuar', onPress: completeAuthentication }]
    );
  };

  const changeMode = (loginMode: boolean) => {
    setIsLogin(loginMode);
    setErrors({});
  };

  const desktop = width >= 900;

  return (
    <ScreenContainer
      maxWidth={1180}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={[styles.page, desktop && styles.pageDesktop]}>
      <View style={[styles.hero, desktop && styles.heroDesktop]}>
        <BrandMark />
        <View style={styles.heroCopy}>
          <Text style={styles.eyebrow}>Adoção responsável</Text>
          <Text style={[styles.heroTitle, { color: text }, desktop && styles.heroTitleDesktop]}>
            Conectando corações e transformando vidas.
          </Text>
          <Text style={[styles.heroText, { color: muted }]}>
            Entre para conhecer animais que esperam por um lar, acompanhar pedidos e apoiar a
            missão da PATRE.
          </Text>
        </View>
        <View style={styles.heroHighlights}>
          {[
            ['pets', 'Adoção com cuidado'],
            ['volunteer-activism', 'Rede de proteção'],
            ['verified', 'Acompanhamento responsável'],
          ].map(([icon, label]) => (
            <View key={label} style={styles.highlight}>
              <MaterialIcons name={icon as keyof typeof MaterialIcons.glyphMap} size={20} color={Palette.forest} />
              <Text style={styles.highlightText}>{label}</Text>
            </View>
          ))}
        </View>
      </View>

      <AppCard style={[styles.card, desktop && styles.cardDesktop]}>
        <View style={styles.heading}>
          <Text style={[styles.title, { color: text }]}>
            {isLogin ? 'Bem-vindo de volta' : 'Junte-se à nossa missão'}
          </Text>
          <Text style={[styles.subtitle, { color: muted }]}>
            {isLogin
              ? 'Acesse sua conta para continuar ajudando os animais.'
              : 'Crie sua conta e faça parte da família PATRE.'}
          </Text>
        </View>

        <View style={[styles.tabs, { backgroundColor: surfaceSoft }]}>
          {[
            { label: 'Entrar', value: true },
            { label: 'Cadastrar', value: false },
          ].map((tab) => {
            const active = isLogin === tab.value;
            return (
              <Pressable
                accessibilityRole="tab"
                accessibilityState={{ selected: active }}
                key={tab.label}
                onPress={() => changeMode(tab.value)}
                style={[styles.tab, active && { backgroundColor: primary }]}>
                <Text style={[styles.tabText, { color: active ? Palette.white : muted }]}>
                  {tab.label}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <View style={styles.form}>
          {!isLogin && (
            <FormField
              label="Nome completo"
              icon="person-outline"
              value={formData.name}
              onChangeText={(value) => updateField('name', value)}
              placeholder="Como você gostaria de ser chamado?"
              autoCapitalize="words"
              error={errors.name}
            />
          )}
          <FormField
            label="E-mail"
            icon="mail-outline"
            value={formData.email}
            onChangeText={(value) => updateField('email', value)}
            placeholder="seu.email@exemplo.com"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            error={errors.email}
          />
          <FormField
            label="Senha"
            icon="lock-outline"
            value={formData.password}
            onChangeText={(value) => updateField('password', value)}
            placeholder="Digite sua senha"
            passwordToggle
            error={errors.password}
          />
          {!isLogin && (
            <FormField
              label="Confirmar senha"
              icon="lock-outline"
              value={formData.confirmPassword}
              onChangeText={(value) => updateField('confirmPassword', value)}
              placeholder="Digite a senha novamente"
              passwordToggle
              error={errors.confirmPassword}
            />
          )}

          {isLogin && (
            <Pressable
              accessibilityRole="button"
              onPress={() =>
                Alert.alert(
                  'Recuperação de senha',
                  'Em breve enviaremos instruções de recuperação para o e-mail informado.'
                )
              }
              style={styles.forgot}>
              <Text style={[styles.link, { color: primary }]}>Esqueceu sua senha?</Text>
            </Pressable>
          )}

          <AppButton
            label={isLogin ? 'Entrar' : 'Criar conta'}
            icon={isLogin ? 'login' : 'person-add-alt-1'}
            onPress={handleSubmit}
            loading={loading}
          />
        </View>

        <View style={styles.divider}>
          <View style={[styles.line, { backgroundColor: border }]} />
          <Text style={[styles.dividerText, { color: muted }]}>ou continue com</Text>
          <View style={[styles.line, { backgroundColor: border }]} />
        </View>

        <View style={[styles.social, width < 430 && styles.socialMobile]}>
          <AppButton
            label="Google"
            icon="language"
            variant="secondary"
            onPress={() => handleSocialLogin('Google')}
            fullWidth={width < 430}
            style={width >= 430 ? styles.socialButton : undefined}
          />
          <AppButton
            label="Apple"
            icon="apple"
            variant="secondary"
            onPress={() => handleSocialLogin('Apple')}
            fullWidth={width < 430}
            style={width >= 430 ? styles.socialButton : undefined}
          />
        </View>

        <Text style={[styles.footer, { color: muted }]}>
          Ao se cadastrar, você concorda em ajudar a transformar vidas e aceita nossos Termos de
          Uso e Política de Privacidade.
        </Text>
      </AppCard>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  page: { flexGrow: 1, justifyContent: 'center', paddingVertical: Spacing.xl },
  pageDesktop: { flexDirection: 'row', alignItems: 'stretch', gap: Spacing.xxxl },
  hero: {
    flex: 1,
    minWidth: 0,
    justifyContent: 'center',
    gap: Spacing.xxl,
    padding: Spacing.lg,
  },
  heroDesktop: { padding: Spacing.xxl, maxWidth: 540 },
  heroCopy: { gap: Spacing.lg },
  eyebrow: {
    color: Palette.coral,
    fontSize: Typography.caption,
    fontWeight: '800',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  heroTitle: {
    fontSize: 34,
    lineHeight: 41,
    fontWeight: '900',
    letterSpacing: -1,
  },
  heroTitleDesktop: { fontSize: 48, lineHeight: 56 },
  heroText: { fontSize: Typography.body, lineHeight: 26, maxWidth: 500 },
  heroHighlights: { gap: Spacing.md },
  highlight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    padding: Spacing.md,
    borderRadius: Radius.md,
    backgroundColor: Palette.sageLight,
  },
  highlightText: { color: Palette.forestDark, fontWeight: '700', fontSize: 14 },
  card: { padding: Spacing.xl, gap: Spacing.xl, width: '100%' },
  cardDesktop: { flex: 1, maxWidth: 520, alignSelf: 'center', padding: Spacing.xxl },
  heading: { gap: Spacing.sm },
  title: { fontSize: 28, lineHeight: 34, fontWeight: '800' },
  subtitle: { fontSize: 15, lineHeight: 22 },
  tabs: { flexDirection: 'row', borderRadius: Radius.md, padding: Spacing.xs },
  tab: { flex: 1, minHeight: 44, alignItems: 'center', justifyContent: 'center', borderRadius: Radius.sm },
  tabText: { fontSize: 15, fontWeight: '800' },
  form: { gap: Spacing.lg },
  forgot: { alignSelf: 'flex-end', paddingVertical: Spacing.xs },
  link: { fontSize: 14, fontWeight: '700' },
  divider: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md },
  line: { flex: 1, height: 1 },
  dividerText: { fontSize: 13 },
  social: { flexDirection: 'row', gap: Spacing.md },
  socialMobile: { flexDirection: 'column' },
  socialButton: { flex: 1 },
  footer: { fontSize: 12, lineHeight: 18, textAlign: 'center' },
});
