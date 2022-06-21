import { AppDataSource as dataSource } from '../configs/dbConfig';
import User from '../models/User';

const UsersRepository = dataSource.getRepository(User).extend({});

export default UsersRepository;
