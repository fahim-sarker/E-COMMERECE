import { Link } from 'react-router-dom'
import Container from '../components/Container'
import React from 'react'

const Contact = () => {
    return (
        <div className='lg:py-[125px] py-[50px] lg:px-0 px-3'>
            <Container>
                <h2 className='font-sans font-bold lg:text-[36px] text-[25px]'>Contacts</h2>
                <p className='text-[16px] font-sans font-normal lg:pb-[120px] pb-[50px]'><Link to="/">Home  &#62;  Contacts</Link></p>
                <h2 className='font-sans font-bold lg:text-[36px] text-[20px] pb-[50px]'>Fill up a Form</h2>
                <div className="border-b border-[#D8D8D8]">
                    <h3 className='lg:text-[26px] text-[20px] font-sans font-medium'>Name :</h3>
                    <input className='outline-none lg:text-[20px] text-[16px] font-sans font-medium pb-5 ' type="text" placeholder='Your name here' />
                </div>
                <div className="lg:pt-10 border-b border-[#D8D8D8]">
                    <h3 className='lg:text-[26px] text-[20px]  font-sans font-medium'>Email :</h3>
                    <input className='outline-none lg:text-[20px] text-[16px] font-sans font-medium pb-5 ' type="text" placeholder='Your email here' />
                </div>
                <div className="lg:pt-10 border-b border-[#D8D8D8]">
                    <h3 className='lg:text-[26px] text-[20px] font-sans font-medium '>Message :</h3>
                    <input className='outline-none  lg:text-[20px] text-[16px] font-sans font-medium lg:pb-20 pb-5 ' type="text" placeholder='Your message here' />
                </div>
                <div className="lg:py-[100px] py-[50px] lg:pl-0 pl-5">
                    <button className='bg-[#262626] text-white lg:px-[100px] px-[60px] lg:py-[20px] py-3 text-[20px] font-sans font-medium capitalize hover:bg-[#F0F0F0] hover:text-black duration-300 ease-in-out'>Post</button>
                </div>
                <iframe className='w-full lg:h-[500px] h-[300px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116869.45252691708!2d90.2383846433594!3d23.741302499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1719836289659!5m2!1sen!2sbd"
                />
            </Container>
        </div>
    )
}

export default Contact
