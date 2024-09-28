import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import Container from '../components/Container';

const MyAccount = () => {
  return (
    <>
      <section className='lg:py-[125px] py-[50px] lg:px-0 px-3'>
        <Container>
          <div className="lg:pt-[30px] pt-3">
            <h2 className='font-sans font-bold lg:text-[36px] text-[25px]'>My Account</h2>
            <p className='text-[16px] font-sans font-normal lg:pb-[40px] pb-[50px]'><Link to="/">Home  &#62;  My Account</Link></p>
          </div>

          <div className=" mt-10 lg:flex justify-between">
            <div className="lg:w-[20%] w-full">
              <ul>
                <li><h3 className='font-dmsans text-[16px] font-normal leading-[30px] text-[#767676] border-b-[1px] border-[#F0F0F0] py-4 hover:font-bold hover:text-[#262626] ease-in-out duration-500'>Dashboard</h3></li>
                <li><h3 className='font-dmsans text-[16px] font-normal leading-[30px] text-[#767676] border-b-[1px] border-[#F0F0F0] py-4 hover:font-bold hover:text-[#262626] ease-in-out duration-500'>Others</h3></li>
                <li><h3 className='font-dmsans text-[16px] font-normal leading-[30px] text-[#767676] border-b-[1px] border-[#F0F0F0] py-4 hover:font-bold hover:text-[#262626] ease-in-out duration-500'>Donwloads</h3></li>
                <li><h3 className='font-dmsans text-[16px] font-normal leading-[30px] text-[#767676] border-b-[1px] border-[#F0F0F0] py-4 hover:font-bold hover:text-[#262626] ease-in-out duration-500'>Addresses</h3></li>
                <li><h3 className='font-dmsans text-[16px] font-normal leading-[30px] text-[#767676] border-b-[1px] border-[#F0F0F0] py-4 hover:font-bold hover:text-[#262626] ease-in-out duration-500'>Account details</h3></li>
                <li><h3 className='font-dmsans text-[16px] font-normal leading-[30px] text-[#767676] border-b-[1px] border-[#F0F0F0] py-4 hover:font-bold hover:text-[#262626] ease-in-out duration-500'>Logout</h3></li>
              </ul>
            </div>
            <div className="lg:w-[75%] w-full">
              <div className=" mt-7">
                <h3 className='font-dmsans text-[16px] font-normal leading-[30px] text-[#767676]'>Hello <span className='text-[#262626]'>admin</span> (not <span className='text-[#262626]'>admin</span>? <span className='text-[#262626]'>Log out</span>)</h3>
                <p className='font-dmsans lg:text-[16px] font-normal leading-[30px] text-[#767676] w-[80%] mt-[50px]'>From your account dashboard you can view your <span className='text-[#262626]'>recent orders</span>, manage your <span className='text-[#262626]'>shipping and billing addresses</span>, and <span className='text-[#262626]'>edit your password and account details.</span></p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default MyAccount

