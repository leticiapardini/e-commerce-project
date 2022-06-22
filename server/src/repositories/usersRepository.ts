import { AppDataSource as dataSource } from '../db/context';
import User from '../models/User';

const UsersRepository = dataSource.getRepository(User).extend({});

export default UsersRepository;
