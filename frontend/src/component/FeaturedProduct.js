import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../styles/featuredstyles.css'
import { products } from '../data';
import ProductCard from './ProductCard';
let featuredProduct= products.filter((singleproduct)=>singleproduct.category==="featured")
console.log(featuredProduct)
const FeaturedProduct = () => {
   
  return (
  
        <div className='topfeaturedproduct'>
            <div><h4>Featured Product</h4></div>
                <div>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 features-tabs" >
                    <Tab eventKey="home" title="Home" className='features-tab'>
                        {featuredProduct.map((singlefeaturedproduct)=>{
                            return(
                                <div key={singlefeaturedproduct.id}>
                                    <ProductCard singlefeaturedproduct={singlefeaturedproduct}/>
                                </div>
                            )
                        })}
                    </Tab>
                    <Tab eventKey="profile" title="Profile" className='features-tab'>
                        Tab content for Profile
                    </Tab>
                    <Tab eventKey="contact" title="Contact" className='features-tab'>
                        Tab content for Contact
                    </Tab>
                </Tabs>
                </div>
               
        </div>
    
  )
}

export default FeaturedProduct