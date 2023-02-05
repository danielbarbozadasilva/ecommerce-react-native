import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import IconLogo from '../../assets/svg/cart.svg';
import {
  Container,
  ContainerCart,
  Scroller,
  ListArea,
  TitleText,
  SubTitleText,
  CustomButton,
  CustomButtonText,
  CustomButtonFinish,
  CustomButtonTextFinish,
} from './styled';
import ItemCart from '../../components/ItemCart/index';

const Cart = () => {
  const cart = useSelector(state => state.cart.all);
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate('PrimeTech');
  };

  const handleClickCheckout = () => {};

  return (
    <>
      {cart.length === 0 ? (
        <Container>
          <IconLogo width="70" height="70" fill="#636262" />
          <TitleText>Seu carrinho está vazio</TitleText>
          <SubTitleText>
            Adicione produtos clicando no botão "Adicionar ao carrinho" na
            página do produto.
          </SubTitleText>
          <CustomButton onPress={handleClick}>
            <CustomButtonText>Voltar para a página inicial</CustomButtonText>
          </CustomButton>
        </Container>
      ) : (
        <ContainerCart>
          <Scroller>
            <ListArea>
              {cart?.map((item, k) => (
                <ItemCart key={k} data={item} />
              ))}
            </ListArea>
            <CustomButtonFinish onPress={handleClickCheckout}>
              <CustomButtonTextFinish>Finalizar pedido</CustomButtonTextFinish>
            </CustomButtonFinish>
          </Scroller>
        </ContainerCart>
      )}
    </>
  );
};
export default Cart;
