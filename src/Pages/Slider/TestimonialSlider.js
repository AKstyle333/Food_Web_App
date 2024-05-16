import React from "react";
import Slider from "react-slick";
import ava01 from "../../Fake_data/images/ava-1.jpg";
import ava02 from "../../Fake_data/images/ava-2.jpg";
import ava03 from "../../Fake_data/images/ava-3.jpg";

function TestimonialSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: "linear",
    };
    return (
        <Slider {...settings}>
            <div>
                <p className="review_text">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis atque, quam minus totam maiores laborum! Impedit consectetur illum aliquid odit. Odit dolore ipsum quod
                    debitis nostrum necessitatibus quis dolorem quas!"
                </p>
                <div className="slider_content d-flex align-items-center gap-3">
                    <img src={ava01} alt="ava01" className="rounded"></img>
                    <h6>Jhon Doe</h6>
                </div>
            </div>
            <div>
                <p className="review_text">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis atque, quam minus totam maiores laborum! Impedit consectetur illum aliquid odit. Odit dolore ipsum quod
                    debitis nostrum necessitatibus quis dolorem quas!"
                </p>
                <div className="slider_content d-flex align-items-center gap-3">
                    <img src={ava02} alt="ava01" className="rounded"></img>
                    <h6>Jhon Doe</h6>
                </div>
            </div>
            <div>
                <p className="review_text">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis atque, quam minus totam maiores laborum! Impedit consectetur illum aliquid odit. Odit dolore ipsum quod
                    debitis nostrum necessitatibus quis dolorem quas!"
                </p>
                <div className="slider_content d-flex align-items-center gap-3">
                    <img src={ava03} alt="ava01" className="rounded"></img>
                    <h6>Jhon Doe</h6>
                </div>
            </div>
        </Slider>
    );
}

export default TestimonialSlider;
