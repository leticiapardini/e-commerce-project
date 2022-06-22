import { Repository } from 'typeorm';
import FieldError from '../../dtos/fieldError';
import ProductDto from '../../dtos/productDto';
import FieldException from '../../exceptions/fieldExceptions';
import Product from '../../models/Product';
import ProductsRepository from '../../repositories/productsRepository';

export default class UpdateProductsUseCase {
  private _repository: Repository<Product>;
  constructor() {
    this._repository = ProductsRepository;
  }

  public async execute({ id, title, author, publisher, price, year, img, qty }: ProductDto): Promise<Product | null> {
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

    if (!img) {
      errors.push({
        field: 'img',
        message: 'Image is required!',
      });
    }

    if (!qty) {
      errors.push({
        field: 'quantity',
        message: 'quantity is required',
      });
    }

    if (errors.length > 0) {
      throw new FieldException(errors);
    }

    const product = await this._repository.findOneBy({
      id,
    });
    if (!product) return null;
    product.title = title;
    product.author = author;
    product.publisher = publisher;
    product.price = price;
    product.year = year;
    product.img = img;
    product.qty = qty;

    await this._repository.save(product);
    return product;
  }
}
