import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import "../styles/pageNavbar.css"
import Nav from 'react-bootstrap/Nav';
import { MdOutlineShoppingCart } from "react-icons/md";
import Badge from 'react-bootstrap/Badge';
const Category = () => {
    const [activeKey, setActiveKey] = useState(null);

    const handleToggle = (key) => {
      setActiveKey(activeKey === key ? null : key);
    };
  
    return (
      <Accordion defaultActiveKey="0">
          <Accordion.Item>
        <Accordion.Header className='blognavsmall'>
          <Nav.Link className='blognavsmall'>Blogs</Nav.Link>
        </Accordion.Header>
      </Accordion.Item>
          <Accordion.Item>
        <Accordion.Header className='blognavsmall'>
          <Nav.Link className='blognavsmall'>Blogs</Nav.Link>
        </Accordion.Header>
      </Accordion.Item>
        <Accordion.Item>
        <Accordion.Header className='blognavsmall'>
          <Nav.Link className='blognavsmall'>Blogs</Nav.Link>
        </Accordion.Header>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Header className='blognavsmall'>
          <Nav.Link className='blognavsmall'>Blogs</Nav.Link>
        </Accordion.Header>
      </Accordion.Item>
     
    </Accordion>
    )
}

export default Category