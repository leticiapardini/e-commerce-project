import { Router } from 'express';
import User from '../models/User';
import UsersRepository from '../repositories/usersRepository';

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

const repository = new UsersRepository();
//     listagem
userRoutes.get('/', (request, response) => {
  const useCase = new ListUsersUseCase(repository);
  const users = useCase.execute();
  return response.send(users);
});

//     pesquisa
userRoutes.get('/:id', (request, response) => {
  const { id } = request.params;
  const useCase = new GetUserUseCase(repository);
  const user = useCase.execute(id);

  if (!user) return response.status(404).send();

  return response.send(user);
});

//     cadastro
userRoutes.post('/', (request, response) => {
  const useCase = new CreateUserUseCase(repository);
  const user = useCase.execute(request.body as UserDto);
  return response.status(201).send(user);
});

//     edição
userRoutes.put('/:id', (request, response) => {
  const { id } = request.params;
  const { name, email, password } = request.body as User;
  const useCase = new UpdateUserUseCase(repository);
  const user = useCase.execute({
    id,
    name,
    email,
    password,
  });
  return response.send(user);
});

//      delete
userRoutes.delete('/:id', (request, response) => {
  const { id } = request.params;
  const useCase = new DeleteUserUseCase(repository);
  useCase.execute(id);
  return response.send({});
});

export default userRoutes;
