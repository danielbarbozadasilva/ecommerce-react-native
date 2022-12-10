import React from 'react';
import {Container, Area, InfoArea, AreaName, CategoryIcon} from './styled';
import {logoutAction} from '../../store/auth/auth.action';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import SolicitationIcon from '../../assets/svg/solicitation.svg';
import AccountIcon from '../../assets/svg/account.svg';
import PaperIcon from '../../assets/svg/paper.svg';
import StarIcon from '../../assets/svg/star.svg';
import AboutIcon from '../../assets/svg/about.svg';
import ExitIcon from '../../assets/svg/exit.svg';

const Perfil = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(logoutAction());
    navigation.navigate('SignIn');
  };

  const handleUpdateClick = () => {
    navigation.navigate('ClientUpdate');
  };

  return (
    <Container>
      <Area>
        <CategoryIcon>
          <SolicitationIcon width="26" height="26" fill="#636262" />
        </CategoryIcon>
        <InfoArea>
          <AreaName>Pedidos</AreaName>
        </InfoArea>
      </Area>

      <Area onPress={handleUpdateClick}>
        <CategoryIcon>
          <AccountIcon width="26" height="26" fill="#636262" />
        </CategoryIcon>
        <InfoArea>
          <AreaName>Seus dados</AreaName>
        </InfoArea>
      </Area>

      <Area>
        <CategoryIcon>
          <PaperIcon width="26" height="26" fill="#636262" />
        </CategoryIcon>
        <InfoArea>
          <AreaName>Regulamentos</AreaName>
        </InfoArea>
      </Area>

      <Area>
        <CategoryIcon>
          <StarIcon width="26" height="26" fill="#636262" />
        </CategoryIcon>
        <InfoArea>
          <AreaName>Avalie nosso aplicativo</AreaName>
        </InfoArea>
      </Area>

      <Area>
        <CategoryIcon>
          <AboutIcon width="26" height="26" fill="#636262" />
        </CategoryIcon>
        <InfoArea>
          <AreaName>Sobre o aplicativo</AreaName>
        </InfoArea>
      </Area>

      <Area onPress={handleLogoutClick}>
        <CategoryIcon>
          <ExitIcon width="26" height="26" fill="#636262" />
        </CategoryIcon>
        <InfoArea>
          <AreaName>Sair</AreaName>
        </InfoArea>
      </Area>
    </Container>
  );
};
export default Perfil;
