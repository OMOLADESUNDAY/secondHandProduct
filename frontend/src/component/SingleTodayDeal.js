import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import "../styles/todaydeal.css"
const SingleTodayDeal = ({todaydeal}) => {
    
  return (
    <div className='single-today-deal-container'>
    <div>
        <img src={todaydeal.image} className='todaydeal-img' alt={todaydeal.name} />
    </div>
    <div className='today-deal-text'>
        <h5>{todaydeal.name}</h5>
        <h6>${todaydeal.price}</h6>
        <div>
            {todaydeal.sold == null || todaydeal.sold >todaydeal.no_of_stock?<div><small>No track quantity</small></div>:<div className='sold-available'><small>sold:{todaydeal.sold}</small><small>available:{todaydeal.no_of_stock}</small></div>}
            <ProgressBar now={(todaydeal.sold/todaydeal.no_of_stock)*100} label={`${Math.floor((todaydeal.sold/todaydeal.no_of_stock)*100)}%`}   variant="danger" animated/>
        </div>
    </div>
</div>
  )
}

export default SingleTodayDeal