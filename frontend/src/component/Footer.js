import React, { useEffect, useState } from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { AiOutlineTikTok } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import {Link} from 'react-router-dom'
import { MdOutlineMail } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import "../styles/footer.css"

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); 
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleAccordion = (index) => {
    if (isMobile) {
      setOpenIndex(openIndex === index ? null : index);
    }
  };
 
  return (
    <div className="footer-container">
    {/* About Us */}
    <div className="footer-sections">
      <div className="footer-tops" onClick={() => toggleAccordion(0)}>
        <h5>About Us</h5>
        {isMobile && (openIndex === 0 ? <FaMinus /> : <FaPlus className="accordsign" />)}
      </div>
      {(openIndex === 0 || !isMobile) && (
        <article>
          <p>The exciting contemporary brand Suruchi is known for its attention to detail and premium graphics.</p>
          <div className="footer-social">
            <a href="#home"><FaXTwitter /></a>
            <a href="#features"><FaFacebook /></a>
            <a href="#home"><IoLogoInstagram /></a>
            <a href="#features"><AiOutlineTikTok /></a>
            <a href="#features"><IoLogoLinkedin /></a>
          </div>
        </article>
      )}
    </div>

    {/* Quick Links */}
    <div className="footer-sections">
      <div className="footer-tops" onClick={() => toggleAccordion(1)}>
        <h5>Quick Links</h5>
        {isMobile && (openIndex === 1 ? <FaMinus /> : <FaPlus className="accordsign" />)}
      </div>
      {(openIndex === 1 || !isMobile) && (
        <div className="foot-link-container">
          <a href="#home">FAQ</a>
          <a href="#features">Find Store Location</a>
          <a href="#home">Privacy Policy</a>
          <a href="#features">Refund Policy</a>
          <a href="#features">Terms of Service</a>
        </div>
      )}
    </div>

    {/* Company */}
    <div className="footer-sections">
      <div className="footer-tops" onClick={() => toggleAccordion(2)}>
        <h5>Company</h5>
        {isMobile && (openIndex === 2 ? <FaMinus /> : <FaPlus className="accordsign" />)}
      </div>
      {(openIndex === 2 || !isMobile) && (
        <div className="foot-link-container">
          <a href="#home">About Us</a>
          <a href="#features">Contact Us</a>
          <a href="#home">My Account</a>
          <a href="#features">Blog</a>
          <a href="#features">Wishlist</a>
        </div>
      )}
    </div>

    {/* Newsletter */}
    <div className="footer-sections">
      <div className="footer-tops" onClick={() => toggleAccordion(3)}>
        <h5>Newsletter</h5>
        {isMobile && (openIndex === 3 ? <FaMinus /> : <FaPlus className="accordsign" />)}
      </div>
      {(openIndex === 3 || !isMobile) && (
        <>
          <p>The exciting contemporary brand Suruchi is known for its attention to detail and premium graphics.</p>
          <form className="me-auto leftTopAd">
            <span className="newsletter-container">
              <MdOutlineMail className="emailicon" />
              <input
                className="newsletterinput"
                type="email"
                placeholder="Enter Your Email"
              />
            </span>
          </form>
        </>
      )}
    </div>
  </div>
  )
}

export default Footer