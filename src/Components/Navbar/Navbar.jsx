import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
         <div className="nav">
            <div className="container">
                <div className="menuRow">
                    <div className="logo">
                        <Link to="/"><img src="images/Logo.png" alt="logo" /></Link>
                    </div>
                    <div className="menuItems">
                        <ul>
                            <li><Link to="" >About</Link></li>
                            <li><Link to="" >Features</Link></li>
                            <li><Link to="" >Pricing</Link></li>
                            <li><Link to="" >Testimonials</Link></li>
                            <li><Link to="" >Help</Link></li>
                        </ul>
                    </div>
                    <div className="buttons">
                        <button><Link to="/SignIn" >Sign In</Link></button>
                        <button><Link to="/SignUp" >Sign Up</Link></button>
                    </div>
                </div>
            </div>
         </div>
    </>
  )
}

export default Navbar