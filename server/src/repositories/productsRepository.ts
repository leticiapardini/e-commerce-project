import Product from '../models/Product';

export default class ProductsRepository {
  private _products: Product[] = [];

  constructor() {
    this._products = [];
  }

  public list(): Product[] {
    return this._products;
  }

  public getById(id: string): Product | undefined {
    return this._products.find((x) => x.id === id); }

  public add(product: Product): void {
    this._products.push(product);
  }

  public update(product: Product): void {
    const productFoundIndex = this._products.findIndex((x) => x.id.toLowerCase() === product.id.toLowerCase());

    if (productFoundIndex === -1) return;

    this._products[productFoundIndex] = product;
  }

  public delete(id: string): void {
    this._products = this._products.filter((x) => x.id.toLowerCase() !== id.toLowerCase());
  }
}
