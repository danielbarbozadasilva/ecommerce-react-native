import React, {useState, useEffect} from 'react';
import {RefreshControl} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  LoadingIcon,
  ListArea,
} from './styled';
import ItemProduct from '../../components/ItemProduct/index';
import SearchIcon from '../../assets/svg/search.svg';
import {getProductsAction} from '../../store/product/product.action';

const Home = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const listProducts = async () => {
    setLoading(true);
    setList([]);

    const result = await getProductsAction();
    if (result.data) {
      setList(result.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    listProducts();
  }, []);

  const onRefresh = () => {
    setRefreshing(false);
    listProducts();
  };

  return (
    <Container>
      <Scroller
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <HeaderArea>
          <HeaderTitle numberOfLines={2}>Buscar por produtos</HeaderTitle>
          <SearchButton onPress={() => navigation.navigate('Search')}>
            <SearchIcon width="26" height="26" fill="#463f57" />
          </SearchButton>
        </HeaderArea>

        {loading && <LoadingIcon size="large" color="#463f57" />}

        <ListArea>
          {list.map((item, k) => (
            <ItemProduct key={k} data={item} />
          ))}
        </ListArea>
      </Scroller>
    </Container>
  );
};

export default Home;
