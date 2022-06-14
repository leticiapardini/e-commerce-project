import ProductDto from '../../dtos/productDto';
import Product from '../../models/Product';
import ProductsRepository from '../../repositories/productsRepository';

export default class CreateProductsUseCase {
  private _repository: ProductsRepository;
  constructor(repository: ProductsRepository) {
    this._repository = repository;
  }

  public execute({ title, author, publisher, price, year }: Omit<ProductDto, 'id'>) : Product {
    if (!title) {
      errors.push({
        field: 'title',
        message: 'Title is required!',
      });
    }

    if (!author) {
      errors.push({
        field: 'author',
        message: 'Author is required!',
      });
    }

    if (!publisher) {
      errors.push({
        field: 'publisher',
        message: 'Publisher is required!',
      });
    }

    if (!price) {
      errors.push({
        field: 'price',
        message: 'Price is required!',
      });
    }

    if (errors.length > 0) {
      return response.status(400).send(errors);
    }

    const product = new Product({ author, price, publisher, title, year });

    this._repository.add(product);
    return product;
  }
}
