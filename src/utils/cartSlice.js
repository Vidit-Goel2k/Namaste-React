import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
	},
	reducers: {
		addItemAction: (state, action) => {
			state.items.push(action.payload);
		},
		removeItemAction: (state) => {
			state.items.pop();
		},
		clearCartAction: (state) => {
			state.items.length = 0; // []
		},
	},
});

export const { addItemAction, removeItemAction, clearCartAction } =
	cartSlice.actions;

export default cartSlice.reducer;
