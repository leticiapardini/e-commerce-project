import { UserAddOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { ModalCadastro } from '../ModalCadastro';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';
import './styles.css';
import Modal from 'react-bootstrap/Modal';
import { api } from '../../defaults/endpoint'

// Formulario com e-mail, senha e botão para clicar e se cadastrar
const shema = yup.object().shape({
  email: yup.string().email('Formato do e-mail não é valido').required('O e-mail é obrigatório'),
  password: yup.string().min(6, 'Senha de no mínimo 6 caracteries').required('A senha é obrigatória'),
});
const onSubmit = (values: any, actions: any) => {
  console.log(values);

};


const handleSubmit = (values:any) => {
  console.log(values)
}

const handleChange = (values:any) => {
  console.log(values)
}

const Formulario = () => {

  const [result, setResult] = useState({})

  useEffect(() => {
    api
      .post('/users', result)
      .then((response) => {
       try {
        console.log(response.data)
       } catch (error) {
          console.log(error)
       }
      })
      .catch((erro: any) => {
        console.log(`Temos um erro,${erro} Ops deu um erro`);
      });
  }, [result]);

  console.log(result)

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values, {setSubmitting, resetForm}) => console.log('helo')}
      validationSchema={shema}
    >

      {({ errors, handleChange,handleSubmit, values, touched, handleBlur, getFieldProps, setFieldValue, isSubmitting }) => (
        <>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              itemID="email"
              onChange={handleChange}
              value={values.email}
              type="email"
              placeholder="email@gmail.com"
              name="email"
              className={errors.email || touched.email ? 'input-error' : ''}
            />
            {errors.email || (touched.email && <p className="error">{errors.email}</p>)}
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              name="password"
              itemID="password"
              placeholder="******"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
              className={errors.password && touched.password ? 'input-error' : ''}
            />
            {errors.password || (touched.password && <p className="error">{errors.password}</p>)}
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <ModalCadastro />

          <Modal.Footer>
            <Button type="submit" onClick={() => setResult(values)} className="buttonEntrar" id="buttonSubmit" variant="primary">
              Entrar
            </Button>
          </Modal.Footer>
        </Form>
        </>
      )}
    </Formik>
  );
};

export default Formulario;
