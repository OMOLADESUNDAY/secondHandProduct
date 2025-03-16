import React, { useState, useRef, useEffect  } from 'react'
import '../styles/navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import Nav from 'react-bootstrap/Nav';
import { FiPhone } from "react-icons/fi";
const Navbarr = () => {
  const [moveOut,setMoveout]=useState(false)
  const togglerRef = useRef(null)
  const toggleHandler = () => {
    setMoveout((prev) => !prev); // Toggle state
  };
  const handleClickOutside = (event) => {
    // Check if click is outside the toggler
    if (togglerRef.current && !togglerRef.current.contains(event.target)) {
      setMoveout(false);
    }
  };

  useEffect(() => {
    // Add event listener to detect clicks outside
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup event listener on unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <nav className='navbarContainer'>
      <aside className='navbarleftside' onClick={toggleHandler}><GiHamburgerMenu className='categorymenu'/><span>All Categories</span></aside>
      <section>
        <article  ref={togglerRef} className={moveOut?'moveout':'outerCategoryContainer'}>
              <Nav className='outerCategoryNav'>
            <Nav.Item>
              <Nav.Link href="/home">Electronics</Nav.Link>
              <hr className='horiLine'/>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Health Products</Nav.Link>
              <hr className='horiLine'/>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link >Fashion</Nav.Link>
              <hr className='horiLine' />
            </Nav.Item>
            <Nav.Item>
              <Nav.Link to=''>Auto Mobiles</Nav.Link>
              <hr className='horiLine'/>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link >Phones</Nav.Link>
              <hr className='horiLine'/>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Books</Nav.Link>
              <hr className='horiLine'/>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link to=''>Shoes</Nav.Link>
              <hr className='horiLine'/>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link to=''>All Categories</Nav.Link>
            </Nav.Item>
          </Nav>
        </article>
      <Nav className='navbar-ul'>
      <Nav.Item >
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Shop</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link >Category</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to=''>Products</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link >Blog</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Pages</Nav.Link>
      </Nav.Item>
    </Nav>
      </section>
      <aside className='navbarRight'>
      <FiPhone /><span><b>Call us:</b>+2347069258526</span>
      </aside>
  </nav>
  );
}


export default Navbarr