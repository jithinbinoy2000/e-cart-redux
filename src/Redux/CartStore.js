import {configureStore} from "@reduxjs/toolkit"
import ProductSlice from "./slices/ProductSlice"
const cartStore = configureStore({
    reducer:{
      ProductSlice
    }
})
export default cartStore