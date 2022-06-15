import { Router } from 'express';
import ProductDto from '../dtos/productDto';
import Product from '../models/Product';
import ProductsRepository from '../repositories/productsRepository';
import CreateProductsUseCase from '../useCases/products/createProduct';
import DeleteProductsUseCase from '../useCases/products/deleteProduct';
import GetProductsUseCase from '../useCases/products/getProduct';

import ListProductsUseCase from '../useCases/products/listProducts';
import UpdateProductsUseCase from '../useCases/products/updateProduct';

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

//     LISTAGEM
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
  const useCase = new CreateProductsUseCase(repository);
  const product = useCase.execute(request.body as ProductDto);

  return response.status(201).send(product);
});

//       EDIÇÃO
productsRoutes.put('/:id', (request, response) => {
  const { id } = request.params;
  const { title, author, publisher, price, year } = request.body as Product;
  const useCase = new UpdateProductsUseCase(repository);
  const product = useCase.execute({
    id,
    title,
    author,
    publisher,
    price,
    year,
  });
  return response.send(product);
});

//      DELETE
productsRoutes.delete('/:id', (request, response) => {
  const { id } = request.params;
  const useCase = new DeleteProductsUseCase(repository);
  useCase.execute(id);
  return response.send({});
});

export default productsRoutes;
