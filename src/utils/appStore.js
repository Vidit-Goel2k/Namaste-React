import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
	// one big reducer for whole store having multiple small reducers of each slice
	reducer: {
		cart: cartReducer,
	},
});

export default appStore;
