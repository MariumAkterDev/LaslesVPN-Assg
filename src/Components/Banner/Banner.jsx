import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="banner">
            <div className="bannerTxt">
              <h1 className='bannerh1'>Want anything to be easy with <span>LaslesVPN.</span></h1>             
              <p className='bannerP'>Provide a network for all your needs with ease and fun using <span>LaslesVPN</span> discover interesting features from us.</p>            
              <Link className='bannerBtn' to="/">Get Started</Link>
            </div>
            <div className="baanerImg">
              <img src="images/Illustration 1.png" alt="bannerImg" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner