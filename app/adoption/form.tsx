import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import { ReactNode, useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

import { AppButton } from '@/components/ui/AppButton';
import { FormField } from '@/components/ui/FormField';
import { AppCard, PageHeader, ScreenContainer } from '@/components/ui/ScreenLayout';
import { Palette, Radius, Spacing } from '@/constants/Theme';
import { useThemeColor } from '@/hooks/useThemeColor';

const initialForm = {
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
};

export default function AdoptionFormScreen() {
  const { width } = useWindowDimensions();
  const [formData, setFormData] = useState(initialForm);
  const text = useThemeColor({}, 'text');
  const muted = useThemeColor({}, 'muted');
  const primary = useThemeColor({}, 'primary');
  const surfaceSoft = useThemeColor({}, 'surfaceSoft');
  const border = useThemeColor({}, 'border');
  const desktop = width >= 760;

  const setField = <K extends keyof typeof formData>(field: K, value: (typeof formData)[K]) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (!formData.agreeTerms) {
      Alert.alert('Erro', 'Você deve concordar com os termos de adoção.');
      return;
    }

    Alert.alert(
      'Sucesso!',
      'Seu pedido de adoção foi enviado com sucesso! Entraremos em contato em breve.',
      [{ text: 'OK', onPress: () => router.push('/(tabs)') }]
    );
  };

  return (
    <ScreenContainer maxWidth={940} keyboardShouldPersistTaps="handled">
      <PageHeader
        back
        eyebrow="Adoção responsável"
        title="Formulário de adoção"
        subtitle="Preencha os dados para adotar seu novo amigo."
      />

      <FormSection
        icon="person-outline"
        title="Dados pessoais"
        subtitle="Informações para entrarmos em contato com você."
        text={text}
        muted={muted}>
        <View style={[styles.fieldGrid, desktop && styles.fieldGridDesktop]}>
          <View style={styles.fullField}>
            <FormField
              label="Nome completo *"
              icon="person-outline"
              value={formData.name}
              onChangeText={(value) => setField('name', value)}
              placeholder="Digite seu nome completo"
              autoCapitalize="words"
            />
          </View>
          <View style={styles.halfField}>
            <FormField
              label="E-mail *"
              icon="mail-outline"
              value={formData.email}
              onChangeText={(value) => setField('email', value)}
              placeholder="Digite seu e-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.halfField}>
            <FormField
              label="Telefone *"
              icon="phone"
              value={formData.phone}
              onChangeText={(value) => setField('phone', value)}
              placeholder="(11) 99999-9999"
              keyboardType="phone-pad"
            />
          </View>
          <View style={styles.halfField}>
            <FormField
              label="CPF"
              icon="badge"
              value={formData.cpf}
              onChangeText={(value) => setField('cpf', value)}
              placeholder="000.000.000-00"
              keyboardType="numeric"
            />
          </View>
        </View>
      </FormSection>

      <FormSection
        icon="location-on"
        title="Endereço"
        subtitle="Conte onde será o novo lar do animal."
        text={text}
        muted={muted}>
        <View style={[styles.fieldGrid, desktop && styles.fieldGridDesktop]}>
          <View style={styles.fullField}>
            <FormField
              label="Endereço completo"
              icon="home"
              value={formData.address}
              onChangeText={(value) => setField('address', value)}
              placeholder="Rua, número, complemento"
            />
          </View>
          <View style={styles.halfField}>
            <FormField
              label="Cidade"
              value={formData.city}
              onChangeText={(value) => setField('city', value)}
              placeholder="Cidade"
            />
          </View>
          <View style={styles.quarterField}>
            <FormField
              label="Estado"
              value={formData.state}
              onChangeText={(value) => setField('state', value)}
              placeholder="SP"
              autoCapitalize="characters"
              maxLength={2}
            />
          </View>
          <View style={styles.quarterField}>
            <FormField
              label="CEP"
              value={formData.zipCode}
              onChangeText={(value) => setField('zipCode', value)}
              placeholder="00000-000"
              keyboardType="numeric"
            />
          </View>
        </View>
      </FormSection>

      <FormSection
        icon="cottage"
        title="Informações sobre moradia"
        subtitle="Ajude a equipe a entender o ambiente do animal."
        text={text}
        muted={muted}>
        <FormField
          label="Tipo de moradia"
          icon="apartment"
          value={formData.houseType}
          onChangeText={(value) => setField('houseType', value)}
          placeholder="Casa, apartamento, etc."
        />
        <View style={styles.checkList}>
          <Checkbox
            checked={formData.hasYard}
            label="Possui quintal ou área externa"
            onPress={() => setField('hasYard', !formData.hasYard)}
            primary={primary}
            border={border}
            text={text}
          />
          <Checkbox
            checked={formData.hasOtherPets}
            label="Possui outros animais de estimação"
            onPress={() => setField('hasOtherPets', !formData.hasOtherPets)}
            primary={primary}
            border={border}
            text={text}
          />
        </View>
      </FormSection>

      <FormSection
        icon="pets"
        title="Experiência com animais"
        subtitle="Compartilhe sua motivação e sua rotina."
        text={text}
        muted={muted}>
        <FormField
          label="Experiência anterior"
          value={formData.petExperience}
          onChangeText={(value) => setField('petExperience', value)}
          placeholder="Conte sobre sua experiência com animais de estimação"
          multiline
          numberOfLines={4}
          textAlignVertical="top"
          style={styles.textArea}
        />
        <FormField
          label="Por que deseja adotar?"
          value={formData.reason}
          onChangeText={(value) => setField('reason', value)}
          placeholder="Conte-nos o motivo da adoção"
          multiline
          numberOfLines={4}
          textAlignVertical="top"
          style={styles.textArea}
        />
        <FormField
          label="Disponibilidade"
          icon="schedule"
          value={formData.availability}
          onChangeText={(value) => setField('availability', value)}
          placeholder="Informe sua disponibilidade para entrevista e visita"
        />
      </FormSection>

      <FormSection
        icon="verified-user"
        title="Termos de adoção"
        subtitle="Leia os compromissos de uma adoção responsável."
        text={text}
        muted={muted}>
        <View style={[styles.termsBox, { backgroundColor: surfaceSoft, borderLeftColor: primary }]}>
          <Text style={[styles.termsText, { color: muted }]}>
            • Comprometo-me a cuidar do animal com amor e responsabilidade{'\n'}
            • Fornecerei alimentação adequada, cuidados veterinários e carinho{'\n'}
            • Não abandonarei o animal em hipótese alguma{'\n'}
            • Permitirei visitas da ONG para acompanhamento{'\n'}
            • Comunicarei qualquer problema ou necessidade de devolução
          </Text>
        </View>
        <Checkbox
          checked={formData.agreeTerms}
          label="Concordo com os termos de adoção *"
          onPress={() => setField('agreeTerms', !formData.agreeTerms)}
          primary={primary}
          border={border}
          text={text}
        />
      </FormSection>

      <AppButton label="Enviar pedido de adoção" icon="send" onPress={handleSubmit} />
    </ScreenContainer>
  );
}

