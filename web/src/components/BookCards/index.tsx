import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

function BookCards() {
  return (
    <Container>
    <Row xs={3} md={2} className="g-4">
    <Col md={3} style={{padding: '2rem'}}>
      <Card>
        <Card.Img src="https://livrariascuritiba.vteximg.com.br/arquivos/ids/1861080-525-525/lv448086_1.jpg?v=636915786663200000" />
        <Card.Body>
          <Card.Title>Livro Titulo</Card.Title>
          <Card.Subtitle>Livro Subtitulo</Card.Subtitle>
          <Card.Text>Livro Texto</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={3} style={{padding: '2rem'}}>
      <Card>
        <Card.Img src="https://livrariascuritiba.vteximg.com.br/arquivos/ids/1861080-525-525/lv448086_1.jpg?v=636915786663200000" />
        <Card.Body>
          <Card.Title>Livro Titulo</Card.Title>
          <Card.Subtitle>Livro Subtitulo</Card.Subtitle>
          <Card.Text>Livro Texto</Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col md={3} style={{padding: '2rem'}}>
      <Card>
        <Card.Img src="https://livrariascuritiba.vteximg.com.br/arquivos/ids/1861080-525-525/lv448086_1.jpg?v=636915786663200000" />
        <Card.Body>
          <Card.Title>Livro Titulo</Card.Title>
          <Card.Subtitle>Livro Subtitulo</Card.Subtitle>
          <Card.Text>Livro Texto</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={3} style={{padding: '2rem'}}>
      <Card>
        <Card.Img src="https://livrariascuritiba.vteximg.com.br/arquivos/ids/1861080-525-525/lv448086_1.jpg?v=636915786663200000" />
        <Card.Body>
          <Card.Title>Livro Titulo</Card.Title>
          <Card.Subtitle>Livro Subtitulo</Card.Subtitle>
          <Card.Text>Livro Texto</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    </Row>
    </Container>
  );
}

export default BookCards;
