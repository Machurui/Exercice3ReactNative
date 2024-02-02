/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Read from './Read';
import Create from './Create';
import Update from './Update';
import Delete from './Delete';

enableScreens();
const Tab = createBottomTabNavigator();

const App = () => (
  <SafeAreaProvider>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Read" component={Read} />
          <Tab.Screen name="Create" component={Create} />
          <Tab.Screen name="Update" component={Update} />
          <Tab.Screen name="Delete" component={Delete} />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  </SafeAreaProvider>
);

export default App