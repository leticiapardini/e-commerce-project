import { Repository } from 'typeorm';
import Product from '../../models/Product';
import ProductsRepository from '../../repositories/productsRepository';

export default class GetProductsUseCase {
  private _repository: Repository<Product>;
  constructor() {
    this._repository = ProductsRepository;
  }

  public async execute(id: string): Promise<Product | null> {
    return await this._repository.findOneBy({ id });
  }
}
