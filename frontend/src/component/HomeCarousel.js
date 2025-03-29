import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../assest/carouselimage.png';
import image2 from '../assest/carouselImage2.png'
import image3 from '../assest/Group_21950.png'
import '../styles/homecarousel.css'
import Button from 'react-bootstrap/Button';
const HomeCarousel = () => {
  const [intervalTime, setIntervalTime] = useState(3000); // Default interval
  const [indicator, setIndicator]=useState(true)
  const [control,setControl]=useState(true)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIndicator(false)
        setControl(false)
        setIntervalTime(null); // Stop sliding on small screens
      } else {
        setIntervalTime(3000); // Default sliding interval
      setIndicator(true)
      setControl(true)
      }
    };

    // Run on mount
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Carousel className='carouselcontainer' controls={false} interval={intervalTime} indicators={indicator}>
      <Carousel.Item className='carouselItem'>
        <img alt='k' src={ExampleCarouselImage} className='carouselImage' text="First slide" />
        <Carousel.Caption className='carouselCaption'>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button variant="danger">Shop Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  className='carouselItem remove-carousel'> 
        <img src={image2} alt='kf' className='carouselImage' text="Second slide" />
        <Carousel.Caption className='carouselCaption'>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button variant="danger">Shop Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  className='carouselItem remove-carousel'>
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