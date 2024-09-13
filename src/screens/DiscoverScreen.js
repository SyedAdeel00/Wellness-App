import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Discover = () => {
  return (
    <View style={styles.container}>
      <Text>Discover Screen</Text>
    </View>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
