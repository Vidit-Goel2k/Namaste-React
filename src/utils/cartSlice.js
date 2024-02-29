import { createSlice, current } from "@reduxjs/toolkit";

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
			// Vanilla (older) Redux => "DONT MUTATE THE STATE" and return was kind of mandatory
			// const newState = [...state]
			// newState.items.push(action.payload)
			// return newState

			// Redux Toolkit => We HAVE to mutate the state (immer.js manages state immutablity by comparing the original state and updated state and providing a new immutable state under the hood for RTK and provides abstraction to devs to directly mutate the state) and return is not mandatory
			state.items.push(action.payload);
		},
		removeItemAction: (state) => {
			state.items.pop();
		},
		// originalState = { items: ["pizza"] }
		clearCartAction: (state) => {
			// console.log(state) Doesnt work
			console.log(current(state)); // correct way to do console log inside reducers

			// * Directly reassigning state like state = [] doesn't actually update the original state object; it creates a new local variable state that shadows the original state variable passed into the function. Therefore, it doesn't have any effect on the actual state object maintained by the state management system.
			// state = [] //*(doesnt work)

			// * RTK says either mutate the state or return a new state
			// return { items = [] }  //* (works) this new object will be replaced inside originalState = { items: [] }

			state.items.length = 0; // originalState = []
		},
	},
});

// cartSlice: { actions: {addItemAction, removeItemAction, clearCartAction}, reducer:{}}

export const { addItemAction, removeItemAction, clearCartAction } =
	cartSlice.actions;

export default cartSlice.reducer;
