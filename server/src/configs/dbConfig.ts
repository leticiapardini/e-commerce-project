import { DataSource } from 'typeorm';
import Product from '../models/Product';
import Role from '../models/Role';
import User from '../models/User';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'LilasLivraria',
  synchronize: false,
  logging: true,
  entities: [User, Product, Role],
  subscribers: [],
  migrations: ['./src/migrations/*.ts'],
  migrationsTableName: "migrations",
});
