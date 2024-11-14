import React from 'react'
import './SubscribeBtn.css'
import { Link } from 'react-router-dom'

const SubscribeBtn = () => {
  return (
    
        <div className="container flex justify-center">
           <div className="Mother">
                <div className="subsShorna">
                        <div className="subsTxt">
                            <h2>Subscribe Now for Get Special Features!</h2>
                            <p>Let's subscribe with us and find the fun.</p>
                        </div>
                        <div className="subsBtn">
                            <button><Link to=''>Subscribe Now</Link></button>
                        </div>
                </div>
           </div>
        </div>
   
  )
}

export default SubscribeBtn