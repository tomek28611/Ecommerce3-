import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {LinkContainer} from 'react-router-bootstrap';

const CategoryCard = ({ category, idx}) => {
  const images = [
    "images/phones.jfif",
    "images/speakers.webp",
    "images/notebook.jpg",
    "images/printers.webp",
    "images/cameras.jpg",
   "images/tablets.jfif",

  ]
  return (
    <Card >
    <Card.Img crossOrigin="anonymous" variant="top" src={images[idx]} height="300" />
    <Card.Body>
      <Card.Title>{category}</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <LinkContainer to="/product-list">
      <Button variant="primary">Go to category</Button>
      </LinkContainer>
    </Card.Body>
  </Card>
  )
}

export default CategoryCard