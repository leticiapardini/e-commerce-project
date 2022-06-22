import 'dotenv/config';
import 'express-async-errors';
import cors from 'cors';
import express from 'express';
import { errors } from 'celebrate';
import errorsMiddleware from './middlewares/errors';
import logMiddleware from './middlewares/logs';
import routes from './routes';
import { AppDataSource } from './db/context';
import Role from './models/Role';

const server = express();
server.use(cors());
server.use(express.json());
server.use(logMiddleware);
server.use(routes);
server.use(errors());
server.use(errorsMiddleware);

const PORT = 3333;
server.listen(PORT, () => console.log(`~*~ Server running on PORT: ${PORT}. ~*~`));

// SEED
AppDataSource.initialize().then((context) => {
  const adminRole = new Role();
  adminRole.id = '5be3f402-0c14-4ece-90a1-121bebae2a00';
  adminRole.name = 'Administrator';
  context.manager.save(adminRole);

  const regularUserRole = new Role();
  regularUserRole.id = 'c3d868d3-93a3-4f17-a6ed-93b18695f1f2';
  regularUserRole.name = 'Regular User';
  context.manager.save(regularUserRole);
});
