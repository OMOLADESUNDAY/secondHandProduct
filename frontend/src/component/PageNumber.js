import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Nav from 'react-bootstrap/Nav';
import { RiShoppingBag4Line } from "react-icons/ri";
import Badge from 'react-bootstrap/Badge';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useNavbar } from '../context/NavbarContext';
import "../styles/pageNavbar.css";

const PageNavbar = ({isOpen}) => {
  const [activeKey, setActiveKey] = useState(null);
  const { closeMenu } = useNavbar();
  const { items = [] } = useCart();
  const navigate = useNavigate();

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  const handleLinkClick = () => {
    closeMenu();
    setActiveKey(null);
  };

  return (
    <Accordion activeKey={activeKey}>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          Shop
          <span className="changeAccordionIcon">
            {activeKey === "1" ? <FaMinus onClick={() => handleToggle("1")} /> : <FaPlus onClick={() => handleToggle("1")} />}
          </span>
        </Accordion.Header>
        <Accordion.Body>
          <Nav>
            {console.log("hey"+isOpen)}
            <Nav.Item>
              <Link className='nav-link' to='/category' onClick={handleLinkClick}>Category</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className='nav-link' to='/product' onClick={handleLinkClick}>Product</Link>
            </Nav.Item>
          </Nav>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>
          News
          <span className="changeAccordionIcon">
            {activeKey === "2" ? <FaMinus onClick={() => handleToggle("2")} /> : <FaPlus onClick={() => handleToggle("2")} />}
          </span>
        </Accordion.Header>
        <Accordion.Body>
          <Nav>
            <Link className='nav-link' to='/blog' onClick={handleLinkClick}>Blog</Link>
          </Nav>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>
          Pages
          <span className="changeAccordionIcon">
            {activeKey === "3" ? <FaMinus onClick={() => handleToggle("3")} /> : <FaPlus onClick={() => handleToggle("3")} />}
          </span>
        </Accordion.Header>
        <Accordion.Body>
          <Nav>
            <Link className='nav-link' to='/about' onClick={handleLinkClick}>About Us</Link>
            <Link className='nav-link' to='/contact' onClick={handleLinkClick}>Contact Us</Link>
            <Link className='nav-link' to='/termsandcondition' onClick={handleLinkClick}>Terms & Conditions</Link>
            <Link className='nav-link' to='/policies' onClick={handleLinkClick}>Policies</Link>
          </Nav>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item>
        <Accordion.Header className='blognavsmall'>
          <Nav.Link className='blognavsmall' onClick={() => {
            navigate('/cart');
            closeMenu();
          }}>
            <RiShoppingBag4Line className='searchNavmenuIcon' />
            <Badge bg='danger' className='badge'>{items.length}</Badge>
          </Nav.Link>
        </Accordion.Header>
      </Accordion.Item>
    </Accordion>
  );
};

export default PageNavbar;
