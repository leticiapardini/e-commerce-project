import ProductsRepository from '../../repositories/productsRepository';

export default class DeleteProductsUseCase {
  private _repository: ProductsRepository;

  constructor(repository: ProductsRepository) {
    this._repository = repository;
  }

  public execute(id: string): void {
    this._repository.delete(id);
  }
}
