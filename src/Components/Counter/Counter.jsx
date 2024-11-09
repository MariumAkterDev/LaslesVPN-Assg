import React from 'react'
import './Counter.css'
import { FaUser } from 'react-icons/fa6'
import { IoLocationSharp } from "react-icons/io5";
import { HiServerStack } from "react-icons/hi2";
import CountUp from 'react-countup'

const Counter = () => {
  return (
    <>
       <section className='counter_Shorna'>
            <div className="container">
                <div className="counter">
                    {/* ========== counter box 1 ================================= */}
                    <div className="counter_Box">
                        {/* ====== counter icon =========> */}
                        <div className="counter_Box_Icon">
                            <FaUser/>
                        </div>
                        {/* ====== counter text =========> */}
                        <div className="counter_Box_txt">
                            <div className="icon_number flex">
                                <CountUp start={10} end={90} duration={5} className='counterNumTxt'/>
                                <h2>+</h2>
                            </div>
                            <p>Users</p>
                        </div>
                    </div>
                    <div className="line"></div>
                    {/* ========== counter box 2 =============================== */}
                    <div className="counter_Box">
                        {/* ====== counter icon =========> */}
                        <div className="counter_Box_Icon">
                            <IoLocationSharp />
                        </div>
                        {/* ====== counter text =========> */}
                        <div className="counter_Box_txt">
                            <div className="icon_number flex">
                                <CountUp start={10} end={30} duration={5} className='counterNumTxt'/>
                                <h2>+</h2>
                            </div>
                            <p>Locations</p>
                        </div>
                    </div>
                    <div className="line"></div>
                    {/* ========== counter box 3 ============================= */}
                    <div className="counter_Box">
                        {/* ====== counter icon =========> */}
                        <div className="counter_Box_Icon">
                            <HiServerStack />
                        </div>
                        {/* ====== counter text =========> */}
                        <div className="counter_Box_txt">
                            <div className="icon_number flex">
                                <CountUp start={10} end={50} duration={5} className='counterNumTxt'/>
                                <h2>+</h2>
                            </div>
                            <p>Servers</p>
                        </div>
                    </div>
                    {/* ------------ counter box ends --------- */}
                </div>
            </div>
        </section> 
    </>
  )
}

export default Counter