import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const items = [
  { id: 1, category: 'Diagnostics', name: 'Partner 1' },
  { id: 2, category: 'Diagnostics', name: 'Partner 2' },
  { id: 3, category: 'Diagnostics', name: 'Partner 3' },
  { id: 4, category: 'Diagnostics', name: 'Partner 4' },
  { id: 5, category: 'Wellness', name: 'Partner 5' },
  { id: 6, category: 'Wellness', name: 'Partner 6' },
  { id: 7, category: 'Wellness', name: 'Partner 7' },
  { id: 8, category: 'Pathology', name: 'Partner 8' },
  { id: 9, category: 'Pathology', name: 'Partner 9' },
  { id: 10, category: 'Pathology', name: 'Partner 10' },
];

export const AllPartnersText = () => {
  return (
    <View style={styles.container}>
      {items.map((item) => (
        <Text key={item.id} style={styles.itemText}>{item.name}</Text>
      ))}
    </View>
  );
};

export const DiagnosticsText = () => {
  const diagnosticsItems = items.filter(item => item.category === 'Diagnostics');
  return (
    <View style={styles.container}>
      {diagnosticsItems.map((item) => (
        <Text key={item.id} style={styles.itemText}>{item.name}</Text>
      ))}
    </View>
  );
};

export const WellnessText = () => {
  const wellnessItems = items.filter(item => item.category === 'Wellness');
  return (
    <View style={styles.container}>
      {wellnessItems.map((item) => (
        <Text key={item.id} style={styles.itemText}>{item.name}</Text>
      ))}
    </View>
  );
};

export const PathologyText = () => {
  const pathologyItems = items.filter(item => item.category === 'Pathology');
  return (
    <View style={styles.container}>
      {pathologyItems.map((item) => (
        <Text key={item.id} style={styles.itemText}>{item.name}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  itemText: {
    fontSize: 16,
    paddingVertical: 10,
  },
});
