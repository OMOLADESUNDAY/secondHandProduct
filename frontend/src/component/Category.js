import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';
import { useNavbar } from '../context/NavbarContext';
import "../styles/pageNavbar.css";

const Category = () => {
  const { closeMenu } = useNavbar();

  return (
    <Accordion defaultActiveKey="0">
      {["Electronics", "Health Products", "Fashion", "Auto Mobiles", "Phones", "Books", "Shoes"].map((item, index) => (
        <Accordion.Item key={index}>
          <Accordion.Header className='blognavsmall'>
            <Nav.Link className='blognavsmall' onClick={closeMenu}>{item}</Nav.Link>
          </Accordion.Header>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default Category;
