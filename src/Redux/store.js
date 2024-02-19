 import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from './slices/Wishlist'
 const store = configureStore({
    reducer:{
            wishlistReducer: wishlistSlice

    }
 })

 export default store