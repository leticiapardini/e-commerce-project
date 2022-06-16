import { AppDataSource as dataSource } from '../configs/dbConfig';
import Product from '../models/Product';

const ProductsRepository = dataSource.getRepository(Product).extend({});
export default ProductsRepository;
