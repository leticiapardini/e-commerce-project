/* eslint-disable react/react-in-jsx-scope */
import { DeleteOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { Button, Card, Offcanvas, CardGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AddCartContext } from '../contexts/AddCartContext';
import { CartContext } from '../contexts/CartContext';
import Footer from '../Footer';
import { NavBar } from '../NavBar';
import './styles.css';

function CartProduct() {
  const { conteudoCarrinho, Books, setConteudoCarrinho } = useContext(AddCartContext);
  const { handleClose, handleShow, show } = useContext(CartContext);
  const [finalizarCompra, setFinalizarCompra] = useState(false);
  console.log(Books);


  return (
    <React.Fragment>
      <>
      {conteudoCarrinho?.length === 0? ( 'Não encontramos Nada'
      ) : <>
      {
        conteudoCarrinho?.map(products => {
          <>
            <NavBar/>
            <div className='container-products'>
            <Card className='card-2'>
              <Card.Body>
                <Card.Img className='cardImg' src={products.image}></Card.Img>
                <Card.Title>{products.title}</Card.Title>
                <Card.Subtitle>{products.description}</Card.Subtitle>
                <Card.Text>RS {products.price}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        <Footer></Footer>
          </>
        })
      }
      </>}
      </>
  </React.Fragment>
  )


}

export { CartProduct };
