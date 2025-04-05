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
          <h3>Welcome to Michael Store</h3>
          <p>Your one-stop online shop for everything you need — from electronics to fashion, health products, and more!</p>
          <Button variant="danger">Shop Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  className='carouselItem remove-carousel'> 
        <img src={image2} alt='kf' className='carouselImage' text="Second slide" />
        <Carousel.Caption className='carouselCaption'>
          <h3>🔥 Hot Deals & Discounts</h3>
          <p>Discover unbeatable prices on top-quality products.
          New arrivals, bestsellers, and seasonal sales – all in one place!</p>
          <Button variant="danger"> View Offers</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  className='carouselItem remove-carousel'>
        <img src={image3} alt='kfl' className='carouselImage' text="Third slide" />
        <Carousel.Caption className='carouselCaption'>
          <h3>🗂️ Shop by Category</h3>
          <p>
          Browse our wide selection of phones, fashion, health products, books, and more. Find exactly what you need in just a few clicks.
          </p>
          <Button variant="danger">📂 Explore Categories</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default HomeCarousel