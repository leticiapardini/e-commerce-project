import { Router } from 'express';
import Product from '../models/Product';

const productsRoutes = Router();

// PRODUCTS (BOOKS)

/***********************
 *      DATA           *
 *                     *
 * id: string;         *
 * title: string       *
 * author: string      *
 * publisher: string   *
 * price: number       *
 * year: number        *
 **********************/

type ResponseError = {
  field: string;
  message: string;
};

let products: Product[] = [];

//     listagem
productsRoutes.get('/', (request, response) => {
  const { title } = request.query;

  let productsToFilter = products;

  if (title) {
    productsToFilter = products.filter((x) => x.title.toLowerCase().includes(title.toLowerCase()));
  }
  return response.send(productsToFilter);
});

//     pesquisa
productsRoutes.get('/:id', (request, response) => {
  const { id } = request.params;
  const product = products.find((x) => x.id === id);

  if (!product) return response.status(404).send();

  return response.send(product);
});

//     cadastro
productsRoutes.post('/', (request, response) => {
  try {
    const { title, author, publisher, price, year } = request.body as Product;

    const errors: ResponseError[] = [];

    if (!title) {
      errors.push({
        field: 'title',
        message: 'Title is required!',
      });
    }

    if (!author) {
      errors.push({
        field: 'author',
        message: 'Author is required!',
      });
    }

    if (!publisher) {
      errors.push({
        field: 'publisher',
        message: 'Publisher is required!',
      });
    }

    if (!price) {
      errors.push({
        field: 'price',
        message: 'Price is required!',
      });
    }

    if (errors.length > 0) {
      return response.status(400).send(errors);
    }

    const product = new Product(title, author, publisher, price, year);

    products.push(product);
    return response.status(201).send(product);
  } catch (err: any) {
    return response.send({
      message: err.message,
    });
  }
});

//       edição
productsRoutes.put('/:id', (request, response) => {
  try {
    const { id } = request.params;
    const { title, author, publisher, price, year } = request.body as Product;

    const errors: ResponseError[] = [];

    if (!title) {
      errors.push({
        field: 'title',
        message: 'Title is required!',
      });
    }

    if (!author) {
      errors.push({
        field: 'author',
        message: 'Author is required!',
      });
    }

    if (!publisher) {
      errors.push({
        field: 'publisher',
        message: 'Publisher is required!',
      });
    }

    if (!price) {
      errors.push({
        field: 'price',
        message: 'Price is required!',
      });
    }

    if (errors.length > 0) {
      return response.status(400).send(errors);
    }

    const productIndex = products.findIndex((x) => x.id === id);
    const product = new Product(title, author, publisher, price, year);
    product.id = id;

    products[productIndex] = product;
    return response.send(product);
  } catch (err: any) {
    return response.send({
      message: err.message,
    });
  }
});

//      delete
productsRoutes.delete('/:id', (request, response) => {
  const { id } = request.params;
  products = products.filter((x) => x.id !== id);
  return response.send({});
});
export default productsRoutes;
