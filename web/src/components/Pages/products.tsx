import React, { useContext, useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import {Link, useParams} from 'react-router-dom'
import books from '../../integrations/api.json';
import Footer from '../Footer';
import { NavBar } from '../NavBar';
import '../BookCards/styles.css'
import { CartContext } from '../contexts/CartContext';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { AddCartContext } from '../contexts/AddCartContext';
import './stylesProducts.css'

export interface stateCartProps {
  id: number,
  title: string,
  description: string,
  price: number,
  image: string
}
const Products = () => {
  const [selectBooks, setSelectBooks] = useState<boolean>(false)
  const [conteudoCarrinho, setConteudoCarrinho] = useState<Array<stateCartProps>>([{
    id: 0,
    title: '',
    description: '',
    price: 0,
    image: ''
  }])
  const {handleShow} = useContext(CartContext)
  const {id} = useParams();

  const arrayBook = books.filter(book => {
    return id === book.id.toString()
})




const stringBook:string = JSON.stringify(arrayBook)
const local = localStorage.setItem('LC__cart', stringBook)


useEffect(
  () => {
    const infoLocalStorage =  localStorage.getItem('LC__cart')
    if(!infoLocalStorage) {return
    }else{
     const parseInfoLocalStorage = JSON.parse(infoLocalStorage)
     setConteudoCarrinho?.(parseInfoLocalStorage)
     console.log(parseInfoLocalStorage)
  }
  },[]
)



  return (
    <React.Fragment>
    <AddCartContext.Provider value={{
      Books: arrayBook,
      conteudoCarrinho,
      setConteudoCarrinho
    }}>

      <>
      {conteudoCarrinho.length >=0 ? (
      <>
      <NavBar/>
      <div className='container-products'>
          <Card className='card-2'>
            <Card.Body>
              <Card.Img className='cardImg' src={conteudoCarrinho[0].image}></Card.Img>
              <Card.Title>{conteudoCarrinho[0].title}</Card.Title>
              <Card.Subtitle>{conteudoCarrinho[0].description}</Card.Subtitle>
              <Card.Text>RS {conteudoCarrinho[0].price}</Card.Text>
            </Card.Body>
          </Card>
          <Link to={'/cart'}>
          <Button onClick={() => setSelectBooks(true)} className='addCart'>
              <ShoppingCartOutlined  style={{ fontSize: '30px' }}/>
              Clique aqui para adicionar no carrinho!!
            </Button>
          </Link>
        </div>
      <Footer></Footer>
      </>) : 'Não encontramos Nada'}
      </>

      </AddCartContext.Provider>
  </React.Fragment>


  )
}

export {Products};
