import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const BenefitScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Benefit Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('DetailScreen')}
      />
    </View>
  );
};

export default BenefitScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
