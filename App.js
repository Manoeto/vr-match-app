import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import LiveScreen from './screens/LiveScreen';
import VRScreen from './screens/VRScreen';
import StatsScreen from './screens/StatsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          headerShown: route.name !== 'Home',
          headerStyle: { backgroundColor: '#000' },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        })}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Live" component={LiveScreen} />
        <Stack.Screen name="VR" component={VRScreen} />
        <Stack.Screen name="Stats" component={StatsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
