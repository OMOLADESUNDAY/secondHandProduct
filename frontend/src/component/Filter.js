import React, { useState } from 'react'
import { GoQuestion } from "react-icons/go";
import '../styles/filter.css'
const Filter = () => {
    const [hover,setHover]=useState(false)
  return (
    <div>
        <h4>Advanced Search Filter</h4>
        <form className=''>
            <div className='filtertext'>
                <small>product type</small>
                <GoQuestion />
                <small className={hover?'hovermessage':'rmhover'}>product type</small>
            </div>
            <div className='filterSelectContainer'>
                <select className='filterSelect'>
                    <option value=""></option>
                    <option value="Toyota">Toyota</option>
                </select>
            </div>

            <div className='filtertext'>
                <small>product type</small>
                <GoQuestion />
            </div>
            <div className='filterSelectContainer'>
                <select className='filterSelect'>
                    <option value=""></option>
                    <option value="Toyota">Toyota</option>
                </select>
            </div>

            <div className='filtertext'>
                <small>product type</small>
                <GoQuestion />
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