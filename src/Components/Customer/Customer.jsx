import React from 'react'
import './Customer.css'
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import { VscArrowRight } from "react-icons/vsc";
import { VscArrowLeft } from "react-icons/vsc";

const Customer = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <VscArrowRight/>,
        prevArrow: <VscArrowLeft/>
      };

  return (
    
    <section>
        <div className="customer_Shorna">
            <div className="cus_Txt">
                <h2>Trusted by Thousands of Happy Customer</h2>
                <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
            </div>
            {/* ============== Slider/Corusel ================== */}
            <div className="review ml-4">
                <Slider {...settings}>
                    <div>
                        <div className="reviewImg">
                            <img src="images/review-1.png" alt="review" />
                        </div>
                    </div>
                    <div>
                        <div className="reviewImg">
                            <img src="images/review-2.png" alt="review" />
                        </div>
                    </div>
                    <div>
                            <div className="reviewImg">
                            <img src="images/review-3.png" alt="review" />
                        </div>
                    </div>
                    <div>
                        <div className="reviewImg">
                            <img src="images/review-1.png" alt="review" />
                        </div>
                    </div>
                    <div>
                        <div className="reviewImg">
                            <img src="images/review-2.png" alt="review" />
                        </div>
                    </div>
                </Slider>
            </div>
            {/* --------------- review part ends ----------------- */}
        </div>
    </section>
    
  )
}

export default Customer