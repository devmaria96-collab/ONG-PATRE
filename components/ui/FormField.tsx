import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { forwardRef, useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';

import { Radius, Spacing } from '@/constants/Theme';
import { useThemeColor } from '@/hooks/useThemeColor';

type FormFieldProps = TextInputProps & {
  label: string;
  error?: string;
  icon?: keyof typeof MaterialIcons.glyphMap;
  passwordToggle?: boolean;
};

export const FormField = forwardRef<TextInput, FormFieldProps>(function FormField(
  { label, error, icon, passwordToggle, secureTextEntry, style, onFocus, onBlur, ...props },
  ref
) {
  const [focused, setFocused] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const text = useThemeColor({}, 'text');
  const muted = useThemeColor({}, 'muted');
  const surface = useThemeColor({}, 'surface');
  const border = useThemeColor({}, 'border');
  const primary = useThemeColor({}, 'primary');
  const errorColor = useThemeColor({}, 'error');

  return (
    <View style={styles.group}>
      <Text style={[styles.label, { color: text }]}>{label}</Text>
      <View
        style={[
          styles.inputShell,
          {
            backgroundColor: surface,
            borderColor: error ? errorColor : focused ? primary : border,
          },
        ]}>
        {icon && <MaterialIcons name={icon} size={20} color={focused ? primary : muted} />}
        <TextInput
          ref={ref}
          {...props}
          secureTextEntry={passwordToggle ? !passwordVisible : secureTextEntry}
          placeholderTextColor={muted}
          selectionColor={primary}
          style={[styles.input, { color: text }, style]}
          onFocus={(event) => {
            setFocused(true);
            onFocus?.(event);
          }}
          onBlur={(event) => {
            setFocused(false);
            onBlur?.(event);
          }}
        />
        {passwordToggle && (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={passwordVisible ? 'Ocultar senha' : 'Mostrar senha'}
            hitSlop={10}
            onPress={() => setPasswordVisible((current) => !current)}
            style={styles.toggle}>
            <MaterialIcons
              name={passwordVisible ? 'visibility-off' : 'visibility'}
              size={21}
              color={muted}
            />
          </Pressable>
        )}
      </View>
      {error ? <Text style={[styles.error, { color: errorColor }]}>{error}</Text> : null}
    </View>
  );
});

const styles = StyleSheet.create({
  group: {
    gap: Spacing.sm,
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
  },
  inputShell: {
    minHeight: 52,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderRadius: Radius.md,
    paddingHorizontal: Spacing.lg,
    gap: Spacing.md,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: Spacing.md,
  },
  toggle: {
    padding: Spacing.xs,
  },
  error: {
    fontSize: 12,
    lineHeight: 16,
  },
});
