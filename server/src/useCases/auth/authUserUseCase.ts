import { sign } from 'jsonwebtoken';
import { Repository } from 'typeorm';
import { JwtAssignKey } from '../../configs/auth.config';
import AuthDto from '../../dtos/authDto';
import User from '../../models/User';
import UsersRepository from '../../repositories/usersRepository';

const errorMessage = 'Usuário e/ou senha inválido(s)';

interface AuthResponse {
  user: User;
  jwt: string;
}

export default class AuthUserUseCase {
  private _repository: Repository<User>;

  constructor() {
    this._repository = UsersRepository;
  }

  public async execute({ email, password }: AuthDto): Promise<AuthResponse> {
    // buscar o usuário
    const user = await this._repository.findOne({
      where: {
        email,
      },
      relations: {
        role: true,
      },
    });

    if (!user) throw new Error(errorMessage);

    // validar a senha
    const isValid = user.password === password;

    if (!isValid) throw new Error(errorMessage);

    // gerar o JWT
    const jwt = sign({ id: user.id, role: user.role}, JwtAssignKey);

    delete user.password;

    return { user, jwt };
  }
}
