import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StarRating from './StarRating';
const ProductCard = ({singlefeaturedproduct}) => {
  return (
    <Card style={{ width: '18rem',border:'none' }}>
      <Card.Img className='cardImage' style={{height:'200px',objectFit:'cover'}} variant="top" src={singlefeaturedproduct.image} />
      <Card.Body style={{textAlign:'center'}}>
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