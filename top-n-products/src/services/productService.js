import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/test';

const getProducts = async (filters) => {
  let query = '?';
  Object.keys(filters).forEach(key => {
    query += `${key}=${filters[key]}&`;
  });
  const response = await axios.get(`${BASE_URL}/products${query}`);
  return response.data;
};

const getProductById = async (id) => {
  const response = await axios.get(`${BASE_URL}/product/${id}`);
  return response.data;
};

export default {
  getProducts,
  getProductById
};
