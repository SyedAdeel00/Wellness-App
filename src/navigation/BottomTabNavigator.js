import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Discover from '../screens/DiscoverScreen';
import BenefitStackNavigator from './BenefitStackNavigator';
import Report from '../screens/ReportScreen';
import Track from '../screens/TrackScreen';
import More from '../screens/MoreScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Benefit"
        component={BenefitStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Report"
        component={Report}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Track"
        component={Track}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
