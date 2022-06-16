import { Router } from 'express';
import ProductDto from '../dtos/productDto';
import Product from '../models/Product';
import CreateProductsUseCase from '../useCases/products/createProduct';
import DeleteProductsUseCase from '../useCases/products/deleteProduct';
import GetProductsUseCase from '../useCases/products/getProduct';

import ListProductsUseCase from '../useCases/products/listProducts';
import UpdateProductsUseCase from '../useCases/products/updateProduct';

//todas as rotas de users
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
 * img: string         *
 **********************/

//     LISTAGEM
productsRoutes.get('/', async (request, response) => {
  const useCase = new ListProductsUseCase();
  const products = await useCase.execute();
  return response.send(products);
});

//     PESQUISA
productsRoutes.get('/:id', async (request, response) => {
  const { id } = request.params;
  const useCase = new GetProductsUseCase();
  const product = await useCase.execute(id);

  if (!product) return response.status(404).send();

  return response.send(product);
});

//     CADASTRO
productsRoutes.post('/', async (request, response) => {
  const useCase = new CreateProductsUseCase();
  const product = await useCase.execute(request.body as ProductDto);

  return response.status(201).send(product);
});

//       EDIÇÃO
productsRoutes.put('/:id', async (request, response) => {
  const { id } = request.params;
  const { title, author, publisher, price, year, img } = request.body as Product;
  const useCase = new UpdateProductsUseCase();
  const product = await useCase.execute({
    id,
    title,
    author,
    publisher,
    price,
    year,
    img,
  });
  return response.send(product);
});

//      DELETE
productsRoutes.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const useCase = new DeleteProductsUseCase();
  await useCase.execute(id);
  return response.send({});
});

export default productsRoutes;
