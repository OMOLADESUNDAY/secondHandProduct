import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { FaUser } from "react-icons/fa";
import '../styles/navlogin.css'
const NavLogs = () => {
  return (
    <div>
        <h4>My account</h4>
        <Nav.Link href="#home" className='btn logbtn navlogin'><FaUser />Log in</Nav.Link>
        <Nav.Link href="#link"  className='btn logbtn'>Create account</Nav.Link>
    </div>
  )
}

export default NavLogs