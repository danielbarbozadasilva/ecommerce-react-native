import http from '../config/http';

export const getProductsService = () => http.get('/product');
export const getProductByIdService = id => http.get(`/product/${id}`);
export const getProductsSearchService = name =>
  http.get(`/product/search/${name}`);
