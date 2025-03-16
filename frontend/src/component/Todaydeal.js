import React, { useEffect, useState } from 'react'
import { products } from '../data'
import '../styles/topdeal.css'
import SingleTodayDeal from './SingleTodayDeal';

const Todaydeal = () => {
  const [Tdeal, setTdeal] = useState([]);

  useEffect(() => {
    if (products.length === 0) return; // Ensure products exist

    let randomProduct = products[Math.floor(Math.random() * products.length)];
    const index = products.findIndex((product) => product.id === randomProduct.id);

    let deals;
    if (index + 4 > products.length) {
      deals = products.slice(Math.max(0, index - 4), index);
    } else {
      deals = products.slice(index, index + 4);
    }

    setTdeal(deals);
  },[]); 
    return (
    <div className='today-deal-container'>
        <div> <h3>Deals of the day</h3></div>
       <section className='today-deal-item-contianer'>
        {Tdeal.map((singledeal)=>{
          return(
              <SingleTodayDeal  className='single-today-deal-container' key={singledeal.id} todaydeal={singledeal}/>
          )
        })}
       </section>
    </div>
  )
}

export default Todaydeal