/**
 * @format
 */

// Support app navigation
import 'react-native-gesture-handler';

import {AppRegistry, SafeAreaView, StyleSheet} from 'react-native';
import Calculators from './modules/screens/Calculators';
import {name as appName} from './app.json';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FVM from './modules/screens/FVM';
import {Colors} from 'react-native/Libraries/NewAppScreen';

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
        <SafeAreaView style={styles.container}>
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
        </SafeAreaView>
      </PaperProvider>
  );
}

const styles = StyleSheet.create({
  // Make the container full height
  container: {flex: 1},

  scrollView: {
    backgroundColor: Colors.lighter,
    padding: 10,
    flexGrow: 1,
  },
  card: {
    marginBottom: 10,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    lineHeight: 50,
  },
});
AppRegistry.registerComponent(appName, () => Main);
