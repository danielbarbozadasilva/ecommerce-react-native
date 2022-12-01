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
} from './styled';
import ItemProduct from '../../components/ListProdCategory/index';
import {getCategoryProductsAction} from '../../store/category/category.action';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../../assets/svg/back.svg';

const CategoriesProducts = props => {
  const products = useSelector(state => state.category.products);
  const loading = useSelector(state => state.category.loading);
  const {id, name} = props.route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const listProducts = React.useCallback(
    id => {
      dispatch(getCategoryProductsAction(id));
    },
    [dispatch],
  );

  useEffect(() => {
    listProducts(id);
  }, []);

  const handleBackButton = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <TabArea>
        <BackButton onPress={handleBackButton}>
          <BackIcon width="44" height="44" fill="#fff" />
        </BackButton>
        <HeaderText>{name}</HeaderText>
      </TabArea>
      <Scroller>
        {loading && <LoadingIcon size="large" color="#463f57" />}
        <ListArea>
          {products.map((item, k) => (
            <ItemProduct key={k} data={item} />
          ))}
        </ListArea>
      </Scroller>
    </Container>
  );
};

export default CategoriesProducts;
