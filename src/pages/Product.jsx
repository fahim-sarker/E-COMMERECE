import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from '../components/Container'
import { TiArrowSortedUp } from "react-icons/ti";
import { BiSolidCategory } from "react-icons/bi";
import { TfiMenuAlt } from "react-icons/tfi";
import { apidata } from '../components/ContextApi';
import Post from '../components/pagination/Post';
import PaginationArea from '../components/pagination/PaginationArea';
import { Link } from 'react-router-dom';


const Product = () => {
  let data = useContext(apidata)
  let [catshow, setcatShow] = useState(false)
  let [bandshow, setbandShow] = useState(false)
  let [priceshow, setpriceShow] = useState(false)
  let [category, setCategory] = useState([])
  let [categorysearchfilter, setCategorysearchfilter] = useState([])
  let [menulist, Setmenulist] = useState ("")
  let [bandgory, SetBandgory] = useState ([])
  let [brandsearchfilter, SetBrandsearchfilter] = useState ([])
  let [lowprice, Setlowprice] = useState("")
  let [highprice, Sethighprice] = useState("")
  let [filterprice, Setfilterprice] = useState([])
  let [mobileshow, setmovileShow] = useState(true)

  let catref = useRef()
  let bandref = useRef()
  let priceref = useRef()

  let [currentpage, setcurrentpage] = useState (1)
  let [perpage, setperpage] = useState (12)

  let lastpage = perpage * currentpage
  let firstpage = lastpage - perpage

  let allData = data.slice(firstpage,lastpage)

  let pagenumber = []

  for(let i = 0; i < Math.ceil(categorysearchfilter.length > 0 ?categorysearchfilter : data.length / perpage); i ++){
    pagenumber.push(i)
  }


  let paginate = (pagenumber)=>{
    setcurrentpage(pagenumber + 1);
  }
  let next = ()=>{
   if(currentpage < pagenumber .length){
    setcurrentpage((state)=>state + 1)
   }
  }
  let prev = ()=>{
   if(currentpage > 1){
    setcurrentpage((state)=>state -1)
   }
  }

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (catref.current.contains(e.target) == true) {
        setcatShow(!catshow)
      } else {
        setcatShow(false)
      }
      if (bandref.current.contains(e.target) == true) {
        setbandShow(!bandshow)
      } else {
        setbandShow(false)
      }
      if (priceref.current.contains(e.target) == true) {
        setpriceShow(!priceshow)
      } else {
        setpriceShow(false)
      }
    })
  }, [catshow, bandshow, priceshow])


  useEffect(()=>{
    setCategory([...new Set (data.map((item)=>item.category))])
    SetBandgory([...new Set (data.map((item)=>item.brand))])
  },[data])

  // let handlesubcategory = (citem)=>{
  //   let categoryfilter = data.filter((item)=>item.category == citem)
  //   setCategorysearchfilter(categoryfilter)
  // }

  let handlesubcategory = (citem) => {
    // Reset other filters before applying the category filter//
    setCategorysearchfilter([]);
    Setfilterprice([]);
    SetBrandsearchfilter([]);
    let categoryfilter = data.filter((item) => item.category === citem);
    setCategorysearchfilter(categoryfilter);
  };

  // let handlebrand = (citem) =>{
  //   let brandfilter = data.filter((item)=>item.brand == citem)
  //   setCategorysearchfilter(brandfilter)
  // }

  let handlebrand = (citem) => {
    // Reset other filters before applying the brand filter//
    setCategorysearchfilter([]);
    Setfilterprice([]);
    SetBrandsearchfilter([]);
    let brandfilter = data.filter((item) => item.brand === citem);
    setCategorysearchfilter(brandfilter);
  };

  let handlelist = () => {
    Setmenulist("activelist")
  }


  // let handleprice = (value) =>{
  //   Setlowprice(value.low)
  //   Sethighprice(value.high)
  //   let pricefilter = data.filter((item)=>item.price > value.low && item.price < value.high)
  //   Setfilterprice(pricefilter);
  // }

  let handleprice = (value) => {
    // Reset other filters before applying the price filter//
    setCategorysearchfilter([]);
    SetBrandsearchfilter([]);
    Setlowprice(value.low);
    Sethighprice(value.high);
    let pricefilter = data.filter(
      (item) => item.price >= value.low && item.price <= value.high
    );
    Setfilterprice(pricefilter);
  };


  let handleshowdata = (e)=>{
    setperpage(e.target.value);
  }

  useEffect(()=>{
    function mobilenav(){
      if(window.innerWidth < 1024){
        setmovileShow(false)
      }else{
        setmovileShow(true)
      }
    }
    mobilenav();
    window.addEventListener("resize", mobilenav)
  },[])
   

  return (
    <section className='lg:py-[124px] lg:px-0 px-2'>
      <Container>
        <div className="lg:flex justify-between">
          <div className="lg:w-[20%] w-[100%] flex-wrap">
            <h2 className='font-sans lg:text-[49px] text-[25px] font-bold text-[#262626] pb-[11px]'>Products</h2>
            <p className='font-sans font-normal text-[16px] text-[#767676]'><Link to="/">Home  &#62;  shop</Link> </p>
            <div className="lg:pt-[112px]  flex justify-between items-center">
              <h2 className='cursor-pointer font-sans text-[20px] font-bold text-[#262626] pb-[30px] lg:pt-0 pt-5'>Shop by Category</h2>
            </div>
            <div className="lg:h-[500px] h-[300px] overflow-y-scroll cursor-pointer">
              <ul className=''>
                {category.map((item)=>(
                  <li onClick={()=>handlesubcategory(item)} className='flex justify-between font-sans text-[16px] font-normal lg:py-[30px] py-3 border-b border-[#F0F0F0] capitalize'>{item}</li>
                ))}
              </ul>
            </div>
            <div ref={catref} className="lg:pt-[50px] flex justify-between pb-[30px] items-center">
              <h2 className='font-sans text-[20px] font-bold text-[#262626] '>Shop by Brand</h2>
              <TiArrowSortedUp />
            </div>  
              <div className="lg:h-[500px] h-[300px] overflow-y-scroll cursor-pointer">
                {bandgory.map((item)=>(
                <ul className='lg:py-[30px] py-3 border-b border-[#F0F0F0]'>
                  <li onClick={()=>handlebrand(item)} className='font-sans text-[16px] font-normal capitalize'>{item}</li>
                </ul>
                ))}
              </div>
            <div className="lg:pt-[50px] pt-4 flex justify-between lg:pb-[30px] pb-2 items-center">
              <h2 className='font-sans text-[20px] font-bold text-[#262626] '>Shop by Price</h2>
              <TiArrowSortedUp />
            </div>
              <div className="">
                <ul className='py-[30px] border-b border-[#F0F0F0] lg:h-[300px] h-[200px] overflow-y-scroll cursor-pointer'>
                  <li onClick={()=>handleprice({low:0,high:20})} className='font-sans text-[16px] font-normal'>$0.00 - $9.99</li>
                  <li onClick={()=>handleprice({low:21,high:50})} className='font-sans text-[16px] font-normal pt-6'>$21.00 - $50.00</li>
                  <li onClick={()=>handleprice({low:51,high:100})} className='font-sans text-[16px] font-normal pt-6'>$51.00 - $100</li>
                  <li onClick={()=>handleprice({low:100,high:500})} className='font-sans text-[16px] font-normal pt-6'>$101 - $500</li>
                  <li onClick={()=>handleprice({low:501,high:1000})} className='font-sans text-[16px] font-normal pt-6'>$501 - $1000</li>
                  <li onClick={()=>handleprice({low:1001,high:2000})} className='font-sans text-[16px] font-normal pt-6'>$1001 - $2000</li>
                  <li onClick={()=>handleprice({low:2001,high:3000})} className='font-sans text-[16px] font-normal pt-6'>$2001 - $3000</li>
                  <li onClick={()=>handleprice({low:3001,high:4000})} className='font-sans text-[16px] font-normal pt-6'>$3001 - $4000</li>
                  <li onClick={()=>handleprice({low:4001,high:5000})} className='font-sans text-[16px] font-normal pt-6'>$40011 - $5000</li>
                  <li onClick={()=>handleprice({low:5001,high:6000})} className='font-sans text-[16px] font-normal pt-6'>$5001 - $60000</li>
                  <li onClick={()=>handleprice({low:6001,high:10000})} className='font-sans text-[16px] font-normal pt-6'>$6001 - $10000</li>
                </ul>
              </div>
                        <div ref={bandref} className="lg:pt-[50px] flex justify-between pb-[30px] items-center">
              <h2 className='font-sans text-[20px] font-bold text-[#262626] '>Shop by Color</h2>
              <TiArrowSortedUp />
            </div>
            {bandshow &&
              <div className="">
                <ul className=' '>
                  <li className='relative font-sans text-[16px] py-[30px] border-b border-[#F0F0F0] font-normal after:absolute after:content-[""] after:top-[48%]
                after:translate-y-[-48%] after:left-[0px] after:h-[11px] after:w-[11px] after:bg-[#262626] pl-[20px] after:rounded-full'>Color 1</li>
                  <li className='relative font-sans text-[16px] py-[30px] border-b border-[#F0F0F0] font-normal after:absolute after:content-[""] after:top-[48%]
                after:translate-y-[-48%] after:left-[0px] after:h-[11px] after:w-[11px] after:bg-[#FF8686] pl-[20px] after:rounded-full'>Color 2</li>
                  <li className='relative font-sans text-[16px] py-[30px] border-b border-[#F0F0F0] font-normal after:absolute after:content-[""] after:top-[48%]
                after:translate-y-[-48%] after:left-[0px] after:h-[11px] after:w-[11px] after:bg-[#7ED321] pl-[20px] after:rounded-full'>Color 3</li>
                  <li className='relative font-sans text-[16px] py-[30px] border-b border-[#F0F0F0] font-normal after:absolute after:content-[""] after:top-[48%]
                after:translate-y-[-48%] after:left-[0px] after:h-[11px] after:w-[11px] after:bg-[#B6B6B6] pl-[20px] after:rounded-full'>Color 4</li>
                  <li className='relative font-sans text-[16px] py-[30px] border-b border-[#F0F0F0] font-normal after:absolute after:content-[""] after:top-[48%]
                after:translate-y-[-48%] after:left-[0px] after:h-[11px] after:w-[11px] after:bg-[#15CBA5] pl-[20px] after:rounded-full'>Color 5</li>
                </ul>
              </div>
            }
          </div>
          <div className="lg:w-[75%] lg:pt-[220px]">
            <div className="lg:flex justify-between ">
              <div className="lg:w-[20%] flex gap-x-7 items-center lg:pt-0 pt-[20px] lg:justify-start justify-between lg:px-0 px-2">
                <div onClick={()=>Setmenulist("")} className="bg-[#000] cursor-pointer h-[36px] w-[36px] px-2 py-2 border-2 border-bg-[#000]">
                  <BiSolidCategory className='text-white font-[20px]' />
                </div>
                <div onClick={handlelist} className="border-2 border-bg-[#000] cursor-pointer px-2 py-2">
                  <TfiMenuAlt />
                </div>
              </div>
              <div className="lg:w-[30%] items-center flex gap-x-5 lg:justify-end py-[20px] lg:py-[0]">
                <div className="flex gap-6">
                  <p className='font-sans text-[16px] text-[#767676] py-2 font-medium capitalize'>Sort by :</p>
                  <select className='font-sans text-[16px] text-[#767676] capitalize border-2 border-bg-[#000] h-[36px] w-[250px] pl-[10px]' name="" id="">
                    <option className='font-sans text-[16px] text-[#767676] font-medium capitalize' value="">featured</option>
                    <option className='font-sans text-[16px] text-[#767676] font-medium capitalize' value="">price</option>
                  </select>
                </div>
              </div>
              <div className="lg:w-[20%] items-center flex gap-x-5 lg:justify-end">
                <div className="flex lg:gap-x-3 gap-x-[40px] justify-end lg:pb-0 pb-[20px]">
                  <p className='font-sans text-[16px] text-[#767676] py-2 font-medium capitalize'>show :</p>
                  <select onChange={handleshowdata} className='border-2 border-bg-[#000] h-[36px] lg:w-[139px] w-[250px] pl-[10px]' name="" id="">
                    <option value="18">18</option>
                    <option value="20">20</option>
                    <option value="24">24</option>
                    <option value="30">30</option>
                    <option value="36">36</option>
                    <option value="42">42</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="">
             <Post allData={allData} categorysearchfilter={categorysearchfilter} brandsearchfilter={brandsearchfilter} menulist={menulist} filterprice={filterprice}/>
            </div>
              <div className="text-end">
                <PaginationArea pagenumber={pagenumber} paginate={paginate} currentpage={currentpage} next={next} prev={prev} mobileshow={mobileshow}/>
              </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Product
