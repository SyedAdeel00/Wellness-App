import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Fill1 from '../../assets/svg/Fill1';
import Fill2 from '../../assets/svg/Fill2';
import Discount from '../../assets/svg/Discount';

const items = [
  { id: 1, category: 'Diagnostics', name: 'Partner 1' },
  { id: 2, category: 'Diagnostics', name: 'Partner 2', },
  { id: 3, category: 'Diagnostics', name: 'Partner 3' },
  { id: 4, category: 'Diagnostics', name: 'Partner 4'},
  { id: 5, category: 'Wellness', name: 'Partner 5',},
  { id: 6, category: 'Wellness', name: 'Partner 6' },
  { id: 7, category: 'Wellness', name: 'Partner 7' },
  { id: 8, category: 'Pathology', name: 'Partner 8',},
  { id: 9, category: 'Pathology', name: 'Partner 9' },
  { id: 10, category: 'Pathology', name: 'Partner 10' },
];

const ItemView = ({ item, index }) => {
  // Choose the icon based on index
  const Icon = index % 2 === 0 ? Fill1 : Fill2;

  return (
    <View style={styles.itemContainer}>
      <View style={styles.iconContainer}>
        <Icon />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
        <View style={styles.discountTag}>
          <Discount />
        </View>
    </View>
  );
};

export const AllPartnersText = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {items.map((item, index) => (
        <ItemView key={item.id} item={item} index={index} />
      ))}
    </ScrollView>
  );
};

export const DiagnosticsText = () => {
  const diagnosticsItems = items.filter(item => item.category === 'Diagnostics');
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {diagnosticsItems.map((item, index) => (
        <ItemView key={item.id} item={item} index={index} />
      ))}
    </ScrollView>
  );
};

export const WellnessText = () => {
  const wellnessItems = items.filter(item => item.category === 'Wellness');
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {wellnessItems.map((item, index) => (
        <ItemView key={item.id} item={item} index={index} />
      ))}
    </ScrollView>
  );
};

export const PathologyText = () => {
  const pathologyItems = items.filter(item => item.category === 'Pathology');
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {pathologyItems.map((item, index) => (
        <ItemView key={item.id} item={item} index={index} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 12,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
    padding: 10,
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  iconContainer: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    width: '40%',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 16,
    paddingVertical: 10,
  },
  discountTag: {
    width: '30%',
    flexDirection:'column',
    // alignItems:'flex-start',
    // justifyContent:'flex-start',
    borderRadius: 5,
  },
});
