import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container, Scroller, LoadingIcon, ListArea} from './styled';
import ItemProduct from '../../components/ItemProduct/index';
import {getClientLikeProductAction} from '../../store/client/client.action';

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

  return (
    <Container>
      <Scroller>
        {loading && !products ? (
          <LoadingIcon size="large" color="#463f57" />
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
