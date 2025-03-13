import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import "../styles/rating.css"
const StarRating = ({rating}) => {
  return (
    <div>
      <span className='star' >
        {rating >=1 ? <FaStar />:rating>=0.5?<FaStarHalf />:<FaRegStar />}
      </span>
      <span className='star' >
        {rating >=2 ? <FaStar />:rating>=1.5?<FaStarHalf />:<FaRegStar />}
      </span>
      <span className='star' >
        {rating >=3 ? <FaStar />:rating>=2.5?<FaStarHalf />:<FaRegStar />}
      </span>
      <span className='star'  >
        {rating >=4 ? <FaStar  />:rating>=3.5?<FaStarHalf />:<FaRegStar />}
      </span>
      <span className='star'  >
        {rating >=5 ? <FaStar />:rating>=4.5?<FaStarHalf />:<FaRegStar />}
      </span>
    </div>
  )
}

export default StarRating