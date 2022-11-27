import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Preload from '../screens/Preload/index';
import SignIn from '../screens/SignIn/index';
import SignUp from '../screens/SignUp/index';
import MainTab from '../stacks/MainTab';
import RecoveryPassword from '../screens/RecoveryPassword/index';
import SendToken from '../screens/SendToken/index';
import {NativeBaseProvider} from 'native-base';

const Stack = createStackNavigator();

const Stacks = () => {
  return (
    <NativeBaseProvider>
      <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SendToken" component={SendToken} />
        <Stack.Screen name="RecoveryPassword" component={RecoveryPassword} />
        <Stack.Screen name="MainTab" component={MainTab} />
      </Stack.Navigator>
    </NativeBaseProvider>
  );
};

export default Stacks;
