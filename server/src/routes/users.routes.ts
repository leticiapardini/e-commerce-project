import { Router } from 'express';

import UserDto from '../dtos/userDto';
import { isAuthenticated } from '../middlewares/auth';
import CreateUserUseCase from '../useCases/users/createUser';
import DeleteUserUseCase from '../useCases/users/deleteUser';
import GetUserUseCase from '../useCases/users/getUser';
import ListUsersUseCase from '../useCases/users/listUsers';
import UpdateUserUseCase from '../useCases/users/updateUser';

const userRoutes = Router();

//     cadastro
userRoutes.post('/', async (request, response) => {
  console.log(request.user.id);
  const useCase = new CreateUserUseCase();
  const user = await useCase.execute(request.body as UserDto);
  delete user.password;

  return response.status(201).send(user);
});

userRoutes.use(isAuthenticated);

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
  let users = await useCase.execute();
  users = users.map((x) => {
    delete x.password;
    return x;
  });
  return response.send(users);
});

//     pesquisa
userRoutes.get('/:id', async (request, response) => {
  const { id } = request.params;
  const useCase = new GetUserUseCase();
  const user = await useCase.execute(id);

  if (!user) return response.status(404).send();

  delete user.password;
  return response.send(user);
});




//     edição
userRoutes.put('/:id', async (request, response) => {
  const { id } = request.params;
  const { name, email, roleId } = request.body as UserDto;
  const useCase = new UpdateUserUseCase();
  const user = await useCase.execute({
    id,
    name,
    email,
    roleId,
  });
  delete user.password;

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
