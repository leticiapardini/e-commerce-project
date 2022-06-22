import { UserAddOutlined } from '@ant-design/icons';
import yup from 'yup';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { ModalCadastro } from '../ModalCadastro';

// Formulario com e-mail, senha e botão para clicar e se cadastrar
const shema = yup.object().shape({
  email: yup.string().email('Formato do e-mail não é valido').required('O e-mail é obrigatório'),
  password: yup.string().min(6, 'Senha de no mínimo 6 caracteries').required('A senha é obrigatória')
})
const onSubmit = (values:any, actions:any) => {
  console.log(values)

}

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
