import React from 'react'
import Container from './Container';
import Bt from "../assets/bt.png"
import Bt1 from "../assets/bt1.png"
import Bt2 from "../assets/bt2.png"
import Bt3 from "../assets/bt3.png"
import Flex from './Flex';

const Bestsellers = () => {
    return (
        <section className='lg:py-[118px] py-[20px] px-2 lg:px-0'>
            <Container>
               <Flex className="justify-between flex-wrap">
                    <div className="lg:w-[23%] w-[48%]">
                        <div className="relative">
                            <p className='absolute lg:top-[20px] top-[40px] left-[20px] text-[16px] font-sans font-bold bg-[#000] w-[92px] h-[35px] text-white text-center leading-[35px]'>New</p>
                            <img className='lg:py-0 py-[20px] lg:h-[300px] w-full  h-[250px]' src={Bt} alt="" />
                        </div>
                        <div className="lg:flex justify-between lg:pt-[10px]">
                            <h2 className='font-sans text-[16px] font-bold text-[#262626]'>Basic Crew  Neck Tee</h2>
                            <p className='font-sans text-[16px] font-bold text-[#262626]'>$44.00</p>
                        </div>
                        <div className="pb-[20px]">
                            <p className='font-sans text-[16px] font-bold capitalize text-[#767676]'>Black</p>
                        </div>
                    </div>
                    <div className="lg:w-[23%] w-[48%]">
                        <div className="relative group overflow-hidden">
                            <p className='absolute lg:top-[20px] top-[40px] left-[20px] text-[16px] font-sans font-bold bg-[#000] w-[92px] h-[35px] text-white text-center leading-[35px]'>New</p>
                            <img className='  w-full lg:py-0 py-[20px] lg:h-[300px] h-[250px]' src={Bt1} alt="" />
                        </div>
                        <div className="lg:flex justify-between lg:pt-[10px]">
                            <h2 className='font-sans text-[16px] font-bold text-[#262626]'>Basic Crew  Neck Tee</h2>
                            <p className='font-sans text-[16px] font-bold text-[#262626]'>$44.00</p>
                        </div>
                        <div className="pb-[20px]">
                            <p className='font-sans text-[16px] font-bold capitalize text-[#767676]'>Black</p>
                        </div>
                    </div>
                    <div className="lg:w-[23%] w-[48%]">
                        <div className="relative group overflow-hidden">
                            <p className='absolute lg:top-[20px] top-[40px] left-[20px] text-[16px] font-sans font-bold bg-[#000] w-[92px] h-[35px] text-white text-center leading-[35px]'>New</p>
                            <img className='lg:py-0  w-full py-[20px] lg:h-[300px] h-[250px]' src={Bt2} alt="" />
                        </div>
                        <div className="lg:flex justify-between lg:pt-[10px]">
                            <h2 className='font-sans text-[16px] font-bold text-[#262626]'>Basic Crew  Neck Tee</h2>
                            <p className='font-sans text-[16px] font-bold text-[#262626]'>$44.00</p>
                        </div>
                        <div className="pb-[20px]">
                            <p className='font-sans text-[16px] font-bold capitalize text-[#767676]'>Black</p>
                        </div>
                    </div>
                    <div className="lg:w-[23%] w-[48%]">
                        <div className="relative group overflow-hidden">
                            <p className='absolute lg:top-[20px] top-[40px] left-[20px] text-[16px] font-sans font-bold bg-[#000] w-[92px] h-[35px] text-white text-center leading-[35px]'>New</p>
                            <img className='lg:py-0 py-[20px]  w-full lg:h-[300px] h-[250px]' src={Bt3} alt="" />
                        </div>
                        <div className="lg:flex justify-between lg:pt-[10px]">
                            <h2 className='font-sans text-[16px] font-bold text-[#262626]'>Basic Crew  Neck Tee</h2>
                            <p className='font-sans text-[16px] font-bold text-[#262626]'>$44.00</p>
                        </div>
                        <div className="pb-[20px]">
                            <p className='font-sans text-[16px] font-bold capitalize text-[#767676]'>Black</p>
                        </div>
                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default Bestsellers
