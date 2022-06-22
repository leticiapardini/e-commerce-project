import { AppDataSource as dataSource } from '../db/context';
import Product from '../models/Product';

const ProductsRepository = dataSource.getRepository(Product).extend({});
export default ProductsRepository;
