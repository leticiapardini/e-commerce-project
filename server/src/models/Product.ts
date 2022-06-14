import { v4 } from 'uuid';
import ProductDto from '../dtos/productDto';

export default class Product {
    id: string;
    title: string;
    author: string;
    publisher: string;
    price: number;
    year: number;

    constructor({title, author, publisher, price, year}: Omit<ProductDto, 'id'>) {
        this.id = v4();
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.price = price;
        this.year = year;
    }
}