import React from 'react';
import { NavBar } from '../NavBar';
import { Carrousel } from '../Carrossel';
import BookCards from '../BookCards';
import Footer from '../Footer';
import useBooks from '../../App';

const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <Carrousel></Carrousel>
      <BookCards></BookCards>
      <Footer></Footer>
    </>
  );
};

export { Home };
