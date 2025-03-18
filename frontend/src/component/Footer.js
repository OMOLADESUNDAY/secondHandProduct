import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { AiOutlineTikTok } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import {Link} from 'react-router-dom'
import "../styles/footer.css"

const Footer = () => {
  return (
   <div>
      <div>
        <h3>About Us</h3>
        <p>The exciting contemporary brand Suruchi is known for its attention to detail and premium graphics.</p>
        <div className="me-auto leftTopAd">
            <Link href="#home"><FaXTwitter /></Link>
            <Link href="#features"><FaFacebook /></Link>
            <Link href="#home"><IoLogoInstagram /></Link>
            <Link href="#features"><AiOutlineTikTok /></Link>
            <Link href="#features"><IoLogoLinkedin /></Link>
        </div>
      </div>

      <div>
        <h3>Quick Links</h3>
        <div className="me-auto leftTopAd">
            <Link href="#home">Faq</Link>
            <Link href="#features">Find Store Location</Link>
            <Link href="#home">Privacy Policy</Link>
            <Link href="#features">Refund Policy</Link>
            <Link href="#features">Terms of Service</Link>
        </div>
      </div>

      <div>
      <h3>Company</h3>
        <div className="me-auto leftTopAd">
            <Link href="#home">About Us</Link>
            <Link href="#features">Contact Us</Link>
            <Link href="#home">My Account</Link>
            <Link href="#features">blog</Link>
            <Link href="#features">wishlist</Link>
        </div>
      </div>

      <div>
        <h3>About Us</h3>
        <p>The exciting contemporary brand Suruchi is known for its attention to detail and premium graphics.</p>
        <div className="me-auto leftTopAd">
            <Link href="#home"><FaXTwitter /></Link>
            <Link href="#features"><FaFacebook /></Link>
            <Link href="#home"><IoLogoInstagram /></Link>
            <Link href="#features"><AiOutlineTikTok /></Link>
            <Link href="#features"><IoLogoLinkedin /></Link>
        </div>
      </div>
   </div>
  )
}

export default Footer