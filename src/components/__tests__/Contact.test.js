import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

// test/it("should load contact us component", () => {
// Render
// 	render(<ContactUs />);
// Query
// 	const heading = screen.getByRole("heading");
// Assert
// 	expect(heading).toBeInTheDocument();
// });

describe("Contact Us Page Test Cases", () => {

	beforeAll(()=>{
		console.log(beforeAll)
	})

	beforeEach(()=>{
		console.log(beforeEach)
	})

	afterAll(()=>{
		console.log(afterAll)
	})

	afterEach(()=>{
		console.log(afterEach)
	})

	test("should load contact us component", () => {
		render(<ContactUs />);

		const heading = screen.getByRole("heading");

		expect(heading).toBeInTheDocument();
	});

	it("should load button in Contact component", () => {
		render(<ContactUs />);

		const button = screen.getByRole("button");

		expect(button).toBeInTheDocument();
	});

	// test("should load random text in Contact component", () => {
	// 	render(<ContactUs />);

	// 	const randomText = screen.getByText("Random")

	// 	expect(randomText).toBeInTheDocument();
	// });

	test("should load input name in Contact component", () => {
		// Render
		render(<ContactUs />);

		// Querying
		const inputName = screen.getByPlaceholderText("name");

		// Assert
		expect(inputName).toBeInTheDocument();
	});

	test("should load 2 input boxes on the contact component", () => {
		render(<ContactUs />);

		// Querying
		const inputBoxes = screen.getAllByRole("textbox");

		// console.log(inputBoxes)

		// Assertion
		expect(inputBoxes.length).not.toBe(3);
	});
});
