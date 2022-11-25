import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {LinkContainer} from 'react-router-bootstrap';


const ProductCarousel = () => {
  const cursorP = { cursor: 'pointer' };
  return (
   
    <Carousel>
    <Carousel.Item>
      <img
        crossorigin="anonymous"
        className="d-block w-100"
        style={{ height: "300px", objectFit: "cover" }}
        src="/images/banner1.webp"
        alt="First slide"
      
      />
      <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
        <h3>Bestseller Phone</h3>
        </LinkContainer>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
      crossorigin="anonymous"
        className="d-block w-100"
        src="/images/banner2.webp"
        alt="Second slide"
        style={{ height: "300px", objectFit: "cover" }}
      />

      <Carousel.Caption>
      <LinkContainer style={cursorP} to="/product-details">
        <h3>Bestseller Speaker</h3>
        </LinkContainer>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
      crossorigin="anonymous"
        className="d-block w-100"
        src="/images/banner3.jpg"
        alt="Third slide"
        style={{ height: "300px", objectFit: "cover" }}
      />

      <Carousel.Caption>
      <LinkContainer style={cursorP} to="/product-details">
        <h3>Bestseller Notebook</h3>
        </LinkContainer>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

  )
}

export default ProductCarousel