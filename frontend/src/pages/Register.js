import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
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
    <div>
        <h4>Register</h4>
        <section>
            <form action="">
                <div>
                    <input type="text" placeholder='firstname' id='firstname'/>
                        <label htmlFor="firstname">Firstname</label>
                    <input type="text" placeholder='lastname' id='lastname'/>
                        <label htmlFor="lastname">Lastname</label>
                </div>
                    <input type="email" placeholder='email' id='email'/>
                    <label htmlFor="email">email</label>
                <div>
                   <div><input type={inputType} placeholder='password' id='password'/>{eyeopen?<FaEye  onClick={()=>closeeyehandler()} />:<FaEyeSlash  onClick={()=>openeyehandler()}/>}</div> 
                    <label htmlFor="password">password</label>   
                    <div><input type={inputType} placeholder='confirm password' id='password'/>{eyeopen?<FaEye  onClick={()=>closeeyehandler()}/>:<FaEyeSlash  onClick={()=>openeyehandler()}/>}</div>
                    <label htmlFor="confirmpassword">confirmpassword</label>
                </div>
            <button type='submit'>submit</button>
            </form>
        </section>
    </div>
  )
}

export default Register