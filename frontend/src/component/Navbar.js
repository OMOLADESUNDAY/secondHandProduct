import React, { useState } from 'react'
import '../styles/navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import Nav from 'react-bootstrap/Nav';
import { FiPhone } from "react-icons/fi";
const Navbarr = () => {
  const [moveOut,setMoveout]=useState(false)
  return (
    <nav className='navbarContainer'>
      <aside className='navbarleftside'><GiHamburgerMenu /><span>All Categories</span></aside>
      <section>
        <article className='outerCategoryContainer'>
              <Nav>
            <Nav.Item>
              <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link >Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link to=''>Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link >Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Link</Nav.Link>
            </Nav.Item>
          </Nav>
        </article>
      <Nav>
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link >Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to=''>Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link >Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Link</Nav.Link>
      </Nav.Item>
    </Nav>
      </section>
      <aside>
      <FiPhone /><span><b>Call us:</b>+2347069258526</span>
      </aside>
  </nav>
  );
}


export default Navbarr