import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../styles/featuredstyles.css'
import { products } from '../data';
import ProductCard from './ProductCard';

let featuredProduct= products.filter((singleproduct)=>singleproduct.category==="featured")
let automobile= products.filter((singleproduct)=>singleproduct.category==="auto mobile")
let phone= products.filter((singleproduct)=>singleproduct.category==="phones")
console.log(featuredProduct)
const FeaturedProduct = () => {
   const [activeTab,setActiveTab]=useState('tab1')
  return (
        <div >
         <section className="tabs-container">
         <div className='feature-text'><h4>Featured Product</h4></div>
         <div className="tabs">
        <button className={activeTab === "tab1" ? "active" : ""} onClick={() => setActiveTab("tab1")}>
          New
        </button>
        <button className={activeTab === "tab2" ? "active" : ""} onClick={() => setActiveTab("tab2")}>
          Phones
        </button>
        <button className={activeTab === "tab3" ? "active" : ""} onClick={() => setActiveTab("tab3")}>
          Auto Mobile
        </button>
      </div>
        </section>   
      
      <div className="tab-content">
        {activeTab === "tab1" ? <div className="content">
            {featuredProduct.map((singlefeaturedproduct)=>{
                return(
                <div key={singlefeaturedproduct.id} >
                     <ProductCard singlefeaturedproduct={singlefeaturedproduct}/>
                </div>
                             )
            })}</div>:''}
        {activeTab === "tab2" ? <div className="content">
            {phone.map((singlefeaturedproduct)=>{
                return(
                <div key={singlefeaturedproduct.id} >
                     <ProductCard singlefeaturedproduct={singlefeaturedproduct}/>
                </div>
                             )
            })}
            
            </div>:''}
        {activeTab === "tab3" ? <div className="content">
            {automobile.map((singlefeaturedproduct)=>{
                return(
                <div key={singlefeaturedproduct.id} >
                     <ProductCard singlefeaturedproduct={singlefeaturedproduct}/>
                </div>
                  )
            })}
            </div>:''}
      </div>
    </div>
    
  )
}

export default FeaturedProduct