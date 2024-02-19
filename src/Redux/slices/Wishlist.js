 import { createSlice } from "@reduxjs/toolkit";

 const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState:[],
    reducers:{
        //actions
        addToWishlist:((state,action) =>{
            state.push(action.payload);
          
        })
    }
 })

 export const {addToWishlist} = wishlistSlice.actions;
 export default wishlistSlice.reducer;