import React, { useState } from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import books from '../../integrations/api.json';
import './styles.css';
import { Link } from 'react-router-dom';

function BookCards() {
  const [selectBooks, setSelectBooks] = useState<boolean>(false);

  return (
    <div className="gridBooks">
      {books.map((book) => {
        return (
          <CardGroup key={book.id}>
            <Card className="card">
              <Card.Img src={book.image} className="cardImg" />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Subtitle>{book.description}</Card.Subtitle>
                <Card.Text> R${book.price}</Card.Text>
              </Card.Body>
              <Link to={`/${book.id}`}>
                <Button onClick={() => setSelectBooks(true)} className="buttonSaibaMais">
                  Saiba mais
                </Button>
              </Link>
            </Card>
          </CardGroup>
        );
      })}
    </div>
  );
}

export default BookCards;
