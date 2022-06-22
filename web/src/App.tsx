import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom'
import { Home } from './components/Pages/home';
import { QuemSomos } from './components/Pages/quemSomos';
import { Contatos } from './components/Pages/contatos';
import { Products } from './components/Pages/products';
import books from './integrations/api.json';
import { CartContext } from './components/contexts/CartContext';
import Checkout from '../src/components/Pages/telaPagamento/tela3'
import { CartProduct } from './components/Cart';


function App() {

  const {id} = useParams()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <CartContext.Provider value={{
      show:show,
      handleClose: handleClose,
      handleShow: handleShow
    }}>
    <Router>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/quemSomos' element={<QuemSomos/>}/>
      <Route path='/contatos' element={<Contatos/>}/>
       <Route path='/:id' element={<Products />}/>
       <Route path='/cadastro' element={<Checkout />}/>
       <Route path='/card' element={<CartProduct />}/>
     </Routes>
    </Router>
    </CartContext.Provider>

  );
}

export default App;
