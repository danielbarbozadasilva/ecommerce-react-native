import http from '../../config/http';

export const getProductsAction = async data => {
  try {
    const result = await http.get('/product', data);
    return result.data;
  } catch (error) {}
};
