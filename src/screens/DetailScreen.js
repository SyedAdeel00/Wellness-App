import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
