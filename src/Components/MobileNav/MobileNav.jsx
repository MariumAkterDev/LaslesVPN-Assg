import React, { useState } from 'react'
import './MobileNav.css'
import { Link } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6"

const MobileNav = () => {

  const [show, setShow] = useState(false)


  return (
    <>
      <div className="mobileNav">
        <div className="container relative">
          <div className="mbMenuRow ">
            <Link to="/"><img src="images/Logo.png" alt="logo" /></Link>
            <div onClick={()=>setShow(!show)} className="menuIcon">
              <FaBarsStaggered/>
            </div>
          </div>
          {show &&
            <div className="mb_Dp_menu">
              <ul className="main_Mb_Menu">
                <li><Link to="">About</Link></li>
                <li><Link to="">Features</Link></li>
                <li><Link to="">Pricing</Link></li>
                <li><Link to="">Testimonials</Link></li>
                <li><Link to="">Help</Link></li>
              </ul>
              <Link className='btn' to="/signin">Sign In</Link>
              <Link className='btn bg-[#fef3e2c8!important] hover:bg-[transparent!important]' to="/signup">Sign Up</Link>
            </div> 
          }
          
        </div>
      </div>
    </>
  )
}

export default MobileNav