import Product from '../../models/Product';
import ProductsRepository from '../../repositories/productsRepository';

export default class GetProductsUseCase {
  private _repository: ProductsRepository;
  constructor(repository: ProductsRepository) {
    this._repository = repository;
  }

  public execute(id: string) : Product | undefined {
    return this._repository.getById(id)
  }
}
