import React, { useState } from 'react'
import { GoQuestion } from "react-icons/go";
import '../styles/filter.css'
const Filter = () => {
    const [hover,setHover]=useState(false)
    const [producttypeMessage,setProducttypeMessage]=useState('')
    const [brandMessage,setBrandMessage]=useState('')
    const [colorMessage,setColorMessage]=useState('')
    const displayHover=(message)=>{
        setHover(true)
        if(message === "product type"){
            setProducttypeMessage(message)
            setBrandMessage('')
            setColorMessage('')
        }
        if(message === "brand"){
            setProducttypeMessage('')
            setBrandMessage(message)
            setColorMessage('')
        }
        if(message === "color"){
            setProducttypeMessage('')
            setBrandMessage('')
            setColorMessage(message)
        }
       
        // setMessage(message)
        setTimeout(()=>{
            setHover(false)
        },1500)
    }
   
    
  return (
    <div>
        <h4>Advanced Search Filter</h4>
        <form className=''>
            <div className='filtertext'>
                <small>product type</small>
                <GoQuestion  onMouseOver={()=>displayHover('product type')}/>
                <small className={hover?'hovermessage':'rmhover'}>{producttypeMessage}</small>
            </div>
            <div className='filterSelectContainer'>
                <select className='filterSelect'>
                    <option value=""></option>
                    <option value="Toyota">Toyota</option>
                </select>
            </div>

            <div className='filtertext'>
                <small>brand</small>
                <GoQuestion onMouseOver={()=>displayHover('brand')}/>
                <small className={hover?'hovermessage':'rmhover'}>{brandMessage}</small>
            </div>
            <div className='filterSelectContainer'>
                <select className='filterSelect'>
                    <option value=""></option>
                    <option value="Toyota">Toyota</option>
                </select>
            </div>

            <div className='filtertext'>
                <small>color</small>
                <GoQuestion onMouseOver={()=>displayHover('color')} />
                <small className={hover?'hovermessage':'rmhover'}>{colorMessage}</small>
            </div>
            <div className='filterSelectContainer'>
                <select className='filterSelect'>
                    <option value=""></option>
                    <option value="Toyota">Toyota</option>
                </select>
            </div>
            <div className='filter-search-btn-container'>
            <button className='filter-search-btn'>Search</button>
            </div>
           
        </form>
    </div>
  )
}

export default Filter