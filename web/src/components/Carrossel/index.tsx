/* eslint-disable react/react-in-jsx-scope */
import  Carousel  from 'react-bootstrap/Carousel'
import foto1 from '../logo/foto1.jpg'
import foto2 from '../logo/foto2.jpg'
import foto3 from '../logo/foto3.jpg'

function Carrousel () {
  return (

<Carousel style={{paddingBottom:'20px'}}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={foto1}
      alt="First slide"
      style={{width: '100%', height:'25rem' }}
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={foto2}
      alt="Second slide"
      style={{width: '100%', height:'25rem' }}
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={foto3}
      alt="Third slide"
      style={{width: '100%', height:'25rem' }}
    />
  </Carousel.Item>
</Carousel>)
}

export { Carrousel };
