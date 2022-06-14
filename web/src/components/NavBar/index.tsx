import React, { useState } from 'react';
import {  Button, Container, Nav, Navbar } from 'react-bootstrap';
// import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo/logo.png';
import {  UserAddOutlined } from '@ant-design/icons';
import { CartProduct } from '../Cart';
import Formulario from '../Form';
import { CadastreModal } from '../Modal';



function NavBar() {

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            {' '}
            <img alt="logo" height={100} width={100} src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Quem Somos</Nav.Link>
              <Nav.Link href="#pricing">Contatos</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                {' '}
                <CadastreModal/>

              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <CartProduct />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export { NavBar };
