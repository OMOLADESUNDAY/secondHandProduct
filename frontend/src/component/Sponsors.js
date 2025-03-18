import React from 'react'
import sponsorslogo from '../assest/adidas-removebg-preview.png'
import sponsorslogo2 from "../assest/bentley-removebg-preview.png"
import sponsorslogo3 from "../assest/chevrolet.png"
import sponsorslogo4 from "../assest/jaguar-removebg-preview.png"
import sponsorslogo5 from "../assest/nike-removebg-preview.png"
import sponsorslogo6 from "../assest/sony-removebg-preview.png"
import '../styles/todaydeal.css'
const Sponsors = () => {
  const sponsorsdata=[sponsorslogo,sponsorslogo2,sponsorslogo3,sponsorslogo4,sponsorslogo5,sponsorslogo6]
  return (
    <div className='sponsor-container'>
      {sponsorsdata.map((sponsorimage)=>{
        return(
          <div key={sponsorimage} className='sponsor-img-container'>
            <img src={sponsorimage} alt="sponsorimages" className='sponsor-img' />
          </div>
        )
      })}
    </div>
  )
}

export default Sponsors