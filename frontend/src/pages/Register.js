import React, { useRef, useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import '../styles/register.css'
const Register = () => {
    const firstnameRef=useRef(null)
    const lasttnameRef=useRef(null)
    const emailRef=useRef(null)
    const passwordRef=useRef(null)
    const CpasswordRef=useRef(null)

    const  submitHandler=(e)=>{
        e.preventDefault()
        let registerValue={firtname:firstnameRef.current.value,lastname:lasttnameRef.current.value,email:emailRef.current.value,password:passwordRef.current.value}
        console.log(registerValue)
        // Clear input fields
        firstnameRef.current.value = "";
        lasttnameRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";
        CpasswordRef.current.value = "";
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
            <form action="" onSubmit={submitHandler} className='reg-form'>
                <div className='two-input-container'>
                    <div>
                        <label htmlFor="firstname">Firstname</label><br />
                        <input type="text" ref={firstnameRef} className='inputs' placeholder='firstname' id='firstname'/>
                    </div>
                   <div>
                    <label htmlFor="lastname">Lastname</label><br />
                    <input type="text" ref={lasttnameRef} className='inputs' placeholder='lastname' id='lastname'/>
                   </div>
                </div>
                    <div className=''>
                        <label htmlFor="email">email</label><br />
                        <input type="email" ref={emailRef} className='email-input inputs' placeholder='email' id='email'/>
                    </div>
                <div className='two-input-container'>
                    <div>
                        <label htmlFor="password">password</label><br />
                        <div className='p-input-container'><input ref={passwordRef} type={inputType} className='inputs p-input' placeholder='password' id='password'/>{eyeopen?<FaEye  onClick={()=>closeeyehandler()} />:<FaEyeSlash  onClick={()=>openeyehandler()}/>}</div> 
                    </div>
                    <div>
                        <label htmlFor="confirmpassword">confirmpassword</label><br />
                        <div className='p-input-container'><input ref={CpasswordRef}  type={inputType} className='inputs p-input' placeholder='confirm password' id='cpassword'/>{eyeopen?<FaEye  onClick={()=>closeeyehandler()}/>:<FaEyeSlash  onClick={()=>openeyehandler()}/>}</div>
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