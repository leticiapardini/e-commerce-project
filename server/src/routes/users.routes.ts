import { Router } from 'express';
import User from '../models/User';
import UsersRepository from '../repositories/usersRepository';

import UserDto from '../dtos/userDto';
import FieldException from '../exceptions/fieldExceptions';
import CreateUserUseCase from '../useCases/users/createUser';
import GetUserUseCase from '../useCases/users/getUser';
import ListUsersUseCase from '../useCases/users/listUsers';
import UpdateUserUseCase from '../useCases/users/updateUser';
import { genericExceptionMessage } from '../utils/constants';
import DeleteUserUseCase from '../useCases/users/deleteUser';

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
  try {
    const useCase = new CreateUserUseCase(repository);
    const user = useCase.execute(request.body as UserDto);
    return response.status(201).send(user);
  } catch (err) {
    if (err instanceof FieldException) return response.send(err.errors).status(err.statusCode);

    return response.send({
      message: genericExceptionMessage,
    });
  }
});

//     edição
userRoutes.put('/:id', (request, response) => {
  try {
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
  } catch (err) {
    if (err instanceof FieldException) return response.send(err.errors).status(err.statusCode);

    return response.send({
      message: genericExceptionMessage,
    });
  }
});

//      delete
userRoutes.delete('/:id', (request, response) => {
  const { id } = request.params;
  const useCase = new DeleteUserUseCase(repository);
  useCase.execute(id);
  return response.send({});
});

export default userRoutes;
