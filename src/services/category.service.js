import http from '../config/http';

export const getCategoriesService = () => http.get('/category');
export const getCategoryProductService = categoryid =>
  http.get(`/category/${categoryid}/products`);
