import React from 'react'
import promoImage from '../assest/carouselimage.png'
import promoImage2 from '../assest/carouselImage2.png'
import "../styles/promo.css"
const Promo = () => {
  return (
   <div className='promo-container'>
      <div className='left-promo'>
        <img src={promoImage} className='promo-img' alt="promo" />
        <div className='promo-content'> 
          <h6>SAVE UP TO 30%</h6>
          <h4>High-Quality Engine Auto Parts</h4>
          <button className='btn-shop'>shop now</button>
        </div>
        
      </div>

      <div className='right-promo'>
        <img src={promoImage2} alt="promo" className='promo-img' />
        <div className='promo-content'>
          <h6>SAVE UP TO 30%</h6>
          <h4>High-Quality Engine Auto Parts</h4>
          <button className='btn-shop'>shop now</button>
        </div>
      </div>
      
   </div>
  )
}

export default Promo