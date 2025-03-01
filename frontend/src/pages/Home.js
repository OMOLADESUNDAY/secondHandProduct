import React from 'react'
import Filter from '../component/Filter'
import "../styles/home.css"
const Home = () => {
  return (
    <div className='cont'>
        <section className='filterComponentContainer'><Filter/></section>
        <section></section>
    </div>
  )
}

export default Home