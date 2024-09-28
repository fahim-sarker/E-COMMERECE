import React, { useState } from 'react'
import Container from '../components/Container'
import { Link, useNavigate } from 'react-router-dom'
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";


const Signup = () => {
    const auth = getAuth();
    const db = getDatabase();
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [firstName, steFirstName] = useState("")
    let [pshow, setPshow] = useState(false)
    let navigate = useNavigate()

    let handlePassword = (e) => {
        setPassword(e.target.value);
    }

    let handleEmail = (e) => {
        setEmail(e.target.value);
    }

    let handleFirstName = (e) => {
        steFirstName(e.target.value);
    }

    
    let handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            return updateProfile(auth.currentUser, {
                displayName: firstName,
            });
        })
        .then(() => {
            set(ref(db, `users/${auth.currentUser.uid}`), {
                username: firstName,
                email: email,
            });
        })
        .then(() => {
            toast.success("Registration successful! Redirecting to login...");
            setEmail("");
            setPassword("");
            setTimeout(() => {
                navigate("/login");
            }, 2000);
        })
        .catch((error) => {
            const errorCode = error.code;
            if (errorCode === 'auth/email-already-in-use') {
                toast.error("This email is already registered. Please use a different email.");
            } else {
                toast.error("An error occurred. Please try again.");
            }
        });
};



    return (
        <div className='lg:py-[125px] py-[50px] lg:px-0 px-3'>
            <Container>
                <h2 className='font-sans font-bold text-[36px]'>Sign up</h2>
                <p className='text-[16px] font-sans font-normal lg:pb-[120px] pb-[50px]'><Link to="/">Home  &#62;  Sign up</Link></p>
                <section>
                    <div className="mt-[30px] py-[50px] border-y-[1px]  border-[#F0F0F0]">
                        <div>
                            <h3 className='font-dmsans lg:text-[39px] text-[20px] font-bold text-[#262626] pb-10'>Your Personal Details</h3>
                            <div className="lg:w-[60%] w-full flex flex-wrap justify-between">
                                <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                                    <h3 className='font-dmsans text-[18px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>First Name</h3>
                                    <input onChange={handleFirstName} type="text" placeholder='First Name' className='font-dmsans text-[16px] font-normal text-[#767676] outline-none w-full h-[20px]' />

                                </div>
                                <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                                    <h3 className='font-dmsans text-[18px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>Last Name</h3>
                                    <input type="text" placeholder='Last Name' className='font-dmsans text-[16px] font-normal text-[#767676] outline-none w-full h-[20px]' />

                                </div>
                                <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                                    <h3 className='font-dmsans text-[18px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>Email address</h3>
                                    <input onChange={handleEmail} type="email" value={email} required placeholder='company@domain.com' className='font-dmsans text-[16px] font-normal text-[#767676] outline-none w-full h-[20px]' />

                                </div>
                                <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                                    <h3 className='font-dmsans text-[18px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>Telephone</h3>
                                    <input type="tel" placeholder='Your phone number' className='font-dmsans text-[16px] font-normal text-[#767676] outline-none w-full h-[20px]' />

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="mt-[50px] pb-[50px] border-b-[1px]  border-[#F0F0F0]">
                        <div>
                            <h3 className='font-dmsans lg:text-[39px] text-[20px] font-bold text-[#262626] pb-10'>New Customer</h3>
                            <div className="lg:w-[60%] w-full flex flex-wrap justify-between">
                                <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                                    <h3 className='font-dmsans text-[18px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>Address 1</h3>
                                    <input type="text" placeholder='4279 Zboncak Port Suite 6212' className='font-dmsans text-[16px] font-normal text-[#767676] outline-none w-full h-[20px]' />

                                </div>
                                <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                                    <h3 className='font-dmsans text-[18px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>Address 2</h3>
                                    <input type="text" placeholder='---' className='font-dmsans text-[16px] font-normal text-[#767676] outline-none w-full h-[20px]' />

                                </div>
                                <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                                    <h3 className='font-dmsans text-[18px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>City</h3>
                                    <input type="text" placeholder='Your city' className='font-dmsans text-[16px] font-normal text-[#767676] outline-none w-full h-[20px]' />

                                </div>
                                <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                                    <h3 className='font-dmsans text-[18px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>Post Code</h3>
                                    <input type="text" placeholder='05228' className='font-dmsans text-[16px] font-normal text-[#767676] outline-none w-full h-[20px]' />

                                </div>
                                <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                                    <h3 className='font-dmsans text-[18px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>Division</h3>
                                    <input type="text" placeholder='Please select' className='font-dmsans text-[16px] font-normal text-[#767676] outline-none w-full h-[20px]' />

                                </div>
                                <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                                    <h3 className='font-dmsans text-[18px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>District</h3>
                                    <input type="text" placeholder='Please select' className='font-dmsans text-[16px] font-normal text-[#767676] outline-none w-full h-[20px]' />

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-[50px] pb-[50px] border-b-[1px]  border-[#F0F0F0]">
                        <div>
                            <div className="">
                                <h3 className='font-dmsans lg:text-[39px] text-[20px] font-bold text-[#262626] pb-10'>Your Password</h3>
                            </div>
                            <div className="lg:w-[60%] w-full flex flex-wrap justify-between">
                                <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5 relative">
                                    <div className="">
                                        <h3 className='font-dmsans text-[18px] leading-[23px] font-bold text-[#262626]'>Password</h3>
                                        <input onChange={handlePassword} value={password} type={pshow ? "text" : "password"} required placeholder='Password' className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]' />
                                    </div>

                                    <div onClick={() => setPshow(!pshow)} className=" absolute top-[50%] translate-y-[-50%] right-[25px] cursor-pointer text-[20px]">
                                        {pshow == true ? <FaEye /> : <FaEyeSlash />}
                                    </div>

                                </div>
                                <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                                    <h3 className='font-dmsans text-[18px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>Repeat Password</h3>
                                    <input type="Repeat Password" placeholder='Password' className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]' />

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className=" flex mt-[40px]">
                            <input type="checkbox" /> <p className='font-dmsans text-[16px] font-normal text-[#767676] ms-3'>I have read and agree to the Privacy Policy</p>
                        </div>

                        <div className=" flex items-center mt-5">
                            <h3 className='font-dmsans text-[16px] font-normal text-[#767676]'>Subscribe Newsletter</h3>
                            <input type="radio" name='yes' className='ms-6' />
                            <h3 className='font-dmsans text-[16px] font-normal text-[#767676] ms-2'>Yes</h3>
                            <input type="radio" name='yes' className='ms-4' />
                            <h3 className='font-dmsans text-[16px] font-normal text-[#767676] ms-2'>No</h3>
                        </div>

                        <div className="mt-8">
                            <button type='submit' onClick={handleSubmit} className='font-dmsans text-[16px] font-bold text-white py-[20px] px-[70px] bg-[#262626]'>Sign up</button>
                        </div>

                        <ToastContainer
                            position="top-center"
                            autoClose={1000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                        />

                    </div>
                </section>
            </Container>
        </div>
    )
}

export default Signup