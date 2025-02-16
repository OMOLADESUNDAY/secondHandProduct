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

const SearchNav = () => {
  return (
    <>
    <Navbar  className='searchNavContainer'>
      <Container className='searchNavWrapper'>
          <Nav className="me-auto ">
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
          <Nav className="ms-auto leftTopAd">
             
          </Nav>
      </Container>
    </Navbar>
    
  </>
  )
}

export default SearchNav