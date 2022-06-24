import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Pages/home';


function App() {

  return (

       <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>

  );
}
export default App;
