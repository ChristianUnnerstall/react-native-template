import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import PageOneScreen from './PageOneScreen';
import PageTwoScreen from './PageTwoScreen';
import SettingsScreen from './SettingsScreen';

const Tab = createMaterialTopTabNavigator();

const TabsTopScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Page One" component={PageOneScreen} />
      <Tab.Screen name="Page Two" component={PageTwoScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TabsTopScreen;
