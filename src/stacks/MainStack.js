import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Preload from '../screens/Preload/index';
import SignIn from '../screens/SignIn/index';
import SignUp from '../screens/SignUp/index';

const Stack = createStackNavigator();

const Stacks = () => {
  return (
    <Stack.Navigator
      initialRouteName="Preload"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default Stacks;
