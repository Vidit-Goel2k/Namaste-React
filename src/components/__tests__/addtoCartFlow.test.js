import RestaurantMenu from "../RestaurantMenu";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resMenuMock.json";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import appStore from "./../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import Cart from "./../Cart";

global.fetch = jest.fn(() => {
	return Promise.resolve({
		json: () => Promise.resolve(MOCK_DATA)
	});
});

test("should render RestaurantMenu component", async () => {
	await act(async () => {
		return render(<RestaurantMenu />);
	});

	const resName = screen.getByRole("heading", { name: "Shiva The Dhaba" });

	expect(resName).toBeInTheDocument();
});

test("should render dropdown menuItems when clicked on a category", async () => {
	await act(async () => {
		return render(
			<Provider store={appStore}>
				<RestaurantMenu />
			</Provider>
		);
	});

	const recommendedCategory = screen.getByText("Recommended (20)");

	fireEvent.click(recommendedCategory);

	const itemName = screen.getByText("Paneer Tikka");

	expect(itemName).toBeInTheDocument();
});

test("should update cart count in header when item is added to cart", async () => {
	await act(async () => {
		return render(
			<BrowserRouter>
				<Provider store={appStore}>
					<Header />
					<RestaurantMenu />
				</Provider>
			</BrowserRouter>
		);
	});

	const cartCountBefore = screen.getByText("Cart - (0)");

	expect(cartCountBefore).toBeInTheDocument();

	const recommendedCategory = screen.getByText("Recommended (20)");

	fireEvent.click(recommendedCategory);

	const addToCartButtons = screen.getAllByRole("button", { name: "Add +" });

	fireEvent.click(addToCartButtons[0]);

	const cartCountAfter = screen.getByText("Cart - (1)");

	expect(cartCountAfter).toBeInTheDocument();
});

test("should update cart Page when item is added to cart", async () => {
	await act(async () => {
		return render(
			<Provider store={appStore}>
				<Cart />
			</Provider>
		);
	});

	const itemName = screen.getByText("Paneer Tikka");

	expect(itemName).toBeInTheDocument();
});

test("should empty cart Page when clear cart button is clicked", async () => {
	await act(async () => {
		return render(
			<Provider store={appStore}>
				<Cart />
			</Provider>
		);
	});

	const itemName = screen.getByText("Paneer Tikka");
	expect(itemName).toBeInTheDocument();
	
	const clearCartBtn = screen.getByRole("button", {name: "Clear Cart"})

	fireEvent.click(clearCartBtn)

	expect(itemName).not.toBeInTheDocument();
});
