import FieldError from '../../dtos/fieldError';
import ProductDto from '../../dtos/productDto';
import FieldException from '../../exceptions/fieldExceptions';
import Product from '../../models/Product';
import ProductsRepository from '../../repositories/productsRepository';

export default class UpdateProductsUseCase {
  private _repository: ProductsRepository;
  constructor(repository: ProductsRepository) {
    this._repository = repository;
  }

  public execute({ id, title, author, publisher, price, year }: ProductDto) : Product {
    const errors: FieldError[] = [];

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
      throw new FieldException(errors);
    }

    const product = new Product({ author, price, publisher, title, year });
    product.id = id;

    this._repository.update(product);
    return product;
  }
}
