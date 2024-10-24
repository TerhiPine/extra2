import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import ExploreScreen from './ExploreScreen';
import SettingScreen from './SettingsScreen';  // Updated path to SettingScreen

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tab Navigation with Home and Settings tabs
const BottomTabStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
};

// Stack navigator for wrapping Bottom Tab navigator
const HomeScreenStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTabStack" component={BottomTabStack} />
    </Stack.Navigator>
  );
};

// Drawer navigator with the BottomTabStack inside it
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
        }}>
        <Drawer.Screen
          name="Home"
          component={HomeScreenStack}
          options={{
            drawerLabel: 'Home',
            title: 'Home Screen',
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={SettingScreen}
          options={{
            drawerLabel: 'Settings',
            title: 'Settings Screen',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
