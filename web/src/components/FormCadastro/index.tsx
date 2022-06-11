
import React from 'react'
import { Button, Form } from 'react-bootstrap'


// Formulario de cadastro

const FormCadastro = () => {

  return (
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Senha</Form.Label>
      <Form.Control type="password" placeholder="Senha" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label>Nome Completo </Form.Label>
      <Form.Control type="name" placeholder="Nome e Sobrenome" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEndereco">
      <Form.Label> Endereço </Form.Label>
      <Form.Control type="address" placeholder="Endereço" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Salvar
    </Button>
  </Form>
  )
}

export { FormCadastro }
