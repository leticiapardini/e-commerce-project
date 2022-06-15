import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { FormCadastro } from '../FormCadastro';
import '../Modal/styles.css';



const ModalCadastro = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='buttonEntrar' variant="primary" onClick={handleShow}>
        Ainda não tem Cadastro? Clique aqui!
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Faça seu login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormCadastro/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export {ModalCadastro}
