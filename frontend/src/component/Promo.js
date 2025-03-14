import React from 'react'
import promoImage from '../assest/carouselimage.png'
import promoImage2 from '../assest/carouselImage2.png'
const Promo = () => {
  return (
   <div className='promo-container'>
      <div className='left-promo'>
        <img src={promoImage} alt="promo" />
        <h6>SAVE UP TO 30%</h6>
        <h4>High-Quality Engine Auto Parts</h4>
        <button>shop now</button>
      </div>
      <div></div>
   </div>
  )
}

export default Promo