import React from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
const Register = () => {
    const 
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
                   <div><input type="password" placeholder='password' id='password'/><FaEye /><FaEyeSlash /></div> 
                    <label htmlFor="password">password</label>   
                    <div><input type="password" placeholder='confirm password' id='password'/></div>
                    <label htmlFor="confirmpassword">confirmpassword</label>
                </div>
            <button type='submit'>submit</button>
            </form>
        </section>
    </div>
  )
}

export default Register