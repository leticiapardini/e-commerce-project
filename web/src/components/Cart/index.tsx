/* eslint-disable react/react-in-jsx-scope */
import { DeleteOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react';
import { useContext, useState } from 'react';
import { Button, Card, Offcanvas } from 'react-bootstrap';
import './styles.css';
import { useContextCart } from '../../context/contextCart';
import { Alert, Empty, Popconfirm } from 'antd';
import { useContextModal } from '../../context/contextModalCadastro';
import Swal from 'sweetalert2';

export interface Product {
  id: number;
  title: string;
  author: string;
  price: number;
  year: number;
  img: string;
  qty: number;
}

function CartProduct() {
  const { removeCart, cart, total, clearCart, setCart } = useContext(useContextCart);
  const { logado } = useContext(useContextModal);
  const [show, setShow] = useState(false);

  const numeroCompra = Math.floor(Math.random() * 1000);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  useEffect(() => {
    const storeCart = localStorage.getItem('LC__cart');
    if (!storeCart) return;

    const parsedStoredCart = JSON.parse(storeCart);
    setCart(parsedStoredCart);
  }, []);

  const finalizacaoCarrinho = () => {
    Swal.fire(
      'Compra realizada com sucesso!',
      `Seu numero do pedido é ${numeroCompra} !! Volte
  sempre a Lilás Livraria`,
    );
    setCart([]);
    localStorage.setItem('LC__cart', JSON.stringify(cart));
  };

  return (
    <>
      <Button onClick={handleShow} className="me-2">
        <ShoppingCartOutlined style={{ fontSize: '30px' }} />
        <div className="icon-carrinho"> {cart.length || 0}</div>
      </Button>
      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrinho de Compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.length ? (
            <>
              {cart.map((book) => {
                return (
                  <>
                    <div className="container-carrinho" key={book.id}>
                      <div>
                        <Card.Img className="cardImg-2" src={book.img}></Card.Img>
                      </div>
                      <Card.Body>
                        <Card.Title className="card-title">{book.title}</Card.Title>
                        <Card.Subtitle>{`Qty: ${book.qty}`}</Card.Subtitle>
                        <Card.Text className="card-price">R$: {book.price} reais</Card.Text>
                      </Card.Body>
                      <Popconfirm
                        placement="bottomRight"
                        title={'Tem certeza que deseja excluir o item do carrinho?'}
                        icon={<DeleteOutlined style={{ fontSize: '20px', color: 'red' }} />}
                        onConfirm={() => removeCart(book.id)}
                        okText="Excluir"
                        cancelText="Cancelar"
                        okButtonProps={{ danger: true }}
                      >
                        <Button className="buttonExcluir">
                          <DeleteOutlined style={{ fontSize: '20px', color: 'red' }} />
                        </Button>
                      </Popconfirm>
                    </div>
                  </>
                );
              })}
              <>
                <Card.Text className="total">{`Total: R$ ${total.toFixed(2)} reais`}</Card.Text>
                <>
                  <Popconfirm
                    placement="bottomRight"
                    title={'Tem certeza que deseja limpar o carrinho?'}
                    onConfirm={clearCart}
                    okText="Limpar"
                    cancelText="Cancelar"
                    okButtonProps={{ danger: true }}
                  >
                    <Button className="buttonFinalizar"> Limpar Carrinho</Button>
                  </Popconfirm>
                </>

                <Button
                  onClick={() => {
                    logado ? finalizacaoCarrinho() : Swal.fire('Você precisa estár logado para finalizar a compra!');
                  }}
                  className="buttonFinalizar"
                >
                  {' '}
                  Finalizar Compra
                </Button>
              </>
            </>
          ) : (
            <div>
              <Empty
                image={'https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'}
                description={'Carrinho Vazio!'}
              />
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export { CartProduct };
