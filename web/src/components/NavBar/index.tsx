import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
// import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo/logoFinal.png';
import { CartProduct } from '../Cart';
import { CadastreModal } from '../Modal';
import './styles.css'



function NavBar() {

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="navbar navbar-light" style={{background:'#2F4F4F'}}>
        <Container>
          <Navbar.Brand>
            <img alt="logo" style={{height: '100%', width: '218px'}} src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" style={{fontSize: '18px', color: '#fff'}}>Home</Nav.Link>
              <Nav.Link href="/quemSomos" style={{fontSize: '18px', color: '#fff'}}>Quem Somos</Nav.Link>
              <Nav.Link href="/contatos" style={{fontSize: '18px', color: '#fff'}}>Contatos</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <CadastreModal/>
              </Nav.Link>
              <Nav.Link>
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
