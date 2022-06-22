
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import {  useFormik } from 'formik';
import * as yup from 'yup';
import '../Form/styles.css'


// Formulario de cadastro

const shema = yup.object().shape({
  email: yup.string().email('Formato do e-mail não é valido').required('O e-mail é obrigatório'),
  password: yup.string().min(6, 'Senha de no mínimo 6 caracteries').required('A senha é obrigatória'),
  name: yup.string().required('Nome Obrigatório'),
  sobrenome: yup.string().required('Sobrenome Obrigatório')
})

const FormCadastro = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: '',
      sobrenome: '',
    },
    validationSchema:shema,
    onSubmit: async (values, actions) => {
      console.log(values)
      console.log(actions)
      await new Promise(resolve => setTimeout(resolve, 1000));
      actions.resetForm()

    },
  })

  return (
    <Form onSubmit={formik.handleSubmit} autoComplete='off'>
    <Form.Group className="mb-3" controlId="email">
      <Form.Label>Email</Form.Label>
      <Form.Control itemID='email'
      onChange={formik.handleChange}
      value={formik.values.email}
      type="email" placeholder="email@gmail.com" name='email'
      className={formik.errors.email || formik.touched.email ? 'input-error' : ''}  />
      {formik.errors.email || formik.touched.email &&
      <p className='error'>{formik.errors.email}</p> }
      <Form.Text className="text-muted">
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="password">
      <Form.Label>Senha</Form.Label>
      <Form.Control type="password"
      name='password'
      itemID='password'
       placeholder="******"
      onChange={formik.handleChange}
      value={formik.values.password}
      onBlur={formik.handleBlur}
      className={formik.errors.password && formik.touched.password  ? 'input-error' : ''} />
      {formik.errors.password || formik.touched.password &&
      <p className='error'>{formik.errors.password}</p> }
    </Form.Group>
    <Form.Group className="mb-3" controlId="name">
      <Form.Label>Nome Completo </Form.Label>
      <Form.Control type="text"
      name='name'
      itemID='name'
       placeholder="Primeiro Nome"
      onChange={formik.handleChange}
      value={formik.values.name}
      onBlur={formik.handleBlur}
      className={formik.errors.name && formik.touched.name  ? 'input-error' : ''}  />
      {formik.errors.name || formik.touched.name &&
      <p className='error'>{formik.errors.sobrenome}</p> }
    </Form.Group>
    <Form.Group className="mb-3" controlId="sobrenome">
      <Form.Label> Endereço </Form.Label>
      <Form.Control type="text"
      name='sobrenome'
      itemID='sobrenome'
       placeholder=" Sobrenome "
      onChange={formik.handleChange}
      value={formik.values.sobrenome}
      onBlur={formik.handleBlur}
      className={formik.errors.sobrenome && formik.touched.sobrenome  ? 'input-error' : ''}  />
      {formik.errors.name || formik.touched.name &&
      <p className='error'>{formik.errors.sobrenome}</p> }
    </Form.Group>
    <Button className='buttonEntrar' variant="primary" type="submit">
      Salvar
    </Button>
  </Form>
  )
}

export { FormCadastro }
