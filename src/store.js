import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import cartSlice from "./features/cartSlice";

export default configureStore({
  reducer: {
    counter: counterSlice,
    myCart: cartSlice,
  },
});
