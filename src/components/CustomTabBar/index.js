import React from 'react';
import HomeIcon from '../../assets/svg/home.svg';
import CategoriasIcon from '../../assets/svg/categories.svg';
import CarrinhoIcon from '../../assets/svg/cart.svg';
import FavoriteIcon from '../../assets/svg/favorite.svg';
import AccountIcon from '../../assets/svg/account.svg';
import {TabArea, TabItem, TabItemCenter} from './styled';

const CustomTabBar = ({state, navigation}) => {

  const goTo = screenName => {
    navigation.navigate(screenName);
  };

  return (
    <TabArea>
      <TabItem onPress={() => goTo('PrimeTech')}>
        <HomeIcon
          style={{opacity: state.index === 0 ? 1 : 0.5}}
          width="24"
          height="24"
          fill="#FFFFFF"
        />
      </TabItem>
      <TabItem onPress={() => goTo('Categorias')}>
        <CategoriasIcon
          style={{opacity: state.index === 1 ? 1 : 0.5}}
          width="24"
          height="24"
          fill="#FFFFFF"
        />
      </TabItem>
      <TabItemCenter onPress={() => goTo('Carrinho')}>
        <CarrinhoIcon width="32" height="32" fill="#463f57" />
      </TabItemCenter>
      <TabItem onPress={() => goTo('Favoritos')}>
        <FavoriteIcon
          style={{opacity: state.index === 3 ? 1 : 0.5}}
          width="24"
          height="24"
          fill="#FFFFFF"
        />
      </TabItem>
      <TabItem onPress={() => goTo('Perfil')}>
        {/* {user.avatar != '' ? (
          <AvatarIcon source={{uri: user.avatar}} />
        ) : ( */}
        <AccountIcon
          style={{opacity: state.index === 4 ? 1 : 0.5}}
          width="24"
          height="24"
          fill="#FFFFFF"
        />
        {/* )} */}
      </TabItem>
    </TabArea>
  );
};

export default CustomTabBar;
