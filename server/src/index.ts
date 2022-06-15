import express, { Request } from 'express';
import { v4 } from 'uuid';

const server = express();
server.use(express.json());

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

type Product = {
  id: string;
  title: string;
  author: string;
  publisher: string;
  price: number;
  year: number;
};

let users: User[] = [];
let products: Product[] = [];

// USERS

/********************
 *     DATA          *
 *                   *
 * id: string;       *
 * name: string      *
 * email: string     *
 * password: string  *
 *                   *
 ********************/

//     listagem
server.get('/users', (request, response) => {
  return response.send(users);
});

//     pesquisa
server.get('/users/:id', (request, response) => {
  const { id } = request.params;
  const user = users.find((x) => x.id === id);
  return response.send(user);
});

//     cadastro
server.post('/users', (request, response) => {
  const { name, email, password } = request.body as User;

  const id = v4();
  const user: User = {
    id,
    name,
    email,
    password,
  };

  users.push(user);

  return response.send({
    content: name,
  });
});

//     edição
server.put('/users/:id', (request, response) => {
  const { id } = request.params;
  const { name, email, password } = request.body as User;

  const userIndex = users.findIndex((x) => x.id === id);
  const user: User = {
    id,
    name,
    email,
    password,
  };
  users[userIndex] = {
    ...user,
  };
  return response.send(user);
});

//      delete
server.delete('/users/:id', (request, response) => {
  const { id } = request.params;
  users = users.filter((x) => x.id !== id);
  return response.send({});
});

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
server.get('/products', (request, response) => {
  return response.send(products);
});

//     pesquisa
server.get('/products/:id', (request, response) => {
  const { id } = request.params;
  const product = products.find((x) => x.id === id);
  return response.send(product);
});

//     cadastro
server.post('/products', (request, response) => {
  const { title, author, publisher, price, year } = request.body as Product;

  const id = v4();
  const product: Product = {
    id,
    title,
    author,
    publisher,
    price,
    year,
  };

  products.push(product);
  return response.send({
    content: title,
  });
});

//       edição
server.put('/products/:id', (request, response) => {
  const { id } = request.params;
  const { title, author, publisher, price, year } = request.body as Product;

  const productIndex = products.findIndex((x) => x.id === id);
  const product: Product = {
    id,
    title,
    author,
    publisher,
    price,
    year,
  };
  products[productIndex] = {
    ...product,
  };
  return response.send(product);
});

//      delete
server.delete('/products/:id', (request, response) => {
  const { id } = request.params;
  products = products.filter((x) => x.id !== id);
  return response.send({});
});

const PORT = 3333;
server.listen(PORT, () => console.log(`~*~ Server listening on PORT: ${PORT}. ~*~`));