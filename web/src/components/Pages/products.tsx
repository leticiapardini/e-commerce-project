import React from 'react'
import { Card } from 'react-bootstrap';
import {useParams} from 'react-router-dom'
import books from '../../integrations/api.json';
import Footer from '../Footer';
import { NavBar } from '../NavBar';
import '../BookCards/styles.css'


const Products = () => {

  const {id} = useParams();

  const arrayBook = books.filter(book => {
   return id === book.id.toString()

  })

  return (
    <>
    {arrayBook ? (
    <>
      <NavBar/>
     <Card className='card'>
      <Card.Body>
        <Card.Img className='cardImg' src={arrayBook[0].image}></Card.Img>
        <Card.Title>{arrayBook[0].title}</Card.Title>
        <Card.Subtitle>{arrayBook[0].description}</Card.Subtitle>
        <Card.Text>RS {arrayBook[0].price}</Card.Text>
      </Card.Body>
     </Card>
     <Footer></Footer>
    </>) : ('Não encontramos Nada')}
    </>
  )
}

export {Products};
