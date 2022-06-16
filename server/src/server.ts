import cors from 'cors';
import express from 'express';
import errorsMiddleware from './middlewares/errors';
import logMiddleware from './middlewares/logs';
import routes from './routes';
import { AppDataSource } from './configs/dbConfig';

AppDataSource.initialize().then().catch(err => console.log(err))

const server = express();
server.use(cors());
server.use(express.json());
server.use(logMiddleware);
server.use(routes);
server.use(errorsMiddleware);

const PORT = 3333;
server.listen(PORT, () => console.log(`~*~ Server running on PORT: ${PORT}. ~*~`));
