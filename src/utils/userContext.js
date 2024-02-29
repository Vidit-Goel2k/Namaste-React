import { createContext } from "react";

// understood the need for redux

const userContext = createContext({
	userName: "Default User",
});

export default userContext;
