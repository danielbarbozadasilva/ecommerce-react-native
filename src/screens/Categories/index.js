import React, {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container, ContainerText, ListArea} from './styled';
import ItemCategory from '../../components/ItemCategory/index';
import {getCategoriesAction} from '../../store/category/category.action';
import {Text} from 'react-native';
import Loading from '../../components/Loading/index';

const Categories = () => {
  const categories = useSelector(state => state.category.all);
  const loading = useSelector(state => state.category.loading);
  const dispatch = useDispatch();

  const listCategories = useCallback(() => {
    dispatch(getCategoriesAction());
  }, [dispatch]);

  useEffect(() => {
    listCategories();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <Container>
      {!loading && categories.length === 0 ? (
        <ContainerText>
          <Text>Nenhuma categoria disponível.</Text>
        </ContainerText>
      ) : (
        <ListArea>
          {categories?.map((item, k) => (
            <ItemCategory key={k} data={item} />
          ))}
        </ListArea>
      )}
    </Container>
  );
};

export default Categories;
