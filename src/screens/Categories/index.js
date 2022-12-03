import React, {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container, LoadingIcon, ListArea} from './styled';
import ItemCategory from '../../components/ItemCategory/index';
import {getCategoriesAction} from '../../store/category/category.action';

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

  return (
    <Container>
      {loading && <LoadingIcon size="large" color="#463f57" />}

      <ListArea>
        {categories?.map((item, k) => (
          <ItemCategory key={k} data={item} />
        ))}
      </ListArea>
    </Container>
  );
};

export default Categories;
