import { createContext } from "react";

const userContext = createContext({
	userName: "Default User",
});

export default userContext;

// understood the need for redux

// * REDUX
// * (WRITE DATA) => user clicks on add to cart button and the button's event handler DISPATCH an ACTION to the redux STORE where the REDUCER function is called which modifies / updates the cart SLICE of the redux store | => | (READ DATA) => the cart gets updated in the UI and VIEW LAYER by SUBSCRIBING TO THE STORE through SELECTOR which is responsible to update the component which are subscribed to a store whenever the data in the store changes
