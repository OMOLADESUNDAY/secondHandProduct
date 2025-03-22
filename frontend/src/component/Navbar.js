import React, { useState, useRef, useEffect  } from 'react'
import '../styles/navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import Nav from 'react-bootstrap/Nav';
import { FiPhone } from "react-icons/fi";
import { Link } from 'react-router-dom';
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
              <Link className='nav-link' href="/home">Electronics</Link>
              <hr className='horiLine'/>
            </Nav.Item>
            <Nav.Item>
              <Link className='nav-link'>Health Products</Link>
              <hr className='horiLine'/>
            </Nav.Item>
            <Nav.Item>
              <Link className='nav-link'>Fashion</Link>
              <hr className='horiLine' />
            </Nav.Item>
            <Nav.Item>
              <Link className='nav-link' to=''>Auto Mobiles</Link>
              <hr className='horiLine'/>
            </Nav.Item>
            <Nav.Item>
              <Link className='nav-link' >Phones</Link>
              <hr className='horiLine'/>
            </Nav.Item>
            <Nav.Item>
              <Link className='nav-link'>Books</Link>
              <hr className='horiLine'/>
            </Nav.Item>
            <Nav.Item>
              <Link className='nav-link' to=''>Shoes</Link>
              <hr className='horiLine'/>
            </Nav.Item>
            <Nav.Item>
              <Link className='nav-link' to=''>All Categories</Link>
            </Nav.Item>
          </Nav>
        </article>
      <Nav className='navbar-ul'>
      <Nav.Item >
        <Link className='nav-link' to="/">Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className='nav-link' to="/shop">Shop</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className='nav-link' to="/category">Category</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className='nav-link' to='/Product'>Products</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className='nav-link' to='/blog'>Blog</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className='nav-link'>Pages</Link>
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