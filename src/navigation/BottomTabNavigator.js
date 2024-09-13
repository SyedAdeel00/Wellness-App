import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Discover from '../screens/DiscoverScreen';
import BenefitStackNavigator from './BenefitStackNavigator';
import Report from '../screens/ReportScreen';
import Track from '../screens/TrackScreen';
import More from '../screens/MoreScreen';
import { StyleSheet, View } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto'; 
import Octicons from 'react-native-vector-icons/Octicons'; 
import Foundation from 'react-native-vector-icons/Foundation'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        shifting={false}
        barStyle={styles.barStyle}
        activeColor="#0000FF" 
        inactiveColor="#555"  
        screenOptions={({ route }) => ({
          tabBarLabelStyle: styles.tabLabelStyle,
          tabBarIconStyle: styles.tabIconStyle,
          tabBarItemStyle: styles.tabItemStyle,
        })}
      >
        <Tab.Screen
          name="Discover"
          component={Discover}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Fontisto name="compass" size={24} color={focused ? '#FFFFFF' : color} />
            ),
            tabBarLabel: 'Discover',
          }}
        />
        <Tab.Screen
          name="Benefit"
          component={BenefitStackNavigator}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Octicons name="gift" size={24} color={focused ? '#FFFFFF' : color} />
            ),
            tabBarLabel: 'Benefit',
          }}
        />
        <Tab.Screen
          name="Report"
          component={Report}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Foundation name="plus" size={24} color={focused ? '#FFFFFF' : color} />
            ),
            tabBarLabel: 'Report',
          }}
        />
        <Tab.Screen
          name="Track"
          component={Track}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome name="line-chart" size={24} color={focused ? '#FFFFFF' : color} />
            ),
            tabBarLabel: 'Track',
          }}
        />
        <Tab.Screen
          name="More"
          component={More}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <MaterialIcons name="window" size={24} color={focused ? '#FFFFFF' : color} />
            ),
            tabBarLabel: 'More',
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
  },
  barStyle: {
    paddingBottom: 10,
    height: 100,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden', 
    position: 'absolute', 
    bottom: 0, 
    left: 0,
    right: 0,
  },
  tabItemStyle: {
    marginHorizontal: 10,
    borderRadius: 10,
  },
  tabLabelStyle: {
    fontSize: 15,
  },
  tabIconStyle: {
    padding: 10,
  },
});

export default BottomTabNavigator;
