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
            return [...state,{...action.payload,quandity:1}]
        }
        else {
            return state.map(item=>{
                //find the item array
                if(item.id===action.payload.id){
                    //increament quandity value
                    return{...item,quandity:item.quandity+1} 
                    
                }
                else return {item}
                    
            })
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
