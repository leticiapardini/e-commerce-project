import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import { Home } from './components/Pages/home';
import { QuemSomos } from './components/Pages/quemSomos';
import { Contatos } from './components/Pages/contatos';
import Checkout from '../src/components/Pages/telaPagamento/tela3';
import { CartProduct } from './components/Cart';

function App() {

  return (

      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/quemSomos" element={<QuemSomos />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="/cadastro" element={<Checkout />} />
        </Routes>
      </Router>

  );
}
export default App;
