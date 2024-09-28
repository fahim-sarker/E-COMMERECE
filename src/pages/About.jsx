import Container from '../components/Container'
import React from 'react'
import Ab1 from "../assets/ab1.png"
import Ab2 from "../assets/ab2.png"
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className='lg:py-[125px] py-[50px] lg:px-0 px-2'>
            <Container>
                <h2 className='font-sans font-bold lg:text-[36px] text-[25px]'>About</h2>
                <p className='text-[16px] font-sans font-normal lg:pb-[80px] pb-[40px]'><Link to="/">Home  &#62;  About</Link></p>
                <div className="flex justify-between">
                    <div className="pr-2">
                        <img src={Ab1} alt="about" />
                    </div>
                    <div className="pl-2 lg:pb-[128px] pb-[40px]">
                        <img src={Ab2} alt="about" />
                    </div>
                </div>
                <p className='font-sans lg:text-[39px] text-[18x] font-normal lg:pb-16 pb-10'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>
                <div className="lg:flex justify-between">
                    <div className="">
                        <h2 className='font-sans lg:text-[39px] text-[25px] font-medium pb-5'>Our Vision</h2>
                        <p className='font-sans lg:text-[18px] text-[16px] font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="">
                    <h2 className='font-sans lg:text-[39px] text-[25px] font-medium lg:pt-0 pt-5 pb-5'>Our Story</h2>
                    <p className='font-sans lg:text-[18px] text-[16px] font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                    </div>
                    <div className="">
                    <h2 className='font-sans lg:text-[39px] text-[25px] font-medium pb-5  lg:pt-0 pt-5'>Our Brands</h2>
                    <p className='font-sans lg:text-[18px] text-[16px] font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About
