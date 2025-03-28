import React from 'react'
import Card from 'react-bootstrap/Card';
import StarRating from './StarRating';
import { Link } from 'react-router-dom';
const ProductCard = ({singlefeaturedproduct}) => {
  return (
    <Card style={{ width: '18rem',border:'none' }} >
      <Card.Img className='cardImage' style={{height:'200px',objectFit:'cover'}} variant="top" src={singlefeaturedproduct.image} />
      <Card.Body style={{textAlign:'center'}}>
        <Card.Title>{singlefeaturedproduct.name}</Card.Title>
        <Card.Text>
          {singlefeaturedproduct.description}
        </Card.Text>
        <Link className='btn' style={{border:'0.5px solid red',borderRadius:'5px',backgroundColor:'red',color:'white'}} to={`/singleproduct/${singlefeaturedproduct.id}`} variant="primary">Add to Cart</Link>
        <StarRating rating={singlefeaturedproduct.rating}/>
        <small>No of reviews: {singlefeaturedproduct.no_of_reveiw}</small>
      </Card.Body>
    </Card>
  )
}

export default ProductCard