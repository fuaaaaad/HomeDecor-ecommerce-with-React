import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bg from "../../../../Assets/bg5.jpeg";
import bg1 from "../../../../Assets/bg6.jpeg";

const Carousels = () => {
    return (
      <div className="App">
        <Carousel style = {{height: '100vh'}}>
  <Carousel.Item style = {{height: '100vh'}}>
    <img
      className="d-block w-100"
      src = {bg}
      alt="First slide"
    />
    <Carousel.Caption >
      <h3>Elegent looking Necklace Sets</h3>
      <p>Unique Styles and real looking </p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item style = {{height: '100vh'}}>
    <img
      className="d-block w-100"
      src = {bg1}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item >


  <Carousel.Item style = {{height: '100vh'}}>
    <img
      className="d-block w-100"
      src = {bg}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item >
</Carousel>
      </div>
    );
  }
  
  export default Carousels;