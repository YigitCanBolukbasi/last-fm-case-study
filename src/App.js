// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainPage from './Pages/MainPage/MainPage';
import ArtistDetailPage from './Pages/ArtistDetailPage/ArtistDetailPage';
import {ThemeProvider} from './Contexts/ThemeContext';
import ErrorBoundary from './Components/ErrorBoundary';
import * as Sentry from '@sentry/react-native';

import {QueryClient, QueryClientProvider} from 'react-query';

Sentry.init({
  dsn: 'https://7814c904f5b6472fbb489df9bc61c283@o1174049.ingest.sentry.io/6269742',

  tracesSampleRate: 1.0,
});

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
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
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
