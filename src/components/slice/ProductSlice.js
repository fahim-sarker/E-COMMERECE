import { createSlice } from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
  name: 'product',
  initialState: {
   cartitem :localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
  },
  reducers: {
    addToCart: (state, action) =>{
    let findproduct = state.cartitem.findIndex((item)=>item.id == action.payload.id)
      if(findproduct !== -1){
        state.cartitem[findproduct].qty += 1
        localStorage.setItem("cart", JSON.stringify(state.cartitem))
      }else{
       state.cartitem=[...state.cartitem,action.payload]
       localStorage.setItem("cart", JSON.stringify(state.cartitem))
      }
   },
   productincrement: (state, action) =>{
    state.cartitem[action.payload].qty += 1
    localStorage.setItem("cart", JSON.stringify(state.cartitem))
   },
   productdeccrement: (state, action) =>{
    if(state.cartitem[action.payload].qty >1){
      state.cartitem[action.payload].qty -= 1
      localStorage.setItem("cart", JSON.stringify(state.cartitem))
    }
   },
   productremove:(state,action)=>{
    state.cartitem.splice(action.payload,1)
    localStorage.setItem("cart", JSON.stringify(state.cartitem))
   }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart,productincrement,productdeccrement,productremove } = ProductSlice.actions

export default ProductSlice.reducer
