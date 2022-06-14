import { Router } from 'express';
import ProductDto from '../dtos/productDto';
import Product from '../models/Product';
import ProductsRepository from '../repositories/productsRepository';
import CreateProductsUseCase from '../useCases/products/createProduct';
import GetProductsUseCase from '../useCases/products/getProduct';

import ListProductsUseCase from '../useCases/products/listProducts';

//todas as rotas de users
const productsRoutes = Router();
const repository = new ProductsRepository();

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

//     listagem
productsRoutes.get('/', (request, response) => {
  const useCase = new ListProductsUseCase(repository);
  const products = useCase.execute();
  return response.send(products);
});

//     PESQUISA
productsRoutes.get('/:id', (request, response) => {
  const { id } = request.params;
  const useCase = new GetProductsUseCase(repository);
  const product = useCase.execute(id);

  if (!product) return response.status(404).send();

  return response.send(product);
});

//     CADASTRO
productsRoutes.post('/', (request, response) => {
  try {
    const useCase = new CreateProductsUseCase(repository);
    useCase.execute(request.body as ProductDto);

    const errors: ResponseError[] = [];

    return response.status(201).send(product);
  } catch (err: any) {
    return response.send({
      message: err.message,
    });
  }
});

//       EDIÇÃO
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

    // const productIndex = products.findIndex((x) => x.id === id);
    const product = new Product(title, author, publisher, price, year);
    product.id = id;

    repository.update(product);
    return response.send(product);
  } catch (err: any) {
    return response.send({
      message: err.message,
    });
  }
});

//      DELETE
productsRoutes.delete('/:id', (request, response) => {
  const { id } = request.params;
  repository.delete(id);
  return response.send({});
});

export default productsRoutes;
