import { createContext } from 'react';

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}
interface Books {
  product: Product[];
}

const BooksContext = createContext<Books>({
  product: [],
});
