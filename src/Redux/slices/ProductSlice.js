import axios from "axios";
import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

// api action
export const fetchProducts = createAsyncThunk('allProducts/fetchProducts',async()=>{
    // api call using axios
    const response = await axios.get("https://dummyjson.com/products")
     //store data permemntely in localstorage
     localStorage.setItem("products",JSON.stringify(response.data.products))
      return response.data.products
     
})
// slices
const productSlice = createSlice({
    name:'allProducts',
    initialState:{
        products:[],
        productContainer:[],
        loading:false,
        error:""
    },
    reducers:{
      productSearch:(state,action)=>{
        state.products = state.productContainer.filter(products=>products.title.toLowerCase().includes(action.payload))
      }
    },
    extraReducers:(builder)=>{
     builder.addCase(fetchProducts.pending,(state)=>{
        state.loading=true
     })
     builder.addCase(fetchProducts.fulfilled,(state,action)=>{
        state.loading=false
        state.products=action.payload
        state.productContainer=action.payload
     })
     builder.addCase(fetchProducts.rejected,(state)=>{
        state.loading=false
        state.products=[]
        state.error="error 404 cannot fetch data, please refresh"
     })
    }
})

export const {productSearch} = productSlice.actions;
export default productSlice.reducer;

