import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import "../styles/pageNavbar.css"
import Nav from 'react-bootstrap/Nav';

const Category = ({closeMenu}) => {
  
    return (
      <Accordion defaultActiveKey="0">
          <Accordion.Item>
        <Accordion.Header className='blognavsmall'>
          <Nav.Link className='blognavsmall'>Electronics</Nav.Link>
        </Accordion.Header>
      </Accordion.Item>
          <Accordion.Item>
        <Accordion.Header className='blognavsmall'>
          <Nav.Link className='blognavsmall'>Health Products</Nav.Link>
        </Accordion.Header>
      </Accordion.Item>
        <Accordion.Item>
        <Accordion.Header className='blognavsmall'>
          <Nav.Link className='blognavsmall'>Fashion</Nav.Link>
        </Accordion.Header>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Header className='blognavsmall'>
          <Nav.Link className='blognavsmall'>Auto Mobiles</Nav.Link>
        </Accordion.Header>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Header className='blognavsmall'>
          <Nav.Link className='blognavsmall'>Phones</Nav.Link>
        </Accordion.Header>
      </Accordion.Item>
          <Accordion.Item>
        <Accordion.Header className='blognavsmall'>
          <Nav.Link className='blognavsmall'>Books</Nav.Link>
        </Accordion.Header>
      </Accordion.Item>
        <Accordion.Item>
        <Accordion.Header className='blognavsmall'>
          <Nav.Link className='blognavsmall'>Shoes</Nav.Link>
        </Accordion.Header>
      </Accordion.Item>
    </Accordion>
    )
}

export default Category