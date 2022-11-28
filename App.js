import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';
import UserContextProvider from './src/contexts/UserContext';
import {Provider} from 'react-redux';
import store from './src/store/index';

const App = () => {
  const navTheme = {
    ...DefaultTheme,
    colors: {
      background: '#463f57',
      text: '#fff',
    },
  };
  return (
    <Provider store={store}>
      <UserContextProvider>
        <NavigationContainer theme={navTheme}>
          <MainStack />
        </NavigationContainer>
      </UserContextProvider>
    </Provider>
  );
};

export default App;
