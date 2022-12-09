import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  Container,
  LoadingIcon,
  ListArea,
  Scroller,
  BackButton,
  TabArea,
  HeaderText,
  ContainerText,
} from './styled';
import ItemCategoryProduct from '../../components/ListProdCategory/index';
import {getCategoryProductsAction} from '../../store/category/category.action';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../../assets/svg/back.svg';
import {Text} from 'react-native';

const CategoriesProducts = props => {
  const products = useSelector(state => state.category.products);
  const loading = useSelector(state => state.category.loading);
  const {id, name} = props.route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getCategoryProductsAction(id));
  }, [dispatch]);

  return (
    <Container>
      <TabArea>
        <BackButton onPress={() => navigation.goBack()}>
          <BackIcon width="44" height="44" fill="#fff" />
        </BackButton>
        <HeaderText>{name}</HeaderText>
      </TabArea>
      <Scroller>
        {loading && <LoadingIcon size="large" color="#463f57" />}
        {products.length === 0 ? (
          <ContainerText>
            <Text>Nenhum produto cadastrado.</Text>
          </ContainerText>
        ) : (
          <ListArea>
            {products.map((item, k) => (
              <ItemCategoryProduct key={k} data={item} />
            ))}
          </ListArea>
        )}
      </Scroller>
    </Container>
  );
};

export default CategoriesProducts;
