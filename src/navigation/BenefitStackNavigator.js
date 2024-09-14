import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BenefitScreen from '../screens/BenefitScreen';  // Correct import path
import WellnessHub from '../screens/WellnessHub';

const Stack = createStackNavigator();

const BenefitStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="BenefitScreen">
      <Stack.Screen 
        name="BenefitScreen" 
        component={BenefitScreen} 
        options={{ headerShown: false }}  
      />
      <Stack.Screen 
        name="WellnessHub" 
        component={WellnessHub} 
        // options={{ headerShown: false }}  
      />
    </Stack.Navigator>
  );
};

export default BenefitStackNavigator;
