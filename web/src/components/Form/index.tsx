import { UserAddOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { ModalCadastro } from '../ModalCadastro';

// Formulario com e-mail, senha e botão para clicar e se cadastrar

const Formulario = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Senha" />
      </Form.Group>
      <ModalCadastro />
    </Form>
  );
};

export default Formulario;
