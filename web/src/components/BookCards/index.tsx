import React from 'react';
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import books from '../../integrations/api.json';
import './styles.css'

function BookCards() {
  return (
    <div className='gridBooks'>
      {books.map(book => {
        return (
  <CardGroup key={book.id}>
    {/* <Row className="g-4">
    <Col xs={6} md={4} style={{padding: '2rem'}}> */}
      <Card style={{width:'100%', height:'100%'}} >
        <Card.Img src={book.image} style={{width:'100px', height:'100px', marginLeft:'33%'}} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Subtitle>{book.description}</Card.Subtitle>
          <Card.Text> R$:{book.price}</Card.Text>
        </Card.Body>
        <Button>
          Saiba mais
        </Button>
      </Card>
    {/* </Col>
  </Row> */}
</CardGroup>)})}
    </div>

  );
}

export default BookCards;
