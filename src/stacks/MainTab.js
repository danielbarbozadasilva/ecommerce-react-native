import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from '../components/CustomTabBar/index';
import Home from '../screens/Home/index';
import Categories from '../screens/Categories/index';
import Cart from '../screens/Cart/index';
import Favorites from '../screens/Favorites/index';
import Profile from '../screens/Profile/index';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Categorias" component={Categories} />
      <Tab.Screen name="Carrinho" component={Cart} />
      <Tab.Screen name="Favoritos" component={Favorites} />
      <Tab.Screen name="Perfil" component={Profile} />
    </Tab.Navigator>
  );
};

export default MainTab;
