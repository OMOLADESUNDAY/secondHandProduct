import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import "../styles/pageNavbar.css"
import Nav from 'react-bootstrap/Nav';
const PageNavbar = () => {
  const [activeKey, setActiveKey] = useState(null);

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <Accordion defaultActiveKey="0">
    {/* <Accordion.Item eventKey="0">
      <Accordion.Header > 
         Home
         <span className="changeAccordionIcon"  >
            {activeKey === "0" ? <FaMinus  onClick={() => handleToggle("0")} /> : <FaPlus  onClick={() => handleToggle("0")} />}
          </span>
      </Accordion.Header>
      <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Accordion.Body>
    </Accordion.Item> */}
    <Accordion.Item eventKey="1">
      <Accordion.Header>
        Shop
        <span className="changeAccordionIcon">
        {activeKey === "1" ? <FaMinus onClick={() => handleToggle("1")} /> : <FaPlus onClick={() => handleToggle("1")}/>}
        </span></Accordion.Header>
      <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="2">
      <Accordion.Header>
        Products
        <span className="changeAccordionIcon">
        {activeKey === "2" ? <FaMinus onClick={() => handleToggle("2")} /> : <FaPlus onClick={() => handleToggle("2")}/>}
        </span></Accordion.Header>
      <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="3">
      <Accordion.Header>
        Pages
        <span className="changeAccordionIcon">
        {activeKey === "3" ? <FaMinus onClick={() => handleToggle("3")} /> : <FaPlus onClick={() => handleToggle("3")}/>}
        </span></Accordion.Header>
      <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="4">
      <Accordion.Header>
        Accordion Item #2 
        <span className="changeAccordionIcon">
        {activeKey === "4" ? <FaMinus onClick={() => handleToggle("4")} /> : <FaPlus onClick={() => handleToggle("4")}/>}
        </span></Accordion.Header>
      <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="7">
      <Accordion.Header className='blognavsmall'>
        <Nav.Link className='blognavsmall'>Blogs</Nav.Link>
      </Accordion.Header>
    </Accordion.Item>
  </Accordion>
  )
}

export default PageNavbar