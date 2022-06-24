import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useContext, useState } from 'react';
import Formulario from '../Form';
import { CartProduct } from '../Cart';
import { Form } from 'react-bootstrap';
import { UserAddOutlined } from '@ant-design/icons';
import './styles.css';
import { useContextModal } from '../../context/contextModalCadastro';

//Modal para o usuario entrar
function CadastreModal() {
  const {handleModalClose, handleModalOpen, modal} = useContext(useContextModal)
;
  return (
    <>
      <Button className="cadastreButton" variant="primary" onClick={handleModalOpen}>
        <UserAddOutlined style={{ fontSize: '30px' }} /> Entre/Cadastre-se
      </Button>
      <Modal show={modal} onHide={handleModalClose}>
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
