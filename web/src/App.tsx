import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom'
import { Home } from './components/Pages/home';
import { QuemSomos } from './components/Pages/quemSomos';
import { Contatos } from './components/Pages/contatos';
import { Products } from './components/Pages/products';

function App() {

const {id} = useParams()

  return (

    <Router>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/quemSomos' element={<QuemSomos/>}/>
      <Route path='/contatos' element={<Contatos/>}/>
       <Route path='/:id' element={<Products />}/>
     </Routes>
    </Router>

  );
}

export default App;
