/* eslint-disable react/react-in-jsx-scope */
import Carousel from 'react-bootstrap/Carousel';
import foto1 from '../logo/foto1.jpg';
import foto2 from '../logo/foto2.jpg';
import capa from '../logo/capa.png';
import './styles.css';

function Carrousel() {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <img className="d-block " src={capa} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block" src={foto1} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block" src={foto2} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export { Carrousel };
