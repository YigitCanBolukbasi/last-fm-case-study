// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainPage from './Pages/MainPage/MainPage';
import DetailPage from './Pages/DetailPage/DetailPage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={MainPage} />
        <Stack.Screen name="DetailScreen" component={DetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
