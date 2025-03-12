import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const ProductCard = ({singlefeaturedproduct}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={singlefeaturedproduct.image} />
      <Card.Body>
        <Card.Title>{singlefeaturedproduct.name}</Card.Title>
        <Card.Text>
          {singlefeaturedproduct.description}
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard