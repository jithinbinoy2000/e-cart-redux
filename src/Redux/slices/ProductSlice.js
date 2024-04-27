import axios from "axios";
import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

// api action
export const fetchProducts = createAsyncThunk('allProducts/fetchProducts',async()=>{
    // api call using axios
    const response = await axios.get("https://dummyjson.com/products")
      return response.data.products
})
// slices
const productSlice = createSlice({
    name:'allProducts',
    initialState:{
        products:[],
        loading:false,
        error:""
    },
    extraReducers:(builder)=>{
     builder.addCase(fetchProducts.pending,(state)=>{
        state.loading=true
     })
     builder.addCase(fetchProducts.fulfilled,(state,action)=>{
        state.loading=false
        state.products=action.payload
     })
     builder.addCase(fetchProducts.rejected,(state)=>{
        state.loading=false
        state.products=[]
        state.error="error 404 cannot fetch data, please refresh"
     })
    }
})
export default productSlice.reducer;
export const { } = productSlice.actions;