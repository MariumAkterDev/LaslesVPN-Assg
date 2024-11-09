import React from 'react'
import './Footer.css'
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <>
        <section>
            <div className="container">
                <div className="footer_Shorna">
                    <div className="footer_col_1">
                        <img className='fLogo' src="images/Logo.png" alt="logo" />
                        <p><span>LaslesVPN</span> is a private virtual network that has unique features and has high security.</p>
                        <div className="footer_icon">
                            <Link to=""><RiFacebookFill className='icon' /></Link>
                            <Link to=""><FaTwitter className='icon'/></Link>
                            <Link to=""><ImInstagram className='icon'/></Link>
                        </div>
                        <h6>©2020Lasles<span>VPN</span></h6>
                    </div>
                    <div className="footer_col_2">
                          <div className="footer_Pro">
                                <h4>Product</h4>
                                <div className="lists">
                                    <p>Download</p>
                                    <p>Pricing</p>
                                    <p>Locations</p>
                                    <p>Server</p>
                                    <p>Countries</p>
                                    <p>Blog</p>
                                </div>
                          </div>
                          <div className="footer_Engage">
                                <h4>Engage</h4>
                                <div className="lists">
                                    <p>LaslesVPN ? </p>
                                    <p>FAQ</p>
                                    <p>Tutorials</p>
                                    <p>About Us</p>
                                    <p>Privacy Policy</p>
                                    <p>Terms of Service</p>
                                </div>
                          </div>
                          <div className="footer_Money">
                                <h4>Earn Money</h4>
                                <div className="lists">
                                    <p>Affiliate</p>
                                    <p>Become Partner</p>
                                </div>
                          </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Footer