import React from 'react'
import Banner from '../Components/Banner/Banner'
import './Home.css'
import Counter from '../Components/Counter/Counter'
import Provide from '../Components/Provide/Provide'
import Plan from '../Components/Plan/Plan'
import Network from '../Components/Network/Network'
import Customer from '../Components/Customer/Customer'
import Footer from '../Components/Footer/Footer'
import SubscribeBtn from '../Components/SubscribeBtn/SubscribeBtn'

const Home = () => {
  return (
    <>
       <Banner/>
       <Counter/>
       <Provide/>
       <Plan/>
       <Network/>
       <Customer/>
       <SubscribeBtn/>
       <Footer/>

    </>
  )
}

export default Home