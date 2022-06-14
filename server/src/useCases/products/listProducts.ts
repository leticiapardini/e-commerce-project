import Product from '../../models/Product';
import ProductsRepository from '../../repositories/productsRepository';

export default class ListProductsUseCase {
  private _repository: ProductsRepository;
  constructor(repository: ProductsRepository) {
    this._repository = repository;
  }

  public execute() : Product[] {
    return this._repository.list()
  }
}
