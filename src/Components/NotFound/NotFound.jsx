import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
        <div className="container flex justify-center items-center flex-col gap-20 h-[100vh]">
            <img className='w-[700px]' src="https://freefrontend.com/assets/img/html-funny-404-pages/SVG-Animation-404-Page.gif" alt="404" />
            <Link to="/" className='font-bold text-[40px] text-brandColor'>Home</Link>
        </div>

    </>
  )
}

export default NotFound