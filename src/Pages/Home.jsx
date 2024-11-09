import React from 'react'
import Banner from '../Components/Banner/Banner'
import './Home.css'
import Counter from '../Components/Counter/Counter'
import Provide from '../Components/Provide/Provide'
import Plan from '../Components/Plan/Plan'

const Home = () => {
  return (
    <>
       <Banner/>
       <Counter/>
       <Provide/>
       <Plan/>

    </>
  )
}

export default Home