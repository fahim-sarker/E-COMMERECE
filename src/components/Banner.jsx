import React from 'react'
import Ban from "../assets/banner.png"
import Slider from "react-slick";
import Container from './Container'
import { FaTruck } from "react-icons/fa";
import { IoReloadOutline } from "react-icons/io5";


const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 4000,
        appendDots: dots => (
          <div
            style={{
              borderRadius: "10px",
              padding: "10px",
              position:"absolute",
              top: "50%",
              left: "100px",
              transform: "translateY(-50%)"
            }}
          >
            <ul style={{ margin: "0px" }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div className='sahed'
            style={{
              width: "30px",
              color: "black",
              padding: "10px 0",
              borderRight: "2px #fff solid"
            }}
          >
            {i + 1}
          </div>
        )
      };
  return (
    <section>
    <Slider {...settings}>
    <div className="">
        <img src={Ban} alt="banner" />
      </div>
      <div className="">
        <img src={Ban} alt="banner" />
      </div>
      <div className="">
        <img src={Ban} alt="banner" />
      </div>
      <div className="">
        <img src={Ban} alt="banner" />
      </div>
    </Slider>
    <Container>
       <div className="flex justify-between py-5 lg-px-0 px-5">
        <div className="">
            <h2 className='lg:font-sans text-[16px] font-normal text-[#6D6D6D]'><span className='pr-[10px] text-[#262626] font-bold text-[20px]'>2</span>Two years warranty</h2>
        </div>
        <div className="flex items-center gap-x-3">
            <FaTruck className='text-[#262626] font-bold text-[20px]'/>
            <h2 className='lg:block hidden font-sans text-[16px] font-normal text-[#6D6D6D]'>Free shipping</h2>
        </div>
        <div className="flex items-center gap-x-3">
            <IoReloadOutline className='text-[#262626] font-bold text-[20px]'/>
            <h2 className='lg:block hidden font-sans text-[16px] font-normal text-[#6D6D6D]'>Return policy in 30 days</h2>
        </div>
       </div>
    </Container> 
    </section>
  )
}

export default Banner
