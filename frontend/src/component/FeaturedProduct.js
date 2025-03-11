import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../styles/featuredstyles.css'
const FeaturedProduct = () => {
  return (
  
        <div className='topfeaturedproduct'>
                <h4>Featured Product</h4>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 features-tabs" >
                <Tab eventKey="home" title="Home" className='features-tab'>
                    Tab content for Home
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    Tab content for Profile
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                    Tab content for Contact
                </Tab>
             </Tabs>
        </div>
    
  )
}

export default FeaturedProduct