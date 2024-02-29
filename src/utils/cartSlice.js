import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
	},
	// multiple small reducers for different actions
	reducers: {
		// action => addItemAction
		// reducer function
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

// cartSlice: { actions: {addItemAction, removeItemAction, clearCartAction}, reducer:{}}

export const { addItemAction, removeItemAction, clearCartAction } =
	cartSlice.actions;

export default cartSlice.reducer;
