/* eslint-disable react/react-in-jsx-scope */
import { DeleteOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { Button, Card, Offcanvas, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import { NavBar } from '../NavBar';
import './styles.css';
import { useCart } from '../Hooks/CartContext';
import { useContextCart } from '../../context/contextCart';


export interface Product {
  id: number;
  title: string;
  author: string;
  price: number;
  year: number;
  img: string;
  qty: number;
}


function CartProduct() {
  const {removeCart, cart, total} = useContext(useContextCart)
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
  }
  const handleShow = () => {
    setShow(true)
  }


  const [finalizarCompra, setFinalizarCompra] = useState(false);

console.log(cart, 'carrinho')
  return (
    <>
      <Button onClick={handleShow} className="me-2">
        <ShoppingCartOutlined style={{ fontSize: '30px' }} />
        <div> {cart.length}</div>
      </Button>
      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrinho de Compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         {
          cart.length  ? (<>
          {cart.map(book => {

            return (
              <>
                <div className="container-carrinho" key={book.id}>
                  <div>
                    <Card.Img className="cardImg-2" src={book.img}></Card.Img>
                  </div>
                  <Card.Body>
                    <Card.Title className="card-title">{book.title}</Card.Title>
                    <Card.Subtitle>
                      {`Qty: ${book.qty}`}
                    </Card.Subtitle>
                    <Card.Text className="card-price">RS {book.price}</Card.Text>
                  </Card.Body>

                  <Button onClick={() => removeCart(book.id) } className="buttonExcluir">
                    <DeleteOutlined style={{ fontSize: '20px' }} />
                  </Button>
                </div>

              </>
            );
          })}
          <>
          <Card.Text className="total">{`Total: R$ ${total}`}</Card.Text>
                <Link to={'/cadastro'}>
                  <Button onClick={() => setFinalizarCompra(true)} className="buttonFinalizar">
                    {' '}
                    Finalizar Compra
                  </Button>
                </Link>
          </>
        </>
      )  : 'não tem'
         }
        </Offcanvas.Body>
      </Offcanvas>
    </>
);
}

export { CartProduct };
