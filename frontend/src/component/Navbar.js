import React from 'react'
import '../styles/navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import Nav from 'react-bootstrap/Nav';
const Navbarr = () => {
  return (
    <nav className='navbarContainer'>
      <aside className='navbarleftside'><GiHamburgerMenu /><span>All Categories</span></aside>
      <section>
      <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
      </section>
      <aside></aside>
  </nav>
  );
}


export default Navbarr