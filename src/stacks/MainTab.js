import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from '../components/CustomTabBar/index';
import Home from '../screens/Home/index';
import Categorias from '../screens/Categories/index';
import Carrinho from '../screens/Cart/index';
import Favoritos from '../screens/Favorites/index';
import Perfil from '../screens/Profile/index';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Categorias" component={Categorias} />
      <Tab.Screen name="Carrinho" component={Carrinho} />
      <Tab.Screen name="Favoritos" component={Favoritos} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
};

export default MainTab;
