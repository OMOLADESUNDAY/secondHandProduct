import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../assest/carouselimage.png';
import image2 from '../assest/carouselImage2.png'
import image3 from '../assest/Group_21950.png'
import '../styles/homecarousel.css'
import Button from 'react-bootstrap/Button';
const HomeCarousel = () => {
  return (
    <Carousel className='carouselcontainer'controls={false}>
      <Carousel.Item>
        <img alt='k' src={ExampleCarouselImage} className='carouselImage' text="First slide" />
        <Carousel.Caption className='carouselCaption'>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button variant="danger">Shop Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image2} alt='kf' className='carouselImage' text="Second slide" />
        <Carousel.Caption className='carouselCaption'>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button variant="danger">Shop Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image3} alt='kfl' className='carouselImage' text="Third slide" />
        <Carousel.Caption className='carouselCaption'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <Button variant="danger">Shop Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default HomeCarousel