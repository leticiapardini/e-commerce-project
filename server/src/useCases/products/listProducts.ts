import { Repository } from 'typeorm';
import Product from '../../models/Product';
import ProductsRepository from '../../repositories/productsRepository';

export default class ListProductsUseCase {
  private _repository: Repository<Product>;
  constructor() {
    this._repository = ProductsRepository;
  }

  public async execute() : Promise<Product[]> {
    return await this._repository.find()
  }
}
