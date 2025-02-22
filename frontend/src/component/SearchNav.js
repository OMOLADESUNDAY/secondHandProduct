import React from 'react'
import logo from "../assest/WhatsApp Image 2025-02-16 at 6.26.47 PM.jpeg"
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'; 
import "../styles/searchnav.css"
import { CiSearch } from "react-icons/ci";
import { RiUser3Line } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import { RiShoppingBag4Line } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
const SearchNav = () => {
  return (
    <>
    <Navbar expand="" >
      <Container className='con'>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="d-lg-none"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto real-menu">
           <FaTimes className='cancel-menu'/>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
          <Nav className="me-auto logoCon">
          <Image src={logo}  className='logoImage'/>
          </Nav>
          <Nav className="searchNavCenter" >
          <Form className="d-flex searchForm">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 "
              aria-label="Search"
            />
           <CiSearch className='searchNavIcon'/>
          </Form>
          </Nav>
          
          <Nav>
        
          <div className='leftTopAdvert'>
          <CiSearch className='popsearchNavIcon'/>
              <RiUser3Line className='searchNavmenuIcon'/>
              <FiHeart className='searchNavmenuIcon' />
              <RiShoppingBag4Line className='searchNavmenuIcon'/>
            </div>
          </Nav>
           
        
      </Container>
    </Navbar>








    
    
  </>
  )
}

export default SearchNav