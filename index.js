/**
 * @format
 */

// Support app navigation
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import Calculators from './modules/screens/Calculators';
import {name as appName} from './app.json';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FVM from './modules/screens/FVM';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

const Stack = createStackNavigator();

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Calculators}>
          <Stack.Screen
            name="Calculators"
            component={Calculators}
            options={{title: 'Financial Calculators'}}
          />
          <Stack.Screen
            name="FVM"
            component={FVM}
            options={{title: 'Future Value of Money'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
