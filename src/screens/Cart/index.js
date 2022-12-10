import {useNavigation} from '@react-navigation/native';
import React from 'react';
import IconLogo from '../../assets/svg/cart.svg';
import {
  Container,
  TitleText,
  SubTitleText,
  CustomButton,
  CustomButtonText,
} from './styled';

const Carrinho = () => {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate('Home');
  };

  return (
    <Container>
      <IconLogo width="70" height="70" fill="#636262" />
      <TitleText>Seu carrinho está vazio</TitleText>
      <SubTitleText>
        Adicione produtos clicando no botão "Adicionar ao carrinho" na página do
        produto.
      </SubTitleText>
      <CustomButton onPress={handleClick}>
        <CustomButtonText>Voltar para a página inicial</CustomButtonText>
      </CustomButton>
    </Container>
  );
};
export default Carrinho;
