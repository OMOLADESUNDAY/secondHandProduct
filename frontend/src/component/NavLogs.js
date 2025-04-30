import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { FaUser } from "react-icons/fa";
import { useNavbar } from '../context/NavbarContext';
import '../styles/navlogin.css';

const NavLogs = () => {
  const { closeMenu } = useNavbar();

  return (
    <div>
      <h4>My account</h4>
      <Nav.Link href="#home" onClick={closeMenu} className='btn logbtn navlogin'><FaUser />Log in</Nav.Link>
      <Nav.Link href="#link" onClick={closeMenu} className='btn logbtn'>Create account</Nav.Link>
    </div>
  );
};

export default NavLogs;
