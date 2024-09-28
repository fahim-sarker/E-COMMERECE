import { GiRoyalLove } from "react-icons/gi";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";


const Arrivalsitem = ({ item }) => {
    return (
        <>
            <div className="lg:w-[96%] w-[100%]">
                <div className="relative group overflow-hidden">
                    <p className='absolute top-[20px] left-[20px] text-[16px] font-sans font-bold bg-[#000] w-[92px] h-[35px] text-white text-center leading-[35px]'>{item.discountPercentage
                    }%</p>
                    <img className=' lg:py-0 py-[20px] lg:h-[300px] w-full h-[250px]' src={item.thumbnail} alt="Arr" />
                    <div className="bg-[#fff] pr-[20px] pt-[30px] absolute duration-500 ease-in-out left-0 bottom-[-150px] w-full h-[150px] group-hover:bottom-[0] flex justify-end">
                        <ul>
                            <li className='flex items-center gap-x-3 font-sans text-[16px] duration-300 ease-in-out hover:text[#262626] lg:hover:font-bold'>Add to Wish List <GiRoyalLove /></li>
                            <li className='flex items-center gap-x-3 font-sans text-[16px] duration-300 ease-in-out hover:text[#262626] hover:font-bold justify-end py-[10px]'>Compare <TfiReload /></li>
                            <li className='flex items-center gap-x-3 font-sans text-[16px] duration-300 ease-in-out hover:text[#262626] hover:font-bold justify-end'>Add to Cart <FaShoppingCart /></li>
                        </ul>
                    </div>
                </div>
                <div className="lg:flex justify-between lg:pt-[10px]">
                    <h2 className='font-sans text-[16px] font-bold text-[#262626]'>{item.title}</h2>
                    <p className='font-sans text-[16px] font-bold text-[#262626]'>${item.price}</p>
                </div>
                <div className="pb-[20px]">
                    <p className='font-sans text-[16px] font-bold capitalize text-[#767676]'>stock: {item.stock}</p>
                </div>
            </div>
        </>
    )
}

export default Arrivalsitem
