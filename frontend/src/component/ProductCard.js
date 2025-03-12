import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StarRating from "./StarRating";
import '../styles/productcard.css'
const ProductCard = ({singlefeaturedproduct}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img className='cardImage' variant="top" src={singlefeaturedproduct.image} />
      <Card.Body>
        <Card.Title>{singlefeaturedproduct.name}</Card.Title>
        <Card.Text>
          {singlefeaturedproduct.description}
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
        <StarRating rating={singlefeaturedproduct.rating} />
        <small className="text-gray-600">Rating: {singlefeaturedproduct.rating.toFixed(1)} / 5</small>
      </Card.Body>
    </Card>
  )
}

export default ProductCard