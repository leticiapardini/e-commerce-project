import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { NavBar } from './NavBar';
import BookCards from './BookCards';
import { Offcanvas } from 'react-bootstrap';

function App() {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  //onClick={handleShow}
  const handleShow = () => setShow(true);

  interface handleCart {
    handleShow: () => void;
  }

  return (
    <>
      <NavBar></NavBar>
      <BookCards></BookCards>
      <Offcanvas show={show} onHide={handleClose}>
        Carrinho de Compras
      </Offcanvas>
    </>
  );
}

export default App;
