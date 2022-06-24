import React, { useContext, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';
import '../Form/styles.css';
import { api } from '../../defaults/endpoint';
import { useContextModal } from '../../context/contextModalCadastro';
import Swal from 'sweetalert2';

// Formulario de cadastro
const shema = yup.object().shape({
  email: yup.string().email('Formato do e-mail não é valido').required('O e-mail é obrigatório'),
  password: yup.string().min(6, 'Senha de no mínimo 6 caracteries').required('A senha é obrigatória'),
  name: yup.string().required('Nome Obrigatório'),
});

const FormCadastro = () => {
  const { handleModalCloseCad } = useContext(useContextModal);
  const [result, setResult] = useState({});
  const reqApi = JSON.stringify(result);

  if (result !== {}) {
    const apiFormCadastro = api
      .post('users/', result)
      .then((response) => {
        if (response.status == 201) {
          Swal.fire('Você já esta logado!');
          handleModalCloseCad();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    console.log('deu certo');
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        name: '',
        roleId: 'c3d868d3-93a3-4f17-a6ed-93b18695f1f2',
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => console.log('helo')}
      validationSchema={shema}
    >
      {({ errors, handleChange, handleSubmit, values, touched, handleBlur }) => (
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
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Nome Completo</Form.Label>
              <Form.Control
                itemID="name"
                onChange={handleChange}
                value={values.name}
                type="name"
                placeholder="Digite seu nome completo"
                name="name"
                className={errors.name || touched.name ? 'input-error' : ''}
              />
              {errors.name || (touched.name && <p className="error">{errors.name}</p>)}
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Modal.Footer>
              <Button
                type="submit"
                onClick={() => setResult(values)}
                className="buttonEntrar"
                id="buttonSubmit"
                variant="primary"
              >
                Salvar
              </Button>
            </Modal.Footer>
          </Form>
        </>
      )}
    </Formik>
  );
};

export { FormCadastro };
