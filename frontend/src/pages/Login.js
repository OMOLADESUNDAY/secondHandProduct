import React, { useRef, useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import '../styles/register.css'
const Login = () => {
  
      const emailRef=useRef(null)
      const passwordRef=useRef(null)
  
      const  submitHandler=(e)=>{
          e.preventDefault()
         
          let registerValue={email:emailRef.current.value,password:passwordRef.current.value}
          localStorage.setItem('userToken',JSON.stringify(registerValue))
          console.log(registerValue)
          // Clear input fields  
          emailRef.current.value = "";
          passwordRef.current.value = "";
              }
  
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
               <form action="" onSubmit={submitHandler} className='reg-form login-form'>
                       <div className=''>
                           <label htmlFor="email" className='label'>Email</label><br />
                           <input type="email" ref={emailRef} className='email-input inputs' placeholder='email' id='email'/>
                       </div>
                       <div className=''>
                           <label htmlFor="email" className='label'>Password</label><br />
                            <div className='p-input-container-login'><input ref={passwordRef} type={inputType} className='inputs  p-input-login p-input' placeholder='password' id='password'/>{eyeopen?<FaEye  onClick={()=>closeeyehandler()} />:<FaEyeSlash  onClick={()=>openeyehandler()}/>}</div>
                       </div>
                      
                     
                   <div className='submit-btn-container'>
                        <button type='submit' className='reg-submit-btn'>submit</button>
                   </div>
               </form>
           </section>
       </div>
  )
}

export default Login