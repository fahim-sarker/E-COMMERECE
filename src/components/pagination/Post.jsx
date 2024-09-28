import React, { useContext, useEffect, useState } from 'react'
import { GiRoyalLove } from "react-icons/gi";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slice/ProductSlice';

const Post = ({ allData, categorysearchfilter, menulist,filterprice }) => {
;
  let [filtershow, SetfiloterShow] = useState([])
  let [cateshow, Setcateshow] = useState(true)
  let [priceshow, Setpriceshow] = useState([])
  let dispatch = useDispatch()



  useEffect(() => {
    let filterseparate = categorysearchfilter.slice(0, 5)
    SetfiloterShow(filterseparate)
  }, [categorysearchfilter])


  useEffect(()=>{
    let filterselect = filterprice.slice(0,5)
    Setpriceshow(filterselect)
  },[filterprice])

  let handleshow = () => {
    SetfiloterShow(categorysearchfilter)
    Setpriceshow(filterprice)
    Setcateshow(false)
  }
  let handlehide = () => {
    let filterseparate = categorysearchfilter.slice(0, 5)
    SetfiloterShow(filterseparate)
    Setcateshow(true)
    let filterselect = filterprice.slice(0, 5)
    Setpriceshow(filterselect)
    Setcateshow(true)
  }

  let handlecart = (item) => {
    dispatch(addToCart({ ...item, qty: 1 }))
  }


  return (
    <>
      {filterprice.length > 0 ? 
        <div className="">
        <div className="flex flex-wrap justify-between">
          {priceshow.map((item) => (
            <div className="lg:w-[32%] w-full py-5">
              <Link to={`/product/${item.id}`}>
                <div className="relative group overflow-hidden">
                  <p className='absolute top-[20px] left-[20px] text-[16px] font-sans font-bold bg-[#000] w-[92px] h-[35px] text-white text-center leading-[35px]'>{item.discountPercentage} %</p>
                  <img className=' lg:py-0 py-[20px] lg:h-[300px] w-full h-[250px]' src={item.thumbnail} alt="Arr" />
                  <div className="bg-[#fff] pr-[20px] pt-[30px] absolute duration-500 ease-in-out left-0 bottom-[-150px] w-full h-[150px] group-hover:bottom-[0] flex justify-end">
                    <ul>
                      <li className='flex items-center gap-x-3 font-sans text-[16px] duration-300 ease-in-out hover:text[#262626] lg:hover:font-bold'>Add to Wish List <GiRoyalLove /></li>
                      <li className='flex items-center gap-x-3 font-sans text-[16px] duration-300 ease-in-out hover:text[#262626] hover:font-bold justify-end py-[10px]'>Compare <TfiReload /></li>
                      <li className='flex items-center gap-x-3 font-sans text-[16px] duration-300 ease-in-out hover:text[#262626] hover:font-bold justify-end'>Add to Cart <FaShoppingCart /></li>
                    </ul>
                  </div>
                </div>
              </Link>
              <div className="lg:flex justify-between lg:pt-[10px]">
                <h2 className='font-sans text-[16px] font-bold text-[#262626]'>{item.title}</h2>
                <p className='font-sans text-[16px] font-bold text-[#262626]'>${item.price}</p>
              </div>
              <div className="pb-[20px]">
                <p className='font-sans text-[16px] font-bold capitalize text-[#767676]'>stock: {item.stock}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-end">
          {cateshow ? filterprice.length > 5 &&
            <button className='capitalize font-sans text-[20px] border-2 border-[#262626] px-12 py-3 font-bold rounded-lg hover:bg-[#262626] hover:text-white duration-300 ease-in-out' onClick={handleshow}>Show All</button>
            :
            <button className='capitalize font-sans text-[20px] border-2 border-[#262626] px-12 py-3 font-bold rounded-lg hover:bg-[#262626] hover:text-white duration-300 ease-in-out' onClick={handlehide}>Hide</button>
          }
        </div>
      </div>
      :

      categorysearchfilter.length > 0 ?
        <div className="">
          <div className="flex flex-wrap justify-between">
            {filtershow.map((item) => (
              <div className="lg:w-[32%] w-full py-5">
                <Link to={`/product/${item.id}`}>
                  <div className="relative group overflow-hidden">
                    <p className='absolute top-[20px] left-[20px] text-[16px] font-sans font-bold bg-[#000] w-[92px] h-[35px] text-white text-center leading-[35px]'>{item.discountPercentage} %</p>
                    <img className=' lg:py-0 py-[20px] lg:h-[300px] w-full h-[250px]' src={item.thumbnail} alt="Arr" />
                    <div className="bg-[#fff] pr-[20px] pt-[30px] absolute duration-500 ease-in-out left-0 bottom-[-150px] w-full h-[150px] group-hover:bottom-[0] flex justify-end">
                      <ul>
                        <li className='flex items-center gap-x-3 font-sans text-[16px] duration-300 ease-in-out hover:text[#262626] lg:hover:font-bold'>Add to Wish List <GiRoyalLove /></li>
                        <li className='flex items-center gap-x-3 font-sans text-[16px] duration-300 ease-in-out hover:text[#262626] hover:font-bold justify-end py-[10px]'>Compare <TfiReload /></li>
                        <li className='flex items-center gap-x-3 font-sans text-[16px] duration-300 ease-in-out hover:text[#262626] hover:font-bold justify-end'>Add to Cart <FaShoppingCart /></li>
                      </ul>
                    </div>
                  </div>
                </Link>
                <div className="lg:flex justify-between lg:pt-[10px]">
                  <h2 className='font-sans text-[16px] font-bold text-[#262626]'>{item.title}</h2>
                  <p className='font-sans text-[16px] font-bold text-[#262626]'>${item.price}</p>
                </div>
                <div className="pb-[20px]">
                  <p className='font-sans text-[16px] font-bold capitalize text-[#767676]'>stock: {item.stock}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-end">
            {cateshow ? categorysearchfilter.length > 5 &&
              <button className='capitalize font-sans text-[20px] border-2 border-[#262626] px-12 py-3 font-bold rounded-lg hover:bg-[#262626] hover:text-white duration-300 ease-in-out' onClick={handleshow}>Show All</button>
              :
              <button className='capitalize font-sans text-[20px] border-2 border-[#262626] px-12 py-3 font-bold rounded-lg hover:bg-[#262626] hover:text-white duration-300 ease-in-out' onClick={handlehide}>Hide</button>
            }
          </div>
        </div>

        :
        <div className={`${menulist == "activelist" ? "" : "flex justify-between flex-wrap pt-[60px]"}`}>
          {
            allData.map((item) => (
              <div className="lg:w-[32%] w-full py-5">
                <div className="relative group lg:overflow-hidden">
                  <p className='absolute top-[20px] left-[20px] text-[16px] font-sans font-bold bg-[#000] w-[92px] h-[35px] text-white text-center leading-[35px]'>{item.discountPercentage} %</p>
                  <Link to={`/product/${item.id}`}>
                    <img className='lg:py-0 py-[20px] lg:h-[300px] w-full h-[350px]' src={item.thumbnail} alt="Arr" />
                  </Link>
                  <div className="bg-[#fff] pr-[20px] pt-[30px] absolute duration-500 ease-in-out left-0 lg:bottom-[-150px] w-full h-[150px] lg:group-hover:bottom-[0] bottom-[-120px] flex justify-end">
                    <ul>
                      <li className='flex items-center gap-x-3 font-sans text-[16px] duration-300 ease-in-out hover:text[#262626] lg:hover:font-bold'>Add to Wish List <GiRoyalLove /></li>
                      <li className='flex items-center gap-x-3 font-sans text-[16px] duration-300 ease-in-out hover:text[#262626] hover:font-bold justify-end py-[10px]'>Compare <TfiReload /></li>
                      <li onClick={() => handlecart(item)} className='flex items-center gap-x-3 font-sans text-[16px] duration-300 ease-in-out hover:text[#262626] hover:font-bold justify-end'>Add to Cart <FaShoppingCart /></li>
                    </ul>
                  </div>
                </div>
                <div className="lg:flex justify-between lg:pt-[10px]">
                  <h2 className='pl-[10px] lg:pl-0 font-sans text-[16px] font-bold text-[#262626]'>{item.title}</h2>
                  <p className='pl-[10px] lg:pl-0  font-sans text-[16px] font-bold text-[#262626]'>${item.price}</p>
                </div>
                <div className="pb-[20px]">
                  <p className='pl-[10px] lg:pl-0  font-sans text-[16px] font-bold capitalize text-[#767676]'>stock: {item.stock}</p>
                </div>
              </div>
            ))
          }
        </div>
      }
    </>
  )
}

export default Post
