import React from 'react'
import'./Provide.css'
import { FaCheckCircle } from "react-icons/fa";

const Provide = () => {
  return (
    <>
        <section className='provide_Shorna'>
            <div className="container">
                <div className="provideRow">
                    <div className="proImg">
                        <img src="images/Illustration 2.png" alt="illustration 2" />
                    </div>
                    <div className="proTxt">
                        <h2 className='proTxt_h2'>We Provide Many Features You Can Use</h2>
                        <p className='proTxt_P'>You can explore the features that we provide with fun and have their own functions each feature.</p>
                        <div className="feature_txt">

                            <div className="feature_Row">
                                <div className="f_icon">
                                    <FaCheckCircle />
                                </div>
                                <div className="f_txt">
                                    <p>Powerfull online protection.</p>
                                </div>
                            </div>

                            <div className="feature_Row">
                                <div className="f_icon">
                                    <FaCheckCircle />
                                </div>
                                <div className="f_txt">
                                    <p>Powerfull online protection.</p>
                                </div>
                            </div>

                            <div className="feature_Row">
                                <div className="f_icon">
                                    <FaCheckCircle />
                                </div>
                                <div className="f_txt">
                                    <p>Powerfull online protection.</p>
                                </div>
                            </div>

                            <div className="feature_Row">
                                <div className="f_icon">
                                    <FaCheckCircle />
                                </div>
                                <div className="f_txt">
                                    <p>Powerfull online protection.</p>
                                </div>
                            </div>

                            

                            

                            


                    </div>
                    </div>
                    
                </div>
            </div>

        </section>
    </>
  )
}

export default Provide