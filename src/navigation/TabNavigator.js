import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AllPartnersText, DiagnosticsText, WellnessText, PathologyText } from '../components/ListComponent';
import AllPartner from '../../assets/svg/AllPartner';
import Diagnostics from '../../assets/svg/Diagnostics';
import Welness from '../../assets/svg/Welness';
import Pathology from '../../assets/svg/Pathology';

const Tab = createMaterialTopTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabWrapper}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.tabContainer}
        showsHorizontalScrollIndicator={false}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = route.name;

          const isFocused = state.index === index;
          const color = isFocused ? '#1F78F1' : '#A0A6B8';

          let IconComponent;
          if (route.name === 'AllPartners') {
            IconComponent = <AllPartner fill={color} />;
          } else if (route.name === 'Diagnostics') {
            IconComponent = <Diagnostics fill={color} />;
          } else if (route.name === 'Wellness') {
            IconComponent = <Welness fill={color} />;
          } else if (route.name === 'Pathology') {
            IconComponent = <Pathology fill={color} />;
          }

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              style={[
                styles.tabButton,
                {
                  backgroundColor: isFocused ? '#99b9f7' : '#fff',
                },
              ]}
            >
              <View style={styles.iconTextContainer}>
                {IconComponent}
                <Text style={[styles.tabText, { color }]}>{label}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name="AllPartners" component={AllPartnersText} />
      <Tab.Screen name="Diagnostics" component={DiagnosticsText} />
      <Tab.Screen name="Wellness" component={WellnessText} />
      <Tab.Screen name="Pathology" component={PathologyText} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabWrapper: {
    height: 60, 
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent:'center',
    backgroundColor:'#e8e9eb',
  },
  tabButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 5,
    borderRadius: 15,
    height: 30, 
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
    marginLeft: 8,
  },
});

export default TabNavigator;
