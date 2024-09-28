import React from 'react'
import Container from './Container';
import Flex from './Flex';
import Sp1 from "../assets/sp.png"
import Sp2 from "../assets/sp1.png"
import Sp3 from "../assets/sp2.png"
import Sp4 from "../assets/sp3.png"

const Specialoffer = () => {
  return (
    <section className='lg:py-[118px] py-[20px] lg:px-0 px-2'>
    <Container>
        <div className="">
        <h2 className='font-sans text-[#262626] lg:text-[39px] text-[25px] lg:pb-[48px] font-bold'>Special Offers</h2>
        </div>
    <Flex className="justify-between flex-wrap">
    <div className="lg:w-[24%] w-[48%]">
            <div className="relative">
                <p className='absolute lg:top-[20px] top-[40px] left-[20px] text-[16px] font-sans font-bold bg-[#000] w-[92px] h-[35px] text-white text-center leading-[35px]'>New</p>
                <img className='w-full lg:py-0 py-[20px] lg:h-[300px]  h-[250px]' src={Sp1} alt="" />
            </div>
            <div className="lg:flex justify-between lg:pt-[10px]">
                <h2 className='font-sans text-[16px] font-bold text-[#262626]'>Basic Crew  Neck Tee</h2>
                <p className='font-sans text-[16px] font-bold text-[#262626]'>$44.00</p>
            </div>
            <div className="pb-[20px]">
                <p className='font-sans text-[16px] font-bold capitalize text-[#767676]'>Black</p>
            </div>
        </div>
    <div className="lg:w-[24%] w-[48%]">
            <div className="relative group overflow-hidden">
                <p className='absolute lg:top-[20px] top-[40px] left-[20px] text-[16px] font-sans font-bold bg-[#000] w-[92px] h-[35px] text-white text-center leading-[35px]'>New</p>
                <img className='lg:py-0 w-full py-[20px] lg:h-[300px] h-[250px]' src={Sp2} alt="" />
            </div>
            <div className="lg:flex justify-between lg:pt-[10px]">
                <h2 className='font-sans text-[16px] font-bold text-[#262626]'>Basic Crew  Neck Tee</h2>
                <p className='font-sans text-[16px] font-bold text-[#262626]'>$44.00</p>
            </div>
            <div className="pb-[20px]">
                <p className='font-sans text-[16px] font-bold capitalize text-[#767676]'>Black</p>
            </div>
        </div>
    <div className="lg:w-[24%] w-[48%]">
            <div className="relative group overflow-hidden">
                <p className='absolute lg:top-[20px] top-[40px] left-[20px] text-[16px] font-sans font-bold bg-[#000] w-[92px] h-[35px] text-white text-center leading-[35px]'>New</p>
                <img className='lg:py-0 w-full py-[20px] lg:h-[300px] h-[250px]' src={Sp3} alt="" />
            </div>
            <div className="lg:flex justify-between lg:pt-[10px]">
                <h2 className='font-sans text-[16px] font-bold text-[#262626]'>Basic Crew  Neck Tee</h2>
                <p className='font-sans text-[16px] font-bold text-[#262626]'>$44.00</p>
            </div>
            <div className="pb-[20px]">
                <p className='font-sans text-[16px] font-bold capitalize text-[#767676]'>Black</p>
            </div>
        </div>
    <div className="lg:w-[24%] w-[48%]">
            <div className="relative group overflow-hidden">
                <p className='absolute lg:top-[20px] top-[40px] left-[20px] text-[16px] font-sans font-bold bg-[#000] w-[92px] h-[35px] text-white text-center leading-[35px]'>New</p>
                <img className='lg:py-0 w-full py-[20px] lg:h-[300px] h-[250px]' src={Sp4} alt="" />
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

export default Specialoffer
