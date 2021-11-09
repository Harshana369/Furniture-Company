import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();
import SignInScreen from './src/view/screens/SignInScreen';

import SignUpScreen from './src/view/screens/SignUpScreen';
import HomeScreen from './src/view/screens/HomeScreen';
import DetailsSceeen from './src/view/screens/DetailsScreen';



const App = () => {
  return (
    <NavigationContainer>
      {/* <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} /> */}
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="Sign" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsSceeen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
