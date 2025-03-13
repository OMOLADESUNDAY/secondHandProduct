import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/productcard.css'
import StarRating from './StarRating';
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
        <StarRating rating={singlefeaturedproduct.rating}/>
        <small>No of reviews: {singlefeaturedproduct.no_of_reveiw}</small>
      </Card.Body>
    </Card>
  )
}

export default ProductCard