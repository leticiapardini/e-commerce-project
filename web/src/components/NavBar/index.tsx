import React, { useState, useEffect, useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
// import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo/logoFinal.png';
import { CartProduct } from '../Cart';
import { CadastreModal } from '../Modal';
import './styles.css';
import { Link } from 'react-router-dom';
import '../Cart/styles.css';
import { ShoppingCartOutlined } from '@ant-design/icons';

function NavBar() {

  const [openNavLink, setOpenNavLink] = useState(false);

  const open = () => {
    setOpenNavLink(true);
  };


  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="navbar navbar-light" style={{ background: '#2F4F4F' }}>
        <Container>
          <Navbar.Brand>
            <img alt="logo" style={{ height: '100%', width: '218px' }} src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to={'/'}>
                <Button onClick={open} className="me-2">
                  Home
                </Button>
              </Link>
              <Link to="/quemSomos">
                <Button onClick={open} className="me-2">
                  Quem Somos
                </Button>
              </Link>
              <Link to="/contatos">
                <Button onClick={open} className="me-2">
                  Contatos
                </Button>
              </Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <Button onClick={open} className="me-2">
                  <CadastreModal />
                </Button>
              </Nav.Link>
              <Nav.Link>
                <Button onClick={open} className="me-2">
                  <CartProduct />
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export { NavBar };
