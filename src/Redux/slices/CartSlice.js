import { createSlice } from "@reduxjs/toolkit";

const CartSlice =createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addtoCart:(state,action)=>{
            //find already exist
           const test = state.find((item)=>item.id===action.payload.id)
        if(!test){
            //adding an new data as defulat --quandity
             state.push({...action.payload,quandity:1,totalPrice:action.payload.price})
            //return [...state,{...action.payload,quandity:1}]
        }
        else {
            
                    const newState =state.filter((item)=>item.id!==test.id)
                    test.quandity++
                    test.totalPrice=test.quandity*test.price
                state = ([...state,test])
           
         }
        },
        removefromCart:(state,action)=>{
          const data=state.filter(item=>item.id!=action.payload.id)
          return data
        },
        emptyCart:(state)=>{
            return state=[]
        }
    }
})
export const{addtoCart,removefromCart,emptyCart,lengthChanged}=CartSlice.actions
export default CartSlice.reducer
