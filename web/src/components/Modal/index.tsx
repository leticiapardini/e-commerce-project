import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import Formulario from '../Form';
import { CartProduct } from '../Cart';
import { Form } from 'react-bootstrap';
import { UserAddOutlined } from '@ant-design/icons';
import './styles.css';

//Modal para o usuario entrar
function CadastreModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className="cadastreButton" variant="primary" onClick={handleShow}>
        <UserAddOutlined style={{ fontSize: '30px' }} /> Entre/Cadastre-se
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Faça seu login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formulario />
        </Modal.Body>
      </Modal>
    </>
  );
}
export { CadastreModal };
