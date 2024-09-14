import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Carousel from '../components/CarouselList'; 
import TabNavigator from '../navigation/TabNavigator';

const WellnessHub = () => {
  return (
    <View style={styles.container}>
      <View style={styles.featuredSection}>
        <Text style={styles.heading}>Featured Offers</Text>
        <View>
          <Carousel />
        </View>
      </View>
       <TabNavigator /> 
    </View>
  );
};

export default WellnessHub;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  featuredSection: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
