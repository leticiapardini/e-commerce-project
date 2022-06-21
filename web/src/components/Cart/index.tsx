/* eslint-disable react/react-in-jsx-scope */
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import './styles.css';

function CartProduct() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className="me-2">
        <ShoppingCartOutlined style={{ fontSize: '30px' }} />
      </Button>
      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists,
          etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export { CartProduct };
