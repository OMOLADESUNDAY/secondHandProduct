import React from 'react'
import Filter from '../component/Filter'
import "../styles/home.css"
import HomeCarousel from '../component/HomeCarousel'
const Home = () => {
  return (
    <div className='HomeContainer'>
        <section className='filterComponentContainer'><Filter/></section>
        <section className='HomecarouselCont'><HomeCarousel/></section>
    </div>
  )
}

export default Home