import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { StyleSheet, Text, View } from 'react-native';

import { Palette, Radius, Spacing } from '@/constants/Theme';
import { useThemeColor } from '@/hooks/useThemeColor';

export function BrandMark({ compact = false }: { compact?: boolean }) {
  const primary = useThemeColor({}, 'primary');
  const muted = useThemeColor({}, 'muted');

  return (
    <View style={styles.row}>
      <View style={[styles.mark, compact && styles.markCompact]}>
        <MaterialIcons name="pets" size={compact ? 22 : 30} color={Palette.white} />
      </View>
      <View>
        <Text style={[styles.name, { color: primary }, compact && styles.nameCompact]}>PATRE</Text>
        {!compact && (
          <Text style={[styles.tagline, { color: muted }]}>Proteção e cuidado animal</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  mark: {
    width: 56,
    height: 56,
    borderRadius: Radius.lg,
    backgroundColor: Palette.forest,
    alignItems: 'center',
    justifyContent: 'center',
  },
  markCompact: {
    width: 42,
    height: 42,
    borderRadius: Radius.md,
  },
  name: {
    fontSize: 24,
    lineHeight: 26,
    fontWeight: '900',
    letterSpacing: 2,
  },
  nameCompact: {
    fontSize: 20,
  },
  tagline: {
    fontSize: 12,
    marginTop: 2,
  },
});
