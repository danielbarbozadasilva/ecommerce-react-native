import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container, Scroller, ListArea, ContainerText} from './styled';
import ItemProduct from '../../components/ItemProduct/index';
import Loading from '../../components/Loading/index';
import {getClientLikeProductAction} from '../../store/client/client.action';
import {Text} from 'react-native';

const Favorites = () => {
  const products = useSelector(state => state.client.likes);
  const loading = useSelector(state => state.client.loading);
  const dispatch = useDispatch();

  const searchProducts = React.useCallback(() => {
    dispatch(getClientLikeProductAction());
  }, [dispatch]);

  useEffect(() => {
    searchProducts();
  }, []);

  if (loading) {
    <Loading />;
  }

  return (
    <Container>
      <Scroller>
        {!loading && products.length === 0 ? (
          <ListArea>
            {products?.map((item, k) => (
              <ItemProduct key={k} data={item} />
            ))}
          </ListArea>
        ) : (
          <ContainerText>
            <Text>As suas curtidas aparecem aqui.</Text>
          </ContainerText>
        )}
      </Scroller>
    </Container>
  );
};

export default Favorites;
