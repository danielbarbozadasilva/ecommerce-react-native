import React, {useState, useEffect} from 'react';
import {RefreshControl, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  Container,
  Scroller,
  SearchArea,
  SearchInput,
  SearchButton,
  ListArea,
  ContainerText,
} from './styled';
import ItemProduct from '../../components/ItemProduct/index';
import SearchIcon from '../../assets/svg/search.svg';
import {
  getProductsAction,
  getProductsSearchAction,
} from '../../store/product/product.action';

const Home = () => {
  const products = useSelector(state => state.product.all);
  const [refreshing, setRefreshing] = useState(false);
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();

  const searchProducts = React.useCallback(
    searchText => {
      if (searchText) {
        dispatch(getProductsSearchAction(searchText));
      } else {
        dispatch(getProductsAction());
      }
    },
    [dispatch],
  );

  useEffect(() => {
    searchProducts(searchText);
  }, [searchText]);

  const onRefresh = () => {
    setRefreshing(false);
    searchProducts();
    setSearchText('');
  };

  return (
    <Container>
      <Scroller
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <SearchArea>
          <SearchInput
            placeholder="Buscar..."
            placeholderTextColor="#FFFFFF"
            value={searchText}
            onChangeText={t => setSearchText(t)}
          />
          <SearchButton>
            <SearchIcon width="26" height="26" fill="#FFFFFF" />
          </SearchButton>
        </SearchArea>

        {products.length === 0 ? (
          <ContainerText>
            <Text>Nenhum produto disponível.</Text>
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

export default Home;
