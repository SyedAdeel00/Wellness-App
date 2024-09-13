import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Report = () => {
  return (
    <View style={styles.container}>
      <Text>Report Screen</Text>
    </View>
  );
};

export default Report;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
