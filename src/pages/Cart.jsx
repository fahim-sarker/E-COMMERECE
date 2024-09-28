import Container from '../components/Container'
import React from 'react'
import { RxCross2 } from "react-icons/rx";
import Lg from "../assets/logo.png"
import Flex from '../components/Flex';
import { useDispatch, useSelector } from 'react-redux';
import { productdeccrement, productincrement, productremove } from '../components/slice/ProductSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';



const Cart = () => {
  let dispatch = useDispatch()
  let navigate = useNavigate()
  let data = useSelector((state) => state.Product.cartitem)

  let handleincrement = (index) => {
    dispatch(productincrement(index))
  }
  let handledecrement = (index) => {
    dispatch(productdeccrement(index))
  }
  let handleremove = (index) => {
    dispatch(productremove(index))
  }


 const {totalprice,totalquantity} = data.reduce((acc, item) =>{
  acc.totalprice += item.price * item.qty
  acc.totalquantity += item.qty
  return acc
 },{totalprice:0,totalquantity:0})


 let handlecheckout= ()=>{
  toast("please wait!")
    setTimeout(()=>{
      navigate("/checkout")
    },2000)
 }




  return (
    <div className='lg:my-[80px] my-[30px] lg:px-0 px-2'>
      <Container>
        <h2 className='font-sans font-bold lg:text-[36px] text-[25px]'>Cart</h2>
        <p className='text-[16px] font-sans font-normal lg:pb-[80px] pb-[50px]'>Home  &#62;  Cart</p>
        <div className="border-2 border-[#F0F0F0]">
          <div className="bg-[#F5F5F3] h-[90px] flex justify-between items-center">
            <div className="w-[40%]">
              <h4 className='pl-10 text-[16px] font-sans font-bold'>Product</h4>
            </div>
            <div className="w-[15%]">
              <h4 className='text-[16px] font-sans font-bold text-center'>Price</h4>
            </div>
            <div className="w-[30%]">
              <h4 className='text-[16px] font-sans font-bold text-center'>Quantity</h4>
            </div>
            <div className="w-[15%]">
              <h4 className='text-[16px] font-sans font-bold text-center'>Total</h4>
            </div>
          </div>
          {data.map((item, index) => (
            <div className="flex justify-between lg:py-10 py-2 items-center border-b border-[#F0F0F0]">
              <div className="lg:flex  lg:items-center lg:w-[40%] w-[30%] lg:pl-10 pl-2 gap-x-20">
                <RxCross2 onClick={() => handleremove(index)} />
                <img className='lg:h-[150px] h-[100px] lg:w-[150px] w-[100%]' src={item.thumbnail} alt="" />
                <p className='lg:text-[16px] text-[13px] font-sans font-bold'>{item.title}</p>
              </div>
              <div className="w-[15%]">
                <p className='lg:text-[16px] text-[13px] font-sans font-bold text-center'>${item.price}</p>
              </div>
              <div className="w-[30%]">
                <div className="w-[136px] h-[36px]  flex leading-[36px]  px-[25px] lg:gap-x-6 gap-x-3 mx-auto">
                  <p onClick={() => handledecrement(index)} className='font-bold lg:text-[25px] text-[18px] cursor-pointer'>-</p>
                  <p className='font-bold cursor-pointer'>{item.qty}</p>
                  <p onClick={() => handleincrement(index)} className='font-bold lg:text-[25px] text-[18px] cursor-pointer'>+</p>
                </div>
              </div>
              <div className="w-[15%]">
                <p className='lg:text-[16px] text-[13px] font-sans font-bold text-center'>${item.price * item.qty}</p>
              </div>
            </div>
          ))}
          <div className="flex justify-between px-10 pt-5">
            <div className="flex py-4 items-center">
              <p className='font-sans text-[16px] font-bold pr-[80px]'>SIZE :</p>
              <select className='w-[136px] h-[36px] border-2 px-3' name="" id="">
                <option value="">S</option>
                <option value="">M</option>
                <option value="">L</option>
                <option value="">XL</option>
                <option value="">XXL</option>
              </select>
            </div>
            <div className="lg:block hidden">
              <p className='text-[16px] font-sans font-normal'>Update cart</p>
            </div>
          </div>
        </div>
        <p className='text-end text-[16px] font-sans font-bold py-4'>Cart totals</p>
        <div className="flex justify-end">
          <div className=" border-2 border-[#262626] lg:w-[400px] w-[300px]">
          <div className="flex px-4  py-3 lg:w-[398px] w-[298px] justify-between pb-5 border-b border-[#262626]">
          <h3 className='text-[16px] font-sans font-bold'>Subtotal</h3>
          <h3 className='text-[16px] font-sans font-bold'>${totalprice}</h3>
        </div>
        <div className="flex px-4 py-3 lg:w-[398px] w-[298px]   justify-between pb-5 border-b border-[#262626]">
          <h3 className='text-[16px] font-sans font-bold'>Quantity</h3>
          <h3 className='text-[16px] font-sans font-bold'>{totalquantity}</h3>
        </div>
        <div className="flex px-4 py-3 lg:w-[398px] w-[298px]  justify-between pb-5">
          <h3 className='text-[16px] font-sans font-bold'>Total</h3>
          <h3 className='text-[16px] font-sans font-bold'>${totalprice}</h3>
        </div>
          </div>
        </div>
        <div className="flex justify-end my-4" onClick={handlecheckout}>
          <p className='lg:w-[230px] w-[200px] h-[60px] leading-[60px] text-center border-2 border-[#262626] font-sans lg:text-[18px] text-[14px] capitalize font-bold bg-[#000] text-white hover:bg-[#fff] duration-500 ease-in-out hover:text-black rounded-l'>Proceed to Checkout</p>
        </div>
        <ToastContainer />
      </Container>
    </div>
  )
}

export default Cart
