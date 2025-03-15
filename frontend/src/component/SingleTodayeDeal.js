import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
const SingleTodayeDeal = ({todaydeal}) => {
  return (
    <div className='single-today-deal-container'>
        <div>
            <img src={todaydeal.image} alt={todaydeal.name} />
        </div>
        <div>
            <h5>{todaydeal.name}</h5>
            <h6>{todaydeal.price}</h6>
            <div>
                {todaydeal.sold === null?<div><small>No track quantity</small></div>:<div><small>sold:{}</small><small>available:{}</small></div>}
                <ProgressBar now={todaydeal.sold} label={`${todaydeal.sold}%`} visuallyHidden />
            </div>
        </div>
    </div>
  )
}

export default SingleTodayeDeal