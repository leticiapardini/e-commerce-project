import { Router } from 'express';
import productsRoutes from './produtcs.routes';
import userRoutes from './users.routes';

// rotas da aplicação
const routes = Router();
routes.get('/', (request, response) => {
    return response.send('Bem-vinde à Lilás Livraria!')
});

//// rotas users
routes.use('/users', userRoutes);

//// rotas produtos
routes.use('/products', productsRoutes)

export default routes;
