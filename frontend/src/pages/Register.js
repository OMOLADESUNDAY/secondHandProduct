import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import '../styles/register.css'
const Register = () => {
    const [eyeopen,setEyeOpen]=useState(false)
    const [inputType,setInputType]=useState('password')

    const openeyehandler=()=>{
        setEyeOpen(true)
        setInputType('text')
    }
    const closeeyehandler=()=>{
        setEyeOpen(false)
        setInputType('password')
    }
  return (
    <div className='register-container'>
        <h4 className='reg-txt'>Register</h4>
        <section className='register-wrapper'>
            <form action="" className='reg-form'>
                <div className='two-input-container'>
                    <div>
                        <label htmlFor="firstname">Firstname</label><br />
                        <input type="text" className='inputs' placeholder='firstname' id='firstname'/>
                    </div>
                   <div>
                    <label htmlFor="lastname">Lastname</label><br />
                    <input type="text" className='inputs' placeholder='lastname' id='lastname'/>
                   </div>
                </div>
                    <div className=''>
                        <label htmlFor="email">email</label><br />
                        <input type="email" className='email-input inputs' placeholder='email' id='email'/>
                    </div>
                <div className='two-input-container'>
                    <div>
                        <label htmlFor="password">password</label><br />
                        <div className='p-input-container'><input type={inputType} className='inputs p-input' placeholder='password' id='password'/>{eyeopen?<FaEye  onClick={()=>closeeyehandler()} />:<FaEyeSlash  onClick={()=>openeyehandler()}/>}</div> 
                    </div>
                    <div>
                        <label htmlFor="confirmpassword">confirmpassword</label><br />
                        <div className='p-input-container'><input type={inputType} className='inputs p-input' placeholder='confirm password' id='password'/>{eyeopen?<FaEye  onClick={()=>closeeyehandler()}/>:<FaEyeSlash  onClick={()=>openeyehandler()}/>}</div>
                    </div>

                </div>
                <div className='submit-btn-container'>
                     <button type='submit' className='reg-submit-btn'>submit</button>
                </div>
               
            </form>
        </section>
    </div>
  )
}

export default Register