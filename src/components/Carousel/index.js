import React from 'react';
import { Carousel } from 'react-bootstrap';

function CustomCarousel() {
  return (
    <Carousel interval={1000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.tcdn.com.br/img/img_prod/493811/camiseta_basica_feminina_branca_algodao_egipcio_675_1_20181214113030.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://photos.enjoei.com.br/camiseta-em-malha-branca-da-velocity/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy82NjM5NzYvNmM1MzdmOGQ4YTQ2Nzg2ZDJmODZkYWIwYTc5NzljYWMuanBn"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ph-cdn3.ecosweb.com.br/imagens01/foto/moda-feminina/camisetas-e-baby-look/camiseta-em-malha-de-algodao-branca_47412_600_1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;
