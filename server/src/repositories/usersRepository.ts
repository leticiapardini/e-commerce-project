import { AppDataSource  } from '../db/context';
import User from '../models/User';

const UsersRepository = AppDataSource.getRepository(User).extend({});

export default UsersRepository;
