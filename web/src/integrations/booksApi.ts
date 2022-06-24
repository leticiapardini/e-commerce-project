import axios from 'axios';
import {api} from '../defaults/endpoint'

const bookApi = () => {
  const products = api.get('products');
  return products;
}

export {bookApi};
