import React, {useContext} from 'react';
import {UserContext} from '../../contexts/UserContext';
import HomeIcon from '../../assets/svg/home.svg';
import SearchIcon from '../../assets/svg/search.svg';
import FavoriteIcon from '../../assets/svg/favorite.svg';
import AccountIcon from '../../assets/svg/account.svg';
import {TabArea, TabItem, AvatarIcon} from './styled';

const CustomTabBar = ({state, navigation}) => {
  const {state: user} = useContext(UserContext);

  const goTo = screenName => {
    navigation.navigate(screenName);
  };

  return (
    <TabArea>
      <TabItem onPress={() => goTo('Home')}>
        <HomeIcon
          style={{opacity: state.index === 0 ? 1 : 0.5}}
          width="24"
          height="24"
          fill="#FFFFFF"
        />
      </TabItem>
      <TabItem onPress={() => goTo('Search')}>
        <SearchIcon
          style={{opacity: state.index === 1 ? 1 : 0.5}}
          width="24"
          height="24"
          fill="#FFFFFF"
        />
      </TabItem>
      <TabItem onPress={() => goTo('Favorites')}>
        <FavoriteIcon
          style={{opacity: state.index === 2 ? 1 : 0.5}}
          width="24"
          height="24"
          fill="#FFFFFF"
        />
      </TabItem>
      <TabItem onPress={() => goTo('Profile')}>
        {/* {user.avatar != '' ? (
          <AvatarIcon source={{uri: user.avatar}} />
        ) : ( */}
          <AccountIcon
            style={{opacity: state.index === 3 ? 1 : 0.5}}
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
