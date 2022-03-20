// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainPage from './Pages/MainPage/MainPage';
import DetailPage from './Pages/DetailPage/DetailPage';
import {ThemeProvider} from './Contexts/ThemeContext';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={MainPage}
            options={{headerShown: false}}
          />
          <Stack.Screen name="DetailScreen" component={DetailPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
