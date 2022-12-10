import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container, Scroller, ListArea, ContainerText} from './styled';
import ItemProduct from '../../components/ItemProduct/index';
import Loading from '../../components/Loading/index';
import {listLikeProductAction} from '../../store/client/client.action';
import {Text} from 'react-native';

const Favorites = () => {
  const products = useSelector(state => state.client.likes);
  const loading = useSelector(state => state.client.loading);
  const dispatch = useDispatch();

  const searchProducts = React.useCallback(() => {
    dispatch(listLikeProductAction());
  }, [dispatch]);

  useEffect(() => {
    searchProducts();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <Scroller>
        {products.length === 0 ? (
          <ContainerText>
            <Text>As suas curtidas aparecem aqui.</Text>
          </ContainerText>
        ) : (
          <ListArea>
            {products?.map((item, k) => (
              <ItemProduct key={k} data={item} />
            ))}
          </ListArea>
        )}
      </Scroller>
    </Container>
  );
};

export default Favorites;
