import cors from 'cors';
import express, { Request, Response } from 'express';
import { v4 } from 'uuid';

const server = express();
server.use(cors());
server.use(express.json());

async function logMiddleware(request: Request, response: Response, next: any){
  const {method, url} = request;
  const requestLabel = `${method} ${url}`;
  console.log(requestLabel);
  console.time();
  await next();
  console.timeEnd();
}

server.use(logMiddleware);

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

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

type ResponseError = {
  field: string;
  message: string;
}

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
  const { name } = request.query;
  let usersToFilter = users;

  if (name) {
    usersToFilter = users.filter(x => x.name.toLowerCase().includes(name.toLowerCase()))
  }  
  return response.send(usersToFilter);
});

//     pesquisa
server.get('/users/:id', (request, response) => {
  const { id } = request.params;
  const user = users.find((x) => x.id === id);

  if(!user) return response.status(404).send();
  return response.send(user);
});

//     cadastro
server.post('/users', (request, response) => {
  try {
  const { name, email, password } = request.body as User;

  const errors: ResponseError[] = [];

  if(!name){
    errors.push({
      field: "name",
      message: 'Name is required!'
    })
  };

  if(!email){
    errors.push({
      field: "email",
      message: 'E-mail is required!'
    })
  };
  
  if(!emailRegex.test(email)){
    errors.push({
      field: "email",
      message: 'E-mail is invalid!'
    })
  };

  const userByEmail = users.find(x => x.email.toLowerCase() === email.toLowerCase());
  if(userByEmail){
    errors.push({
      field: 'email',
      message: 'E-mail is already in use!'
    })
  };

  if(!password){
    errors.push({
      field: "password",
      message: 'Password is required!'
    })
  };

  if(errors.length > 0) {
    return response.status(400).send(errors);
  }

  const id = v4();
  const user: User = {
    id,
    name,
    email,
    password,
  };

  users.push(user);
  return response.status(201).send(user);}
  catch(err: any){
    return response.send({
      message: err.message,
    })
  }
});

//     edição
server.put('/users/:id', (request, response) => {
  
  try {
    const { id } = request.params;
    const { name, email, password } = request.body as User;
      
    const errors: ResponseError[] = [];
  
    if(!name){
      errors.push({
        field: "name",
        message: 'Name is required!'
      })
    };
  
    if(!email){
      errors.push({
        field: "email",
        message: 'E-mail is required!'
      })
    };
    
    if(!emailRegex.test(email)){
      errors.push({
        field: "email",
        message: 'E-mail is invalid!'
      })
    };
  
    const userByEmail = users.find(x => x.email.toLowerCase() === email.toLowerCase() && x.id.toLowerCase() !== id.toLowerCase());
    if(userByEmail){
      errors.push({
        field: 'email',
        message: 'E-mail is already in use!'
      })
    };
  
    if(!password){
      errors.push({
        field: "password",
        message: 'Password is required!'
      })
    };
  
    if(errors.length > 0) {
      return response.status(400).send(errors);
    };


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
} catch(err: any){
  return response.send({
    message: err.message
  });
}
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
