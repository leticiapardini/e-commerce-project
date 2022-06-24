import React, { useContext, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useContextModal } from '../../context/contextModalCadastro';
import { FormCadastro } from '../FormCadastro';
import '../Modal/styles.css';

const ModalCadastro = () => {
  const {handleModalCloseCad, handleModalOpenCad, modalCad} = useContext(useContextModal)


  return (
    <>
      <Button className="buttonEntrar" variant="primary" onClick={handleModalOpenCad}>
        Ainda não tem Cadastro? Clique aqui!
      </Button>
      <Modal show={modalCad} onHide={handleModalCloseCad}>
        <Modal.Header closeButton>
          <Modal.Title>Faça seu login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormCadastro />
        </Modal.Body>
      </Modal>
    </>
  );
};

export { ModalCadastro };
