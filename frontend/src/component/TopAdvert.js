import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { AiOutlineTikTok } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { welcomeData } from '../data';
import NavDropdown from 'react-bootstrap/NavDropdown';
const TopAdvert = () => {
     // Initialize state with default title
  const [dropdownTitle, setDropdownTitle] = useState('United State USD $');

  // Function to handle item selection
  const handleSelect = (eventKey) => {
    setDropdownTitle(eventKey);
  };
  const [LanguageTitle, setLanguageTitle] = useState('English');
    return (
        <>
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="#home"><FaXTwitter /></Nav.Link>
                    <Nav.Link href="#features"><FaFacebook /></Nav.Link>
                    <Nav.Link href="#home"><IoLogoInstagram /></Nav.Link>
                    <Nav.Link href="#features"><AiOutlineTikTok /></Nav.Link>
                    <Nav.Link href="#features"><IoLogoLinkedin /></Nav.Link>
                </Nav>
                <Nav className="me-auto">
                <Nav.Link href="#features"> <p>{welcomeData}</p></Nav.Link>
                   
                </Nav>
                <Nav className="ms-auto">
                    <NavDropdown title={dropdownTitle}id="basic-nav-dropdown"onSelect={handleSelect}>
                        <NavDropdown.Item eventKey="Australia USD $">Australia USD $</NavDropdown.Item>
                        <NavDropdown.Item eventKey="Bangladesh USD $">Bangladesh USD $</NavDropdown.Item>
                        <NavDropdown.Item eventKey="Canada USD $">Canada USD $</NavDropdown.Item>
                        <NavDropdown.Item eventKey="New Zealand USD $">New Zealand USD $</NavDropdown.Item>
                        <NavDropdown.Item eventKey="United Kingdom USD $">United Kingdom USD $</NavDropdown.Item>
                        <NavDropdown.Item eventKey="United States USD $">United States USD $</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title={LanguageTitle} id="basic-nav-dropdown"onSelect={handleSelect}>
                        <NavDropdown.Item eventKey="Action">Action</NavDropdown.Item>
                        <NavDropdown.Item eventKey="Another action">
                        Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="Something">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="Separated link">
                        Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
          </Navbar>
          
        </>
      );
}

export default TopAdvert