import React, { useState } from 'react'
// import logo from "../assest/WhatsApp Image 2025-02-16 at 6.26.47 PM.jpeg"
import logo from "../assest/donzo-image.png"
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form'; 
import "../styles/searchnav.css"
import { CiSearch } from "react-icons/ci";
import { RiUser3Line } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import { RiShoppingBag4Line } from "react-icons/ri";
import { FaBars, FaTimes } from "react-icons/fa";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/esm/Tabs';
import PageNavbar from './PageNumber';
import NavLogs from './NavLogs';
import Category from './Category';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Badge from 'react-bootstrap/esm/Badge';
const SearchNav = () => {
  // const { items } = useCart();
  const { items = [] } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
const navigate=useNavigate()
  return (
    <>
    <Navbar expand="" >
      <Container className='con'>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className={`d-lg-none togg ${isOpen ? 'move-right' : ''}`} onClick={handleToggle}>
        {isOpen ? <FaTimes color="black" className='cancel ' size={24} /> : <FaBars color="black" size={24} />}
      </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav"  >
          <Nav className={isOpen?'real-menu':'moveout'} >
          <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="tabsContainer">
            <Tab eventKey="home" title="Home">
              <PageNavbar/>
              <NavLogs/>
            </Tab>
            <Tab eventKey="category" title="category">
             <Category/>
            </Tab>
          </Tabs>
        
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
              <div style={{position:'relative'}}>
              <RiShoppingBag4Line onClick={()=>navigate('/cart')} className='searchNavmenuIcon'/>
              <Badge bg='danger' className='badge'>{items.length}</Badge>
              </div>
              
            </div>
          </Nav>
      </Container>
    </Navbar>








    
    
  </>
  )
}

export default SearchNav