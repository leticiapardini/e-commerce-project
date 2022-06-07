import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { NavBar } from './NavBar';
import BookCards from './BookCards';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <BookCards></BookCards>
    </>
  );
}

export default App;
