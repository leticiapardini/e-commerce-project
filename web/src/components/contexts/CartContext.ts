import { createContext } from 'react';

export interface defaultContext {
  show: boolean;
  handleClose: () => void;
  handleShow: () => void;
  children?: React.ReactNode;
}

const CartContext = createContext<defaultContext>({
  show: false,
  handleShow: () => true,
  handleClose: () => false,
});

export { CartContext };
