import { Repository } from 'typeorm';
import Product from '../../models/Product';
import ProductsRepository from '../../repositories/productsRepository';

export default class DeleteProductsUseCase {
  private _repository: Repository<Product>;

  constructor() {
    this._repository = ProductsRepository;
  }

  public async execute(id: string): Promise<void> {
    const product = await this._repository.findOneBy({
      id,
    });
    if (!product) return;
    await this._repository.remove(product);
  }
}
