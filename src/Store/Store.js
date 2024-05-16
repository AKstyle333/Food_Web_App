import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slice/CartSlice";
import cartSliceUi from "./Slice/CartSliceUi";

const store = configureStore({
    reducer:{
        cart : cartSlice.reducer,
        cartUi : cartSliceUi.reducer
    }
});

export default store;
