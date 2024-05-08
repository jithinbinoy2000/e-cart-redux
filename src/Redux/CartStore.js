import {configureStore} from "@reduxjs/toolkit"
import ProductSlice from "./slices/ProductSlice"
import WishlistSlice from "./slices/WishlistSlice"
import CartSlice from "./slices/CartSlice"

const cartStore = configureStore({
    reducer:{
      ProductSlice,
      WishlistSlice,
      cartReducer:CartSlice
    }
})
export default cartStore