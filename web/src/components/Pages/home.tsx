import React, { useEffect, useState } from 'react';
import { NavBar } from '../NavBar';
import { Carrousel } from '../Carrossel';
import BookCards from '../BookCards';
import Footer from '../Footer';
import { api } from '../../defaults/endpoint';
import { useContextCart } from '../../context/contextCart';
import { useContextModal } from '../../context/contextModalCadastro';

export interface Product {
  id: number;
  title: string;
  author: string;
  price: number;
  year: number;
  img: string;
  qty: number;
}
const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [modal, setModal] = useState(false);
  const [logado, setLogado] = useState(false);
  const [modalCad, setModalCad] = useState(false);

  const handleModalOpen = () => {
    return setModal(true);
  };

  const handleModalClose = () => {
    return setModal(false);
  };

  const handleModalOpenCad = () => {
    return setModalCad(true);
  };

  const handleModalCloseCad = () => {
    return setModalCad(false);
  };

  const estaLogado = () => {
    return setLogado(true);
  };

  useEffect(() => {
    api
      .get('products')
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((erro: any) => {
        console.log(`${erro} Ops deu um erro`);
      });
  }, []);

  useEffect(() => {
    const storeCart = localStorage.getItem('LC__cart');
    if (!storeCart) return;

    const parsedStoredCart = JSON.parse(storeCart);
    setCart(parsedStoredCart);
  }, []);

  const addCart = (productId: number) => {
    const verifica = products.map((book) => {
      const verificaId = book.id === productId;
      if (verificaId) {
        return {
          ...book,
          qty: 1,
        };
      } else {
        return {
          ...book,
        };
      }
    });

    const filterBook = verifica.filter((book) => book.id === productId);
    const findCart = cart.find((product) => product.id === productId);
    const cartBook = [...cart, ...filterBook];

    if (!findCart) {
      setCart(cartBook);
      localStorage.setItem('LC__cart', JSON.stringify(cartBook));
    } else {
      setCart(
        cart.map((item) => {
          if (item.id === productId) {
            return {
              ...item,
              qty: item.qty + 1,
            };
          } else {
            return item;
          }
        }),
      );
    }
  };

  const removeCart = (productId: number) => {
    const findCart = cart.find((product) => product.id === productId);

    if (findCart!.qty > 1) {
      setCart(
        cart.map((item) => {
          return {
            ...item,
            qty: item.qty - 1,
          };
        }),
      );
    } else {
      const arrayFiltro = cart.filter((product) => product.id !== productId);
      setCart(arrayFiltro);
      localStorage.setItem('LC__cart', JSON.stringify(arrayFiltro));
    }
  };

  const total = cart.reduce((acc, prod) => {
    return (acc += prod.qty * prod.price);
  }, 0);

  const clearCart = () => {
    setCart([]);
  };

  return (
    <useContextModal.Provider
      value={{
        estaLogado,
        handleModalClose,
        handleModalOpen,
        logado,
        modal,
        handleModalCloseCad,
        handleModalOpenCad,
        modalCad,
      }}
    >
      <useContextCart.Provider
        value={{
          addCart,
          cart,
          products,
          removeCart,
          total,
          clearCart,
          setCart,
        }}
      >
        <>
          <NavBar></NavBar>
          <Carrousel></Carrousel>
          <BookCards></BookCards>
          <Footer></Footer>
        </>
      </useContextCart.Provider>
    </useContextModal.Provider>
  );
};

export { Home };
