import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Screens from './screens';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Screens.HomeScreen} />
        <Drawer.Screen name="Page One" component={Screens.PageOneScreen} />
        <Drawer.Screen name="Page Two" component={Screens.PageTwoScreen} />
        <Drawer.Screen name="Settings" component={Screens.SettingsScreen} />
        <Drawer.Screen name="Tabs Top" component={Screens.TabsTopScreen} />
        <Drawer.Screen
          name="Tabs Bottom"
          component={Screens.TabsBottomScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const AppWrapper = () => {
  return <App />;
};

export default AppWrapper;
