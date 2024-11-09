import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import MobileNav from '../Components/MobileNav/MobileNav'

const LayoutOne = () => {
  return (
    <>
        <Navbar/>
        <MobileNav/>
        <Outlet/>
    </>
  )
}

export default LayoutOne