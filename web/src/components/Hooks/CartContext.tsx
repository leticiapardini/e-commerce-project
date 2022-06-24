import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import React from 'react';
import {api} from '../../defaults/endpoint';
import { toast } from 'react-toastify';

export interface Product {
  id: number;
  title: string;
  author: string;
  price: number;
  year: number;
  img: string;
  qty: number;
}

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  qty: number;
}

interface CartContextData {
  book: Product[]
  cart: Product[];
  //addCart: (productId: number) => Promise<void>;
  // removeProduct: (productId: number) => void;
  // updateProductAmount: ({ productId, qty }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps):JSX.Element {

  const [book, setBook] = useState<Product[]>([])

  useEffect(() => {
    api.get('products').then((response) => {
      console.log(response)
      setBook(response.data)
    }).catch((erro: any) => {
      console.log(`${erro} Ops deu um erro`)
    })
  }, [])

  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem('LC__cart')

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const addCart = (productId:number) => {
    const verifica = book.filter(book => book.id === productId)
    if(verifica){
      console.log(verifica)
      setCart(verifica)
      alert('Adicionado')
    }else{
      alert('não encontrado')
    }
  }
  return (
    <CartContext.Provider
    value={{cart, book}}>
      {children}
    </CartContext.Provider>
  );
}

export  function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