function FormSection({
  icon,
  title,
  subtitle,
  text,
  muted,
  children,
}: {
  icon: keyof typeof MaterialIcons.glyphMap;
  title: string;
  subtitle: string;
  text: string;
  muted: string;
  children: ReactNode;
}) {
  return (
    <AppCard style={styles.section}>
      <View style={styles.sectionHeading}>
        <View style={styles.sectionIcon}>
          <MaterialIcons name={icon} size={23} color={Palette.forest} />
        </View>
        <View style={styles.sectionCopy}>
          <Text style={[styles.sectionTitle, { color: text }]}>{title}</Text>
          <Text style={[styles.sectionSubtitle, { color: muted }]}>{subtitle}</Text>
        </View>
      </View>
      {children}
    </AppCard>
  );
}

function Checkbox({
  checked,
  label,
  onPress,
  primary,
  border,
  text,
}: {
  checked: boolean;
  label: string;
  onPress: () => void;
  primary: string;
  border: string;
  text: string;
}) {
  return (
    <Pressable
      accessibilityRole="checkbox"
      accessibilityState={{ checked }}
      onPress={onPress}
      style={styles.checkboxRow}>
      <View
        style={[
          styles.checkbox,
          { borderColor: checked ? primary : border, backgroundColor: checked ? primary : 'transparent' },
        ]}>
        {checked && <MaterialIcons name="check" size={18} color={Palette.white} />}
      </View>
      <Text style={[styles.checkboxLabel, { color: text }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  section: { padding: Spacing.xl, gap: Spacing.xl },
  sectionHeading: { flexDirection: 'row', alignItems: 'flex-start', gap: Spacing.md },
  sectionIcon: {
    width: 44,
    height: 44,
    borderRadius: Radius.md,
    backgroundColor: Palette.sageLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionCopy: { flex: 1, gap: Spacing.xs },
  sectionTitle: { fontSize: 20, lineHeight: 25, fontWeight: '800' },
  sectionSubtitle: { fontSize: 14, lineHeight: 20 },
  fieldGrid: { gap: Spacing.lg },
  fieldGridDesktop: { flexDirection: 'row', flexWrap: 'wrap' },
  fullField: { width: '100%' },
  halfField: { flexGrow: 1, flexBasis: 300 },
  quarterField: { flexGrow: 1, flexBasis: 150 },
  textArea: { minHeight: 100, paddingTop: Spacing.md },
  checkList: { gap: Spacing.sm },
  checkboxRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md, minHeight: 44 },
  checkbox: {
    width: 25,
    height: 25,
    borderWidth: 2,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxLabel: { flex: 1, fontSize: 15, lineHeight: 21 },
  termsBox: { padding: Spacing.lg, borderRadius: Radius.md, borderLeftWidth: 4 },
  termsText: { fontSize: 14, lineHeight: 23 },
});
