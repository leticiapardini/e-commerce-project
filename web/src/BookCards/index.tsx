import React from 'react';
import { Card, Container } from 'react-bootstrap';

function BookCards() {
  return (
    <Container>
      <Card style={{ width: '18rem' }}>
        <Card.Img src="https://livrariascuritiba.vteximg.com.br/arquivos/ids/1861080-525-525/lv448086_1.jpg?v=636915786663200000" />
        <Card.Body>
          <Card.Title>Livro Titulo</Card.Title>
          <Card.Subtitle>Livro Subtitulo</Card.Subtitle>
          <Card.Text>Livro Texto</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default BookCards;
