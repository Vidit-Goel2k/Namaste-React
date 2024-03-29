import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
	const [userName, setUserName] = useState();

	// authentication
	useEffect(() => {
		// make an api call and send username and password
		const data = {
			name: "Vidit Goel",
		};
		setUserName(data.name);
	}, []);

	return (
		<Provider store={appStore}>
			<userContext.Provider value={{ userName: userName, setUserName }}>
				<div className="app">
					<Header />
					<Outlet />
				</div>
			</userContext.Provider>
		</Provider>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: <AboutUs />,
			},
			{
				path: "/contact",
				element: <ContactUs />,
			},
			{
				path: "/restaurants/:restaurantId",
				element: <RestaurantMenu />,
			},
			{
				path: "/grocery",
				element: (
					<Suspense fallback={<h1>Loading...</h1>}>
						<Grocery />
					</Suspense>
				),
			},
			{
				path: "/cart",
				element: <Cart />,
			},
		],
		errorElement: <Error />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
