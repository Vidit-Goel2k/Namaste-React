import React from "react";
import ItemsList from "./ItemsList";
import { useDispatch, useSelector } from "react-redux";
import { clearCartAction } from "../utils/cartSlice";

const Cart = () => {
	// good for optimisation // selecting and subscribing to a specific portion of store
	const cartItems = useSelector((store) => store.cart.items);
	// bad for optimisation // subscribing to whole store
	// const store = useSelector((store) => store);
	// const cartItems = store.cart.items;

	const clearCartDispatch = useDispatch();
	const clearCartHandler = () => {
		clearCartDispatch(clearCartAction());
	};
	return (
		<div className="flex flex-col justify-center">
			<h1 className="p-4 my-4 text-xl font-bold text-center">Cart</h1>
			<div className="flex justify-center">
				<button
					className="p-2 m-2 text-center bg-red-200 rounded-lg"
					onClick={clearCartHandler}
				>
					Clear Cart
				</button>
			</div>
			<div className="w-6/12 mx-auto my-4">
				<ItemsList items={cartItems} />
			</div>
		</div>
	);
};

export default Cart;
