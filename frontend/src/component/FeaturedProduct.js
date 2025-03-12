import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../styles/featuredstyles.css'
import { products } from '../data';
import ProductCard from './ProductCard';

let featuredProduct= products.filter((singleproduct)=>singleproduct.category==="featured")
let fedProduct= products.filter((singleproduct)=>singleproduct.category==="auto mobile")
let fProduct= products.filter((singleproduct)=>singleproduct.category==="phones")
console.log(featuredProduct)
const FeaturedProduct = () => {
   
  return (
  
        <div className='topfeaturedproduct'>
            <div><h4>Featured Product</h4></div>
                <div>
                <Tabs defaultActiveKey="new" id="uncontrolled-tab-example" className="mb-3 features-tabs" >
                    <Tab eventKey="new" title="New" className='features-tab'>
                        {featuredProduct.map((singlefeaturedproduct)=>{
                            return(
                                <div key={singlefeaturedproduct.id} >
                                    <ProductCard singlefeaturedproduct={singlefeaturedproduct}/>
                                </div>
                            )
                        })}
                    </Tab>
                    <Tab eventKey="phones" title="phones" className='features-tab'>
                    {fProduct.map((singlefeaturedproduct)=>{
                            return(
                                <div key={singlefeaturedproduct.id} >
                                    <ProductCard singlefeaturedproduct={singlefeaturedproduct}/>
                                </div>
                            )
                        })}
                    </Tab>
                    <Tab eventKey="auto mobile" title="auto mobile" className='features-tab'>
                    {fedProduct.map((singlefeaturedproduct)=>{
                            return(
                                <div key={singlefeaturedproduct.id} >
                                    <ProductCard singlefeaturedproduct={singlefeaturedproduct}/>
                                </div>
                            )
                        })}
                    </Tab>
                </Tabs>
                </div>
               
        </div>
    
  )
}

export default FeaturedProduct