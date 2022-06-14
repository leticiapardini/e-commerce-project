import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { NavBar } from './components/NavBar';
import BookCards from './components/BookCards';
import { Carrousel } from './components/Carrossel';
import Formulario from './components/Form';



function App() {


  return (
    <>
      <NavBar></NavBar>
      <Carrousel></Carrousel>
      <BookCards></BookCards>



    </>
  );
}

export default App;
