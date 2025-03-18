import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import "../styles/faq.css"
const Faq = () => {
    const [activeKey, setActiveKey] = useState(null);
  
    const handleToggle = (key) => {
      setActiveKey(activeKey === key ? null : key);
    };
  return (
    <section className='faq-container'>
      <h2 className='faq-txt'>FAQ</h2>
      <Accordion>
        <Accordion.Item eventKey="1">
        <Accordion.Header>
        What payment methods do you accept?
        <span className="changeAccordionIcon">
        {activeKey === "1" ? <FaMinus onClick={() => handleToggle("1")} /> : <FaPlus onClick={() => handleToggle("1")}/>}
        </span></Accordion.Header>
      <Accordion.Body>
        We accept credit/debit cards (Visa, Mastercard, AMEX), PayPal, Apple Pay, Google Pay, and Gift Cards
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="2">
      <Accordion.Header>
      How long does shipping take?
        <span className="changeAccordionIcon">
        {activeKey === "2" ? <FaMinus onClick={() => handleToggle("2")} /> : <FaPlus onClick={() => handleToggle("2")}/>}
        </span></Accordion.Header>
      <Accordion.Body>
      How long does shipping take?
       <ul>
        <li>Standard Shipping: 5-7 business days</li>
        <li>Express Shipping: 2-3 business days</li>
        <li>International Shipping: 7-14 business days</li>
       </ul>
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="3">
      <Accordion.Header>
      What is your return policy?
        <span className="changeAccordionIcon">
        {activeKey === "3" ? <FaMinus onClick={() => handleToggle("3")} /> : <FaPlus onClick={() => handleToggle("3")}/>}
        </span></Accordion.Header>
      <Accordion.Body>
      We offer a 30-day hassle-free return policy. If you're not satisfied, return the item in its original condition for a full refund or exchange.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="4">
      <Accordion.Header>
      How do I track my order? 
        <span className="changeAccordionIcon">
        {activeKey === "4" ? <FaMinus onClick={() => handleToggle("4")} /> : <FaPlus onClick={() => handleToggle("4")}/>}
        </span></Accordion.Header>
      <Accordion.Body>
      Once your order is shipped, you'll receive an email with a tracking link to monitor your delivery in real-time.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="5">
      <Accordion.Header>
      Do you offer product warranties? 
        <span className="changeAccordionIcon">
        {activeKey === "4" ? <FaMinus onClick={() => handleToggle("4")} /> : <FaPlus onClick={() => handleToggle("4")}/>}
        </span></Accordion.Header>
      <Accordion.Body>
      Yes! Our products come with a 1-year warranty covering manufacturing defects. Extended warranty options may be available at checkout.
      </Accordion.Body>
    </Accordion.Item>
   
  </Accordion>
    </section>
    
  )
}
export default Faq