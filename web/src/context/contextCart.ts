
import { createContext, ReactNode } from "react";
export interface Product {
  id: number;
  title: string;
  author: string;
  price: number;
  year: number;
  img: string;
  qty: number;
}



interface ContextData {
  cart: Product[];
  products: Product[];
  addCart: (product:number) => void ;
  children?: ReactNode;
  removeCart: (product:number) => void ;
  total: number;
  clearCart: () => void;
}

export const useContextCart = createContext<ContextData>({} as ContextData);
