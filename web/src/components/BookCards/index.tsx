import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import './styles.css';
import {api} from '../../defaults/endpoint'
import { toast } from 'react-toastify';
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

function BookCards():JSX.Element {

  const {addCart, products} = useContext(useContextCart);

  return (
    <div className="gridBooks">
      {products.map((book) => {
        return (
          <CardGroup key={book.id}>
            <Card className="card">
               <Card.Img src={book.img} className="cardImg" />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Subtitle>{book.author}</Card.Subtitle>
                <Card.Text> R${book.price}</Card.Text>
              </Card.Body>
                <Button onClick={() => addCart(book.id)} className="buttonSaibaMais">
                  Adicionar Carrinho
                </Button>

            </Card>
          </CardGroup>
        );
      })}
    </div>
  );
}

export default BookCards;
