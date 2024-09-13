import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Track = () => {
  return (
    <View style={styles.container}>
      <Text>Track Screen</Text>
    </View>
  );
};

export default Track;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
