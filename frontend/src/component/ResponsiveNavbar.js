import React, { useState } from 'react';
import { FaBars, FaTimes, FaUser, FaPlus, FaMinus } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import { RiUser3Line, RiShoppingBag4Line } from 'react-icons/ri';
import { FiHeart } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assest/donzo-image.png';
import '../styles/responsiveNavbar.css';

const ResponsiveNavbar = ({ cartItemsCount = 0 }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [activeAccordion, setActiveAccordion] = useState(null);
  const navigate = useNavigate();

  const toggleAccordion = (key) => {
    setActiveAccordion(activeAccordion === key ? null : key);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setSearchVisible(false);
    setActiveAccordion(null);
  };

  const HomeLinks = (
    <>
      <div className="accordion-item">
        <div className="accordion-header" onClick={() => toggleAccordion('shop')}>
          Shop {activeAccordion === 'shop' ? <FaMinus /> : <FaPlus />}
        </div>
        {activeAccordion === 'shop' && (
          <div className="accordion-body">
            <Link to="/category" onClick={closeMenu}>Category</Link>
            <Link to="/product" onClick={closeMenu}>Product</Link>
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div className="accordion-header" onClick={() => toggleAccordion('news')}>
          News {activeAccordion === 'news' ? <FaMinus /> : <FaPlus />}
        </div>
        {activeAccordion === 'news' && (
          <div className="accordion-body">
            <Link to="/blog" onClick={closeMenu}>Blog</Link>
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div className="accordion-header" onClick={() => toggleAccordion('pages')}>
          Pages {activeAccordion === 'pages' ? <FaMinus /> : <FaPlus />}
        </div>
        {activeAccordion === 'pages' && (
          <div className="accordion-body">
            <Link to="/about" onClick={closeMenu}>About Us</Link>
            <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
            <Link to="/termsandcondition" onClick={closeMenu}>Terms & Conditions</Link>
            <Link to="/policies" onClick={closeMenu}>Policies</Link>
          </div>
        )}
      </div>

      <div className="accordion-body">
        <Link to="/cart" onClick={closeMenu} >
        <div className="cart-link">
        <RiShoppingBag4Line /> <span className="cart-badge">{cartItemsCount}</span>
        </div>
         
        </Link>
      </div>

      <h4>My Account</h4>
      <Link to="/login" onClick={closeMenu}><FaUser /> Log in</Link>
      <Link to="/signup" onClick={closeMenu}>Create account</Link>
    </>
  );

  const CategoryLinks = (
    <>
      {['Electronics', 'Health Products', 'Fashion', 'Auto Mobiles', 'Phones', 'Books', 'Shoes'].map((item, index) => (
        <div key={index}>
          <Link to={`/category/${item.toLowerCase().replace(/\s/g, '-')}`} onClick={closeMenu}>
            {item}
          </Link>
        </div>
      ))}
    </>
  );

  return (
    <header className="navbar-container">
      <div className="nav-top">
        <img src={logo} alt="Logo" className="logo" />

        <div className="desktop-search">
          <input type="text" placeholder="Search..." />
          <CiSearch />
        </div>

        <div className="icons">
          <CiSearch className="mobile-search-toggle" onClick={() => setSearchVisible(!searchVisible)} />
          <RiUser3Line />
          <FiHeart />
          <div onClick={() => navigate('/cart')} className="cart-icon">
            <RiShoppingBag4Line />
            <span className="cart-badge">{cartItemsCount}</span>
          </div>
        </div>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {searchVisible && (
        <div className="mobile-search">
          <input type="text" placeholder="Search..." />
        </div>
      )}

      {menuOpen && (
        <div className="mobile-menu">
          <div className="tabs">
            <button onClick={() => setActiveTab('home')} className={activeTab === 'home' ? 'active' : ''}>Home</button>
            <button onClick={() => setActiveTab('category')} className={activeTab === 'category' ? 'active' : ''}>Category</button>
          </div>

          <div className="tab-content">
            {activeTab === 'home' ? HomeLinks : CategoryLinks}
          </div>
        </div>
      )}
    </header>
  );
};

export default ResponsiveNavbar;