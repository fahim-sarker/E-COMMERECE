import React, {children, useEffect, useState} from 'react'
import { createContext } from 'react'
import axios from 'axios';

let apidata = createContext()

const ContextApi = ({children}) => {
  let [info, Setinfo] = useState([])
  let getData = ()=> axios.get("https://dummyjson.com/products?&limit=0").then((response)=>{
    Setinfo(response.data.products);
  })

  useEffect(()=>{
    getData()
  },[])


  return (
    <>
      <apidata.Provider value={info}>{children}</apidata.Provider>
    </>
  )
}

export  {ContextApi,apidata}
