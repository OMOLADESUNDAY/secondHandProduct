import React, { useEffect, useState } from 'react'
import { products } from '../data'
import '../styles/topdeal.css'
import SingleTodayeDeal from './singleTodayeDeal'
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
       <section>
        {Tdeal.map((singledeal)=>{
          return(
            <div key={singledeal.id}>
              <div>{singledeal}</div>
              <SingleTodayeDeal todaydeal={singledeal}/>
            </div>
          )
        })}
       </section>
    </div>
  )
}

export default Todaydeal