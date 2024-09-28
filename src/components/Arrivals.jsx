import React, { useContext } from 'react'
import Container from './Container'
import Arrivalsitem from './Arrivalsitem';
import { apidata } from './ContextApi';
import Slider from "react-slick";
import { FaLongArrowAltLeft,FaLongArrowAltRight  } from "react-icons/fa";
import { Link } from 'react-router-dom';


function SampleNextArrow(props) {
  const {  onClick } = props;
  return (
    <div onClick={onClick} className='text-white cursor-pointer absolute top-[40%] translate-y-[-40%] z-50 right-[15px] h-[50px] w-[50px] bg-[#6D6D6D] text-center rounded-full leading-[50px]'><FaLongArrowAltRight className='inline-block text-[20px]' /></div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className='text-white cursor-pointer absolute top-[40%] translate-y-[-40%] z-50 left-0 h-[50px] w-[50px] bg-[#6D6D6D] text-center rounded-full leading-[50px] '><FaLongArrowAltLeft className='inline-block text-[20px]' /></div>
  );
}

const Arrivals = () => {
  let data = useContext(apidata)
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />, responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };
  return (
    <section className='lg:px-0 px-2'>
        <Container>
            <h2 className='font-sans text-[#262626] lg:text-[39px] text-[25px] lg:pb-[48px] font-bold'>New Arrivals</h2>
            <Slider {...settings}>
              {data.map((item)=>(
               <Link to="/product">
                <Arrivalsitem item={item}/>
                </Link>
              ))}
            </Slider>
        </Container>
    </section>        
  )
}

export default Arrivals
