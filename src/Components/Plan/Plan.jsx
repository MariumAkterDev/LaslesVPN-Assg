import React from 'react'
import './Plan.css'
import { FaCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Plan = () => {

   


  return (
    <>
        <section className='plan_Shorna'>
            <div className="container">
                <div className="Plan_Row">
                    <div className="plan_Row_Txt">
                        <h3>Choose Your Plan</h3>
                        <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
                    </div>
                    <div className="plan_Cards">
                        {/* ============ sigle card 1 ============================ */}
                        <div className="plan_Single_Card">
                            <div className="card_Img">
                                <img className='mt-3' src="images/Free.png" alt="cardImg" />
                            </div>
                            <h4>Free Plan</h4>
                            <div className="card_Txt_Shorna">

                                <div className="card_Txt">
                                    <FaCheck />
                                    <p>Unlimited Bandwitch</p>
                                </div>

                                <div className="card_Txt">
                                    <FaCheck />
                                    <p>Encrypted Connection</p>
                                </div>

                                <div className="card_Txt">
                                    <FaCheck />
                                    <p>No Traffic Logs</p>
                                </div>

                                <div className="card_Txt mb-12">
                                    <FaCheck />
                                    <p>Works on All Devices</p>
                                </div>
                            </div>
                            <div className="card_bottom">
                                <h3>Free</h3>
                                <button className='card_bottom_Btn'><Link to="">Select</Link></button>
                            </div>
                        </div>
                        {/* -------------- x 1 -------------------------------------------- */}
                        {/* ============ sigle card 2 ============================ */}
                        <div className="plan_Single_Card">
                            <div className="card_Img">
                                <img src="images/Free.png" alt="cardImg" />
                            </div>
                            <h4>Standard Plan</h4>
                            <div className="card_Txt_Shorna">

                                <div className="card_Txt">
                                    <FaCheck />
                                    <p>Unlimited Bandwitch</p>
                                </div>

                                <div className="card_Txt">
                                    <FaCheck />
                                    <p>Encrypted Connection</p>
                                </div>

                                <div className="card_Txt">
                                    <FaCheck />
                                    <p>No Traffic Logs</p>
                                </div>

                                <div className="card_Txt">
                                    <FaCheck />
                                    <p>Works on All Devices</p>
                                </div>

                                <div className="card_Txt  mb-8">
                                    <FaCheck />
                                    <p>Connect Anyware</p>
                                </div>
                            </div>
                            <div className="card_bottom">
                                <h3>$9 <span>/ mo</span></h3>
                                <button className='card_bottom_Btn'><Link to="">Select</Link></button>
                            </div>
                        </div>
                        {/* -------------- x 2 -------------------------------------------- */}
                        {/* ============ sigle card 3 ============================ */}
                        <div className="plan_Single_Card">
                            <div className="card_Img">
                                <img src="images/Free.png" alt="cardImg" />
                            </div>
                            <h4>Premium Plan</h4>
                            <div className="card_Txt_Shorna">

                                <div className="card_Txt">
                                    <FaCheck />
                                    <p>Unlimited Bandwitch</p>
                                </div>

                                <div className="card_Txt">
                                    <FaCheck />
                                    <p>Encrypted Connection</p>
                                </div>

                                <div className="card_Txt">
                                    <FaCheck />
                                    <p>No Traffic Logs</p>
                                </div>

                                <div className="card_Txt">
                                    <FaCheck />
                                    <p>Works on All Devices</p>
                                </div>

                                <div className="card_Txt">
                                    <FaCheck />
                                    <p>Connect Anyware</p>
                                </div>

                                <div className="card_Txt">
                                    <FaCheck />
                                    <p>Get New Features</p>
                                </div>
                            </div>
                            <div className="card_bottom">
                                <h3>$12 <span>/ mo</span></h3>
                                <button className='card_bottom_Btn'><Link to="">Select</Link></button>
                            </div>
                        </div>
                        {/* -------------- x 3 -------------------------------------------- */}
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Plan