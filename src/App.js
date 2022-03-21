// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainPage from './Pages/MainPage/MainPage';
import ArtistDetailPage from './Pages/ArtistDetailPage/ArtistDetailPage';
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
          <Stack.Screen name="DetailScreen" component={ArtistDetailPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
