import "express-async-errors";
import { Router } from 'express';
import User from '../models/User';

import UserDto from '../dtos/userDto';
import CreateUserUseCase from '../useCases/users/createUser';
import DeleteUserUseCase from '../useCases/users/deleteUser';
import GetUserUseCase from '../useCases/users/getUser';
import ListUsersUseCase from '../useCases/users/listUsers';
import UpdateUserUseCase from '../useCases/users/updateUser';

const userRoutes = Router();

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
userRoutes.get('/', async (request, response) => {
  const useCase = new ListUsersUseCase();
  const users = await useCase.execute();
  return response.send(users);
});

//     pesquisa
userRoutes.get('/:id', async (request, response) => {
  const { id } = request.params;
  const useCase = new GetUserUseCase();
  const user = await useCase.execute(id);

  if (!user) return response.status(404).send();

  return response.send(user);
});

//     cadastro
userRoutes.post('/', async (request, response) => {
  const useCase = new CreateUserUseCase();
  const user = await useCase.execute(request.body as UserDto);
  return response.status(201).send(user);
});

//     edição
userRoutes.put('/:id', async (request, response) => {
  const { id } = request.params;
  const { name, email, password } = request.body as User;
  const useCase = new UpdateUserUseCase();
  const user = await useCase.execute({
    id,
    name,
    email,
    password,
    roleId: ''
  });
  return response.send(user);
});

//      delete
userRoutes.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const useCase = new DeleteUserUseCase();
  await useCase.execute(id);
  return response.send({});
});

export default userRoutes;
