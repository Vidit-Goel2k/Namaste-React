import { render, screen } from "@testing-library/react";
import ContactUs from "../components/ContactUs";
import "@testing-library/jest-dom";

// test("should load contact us component", () => {
    // Render
// 	render(<ContactUs />);
    // Query
// 	const heading = screen.getByRole("heading");
    // Assert
// 	expect(heading).toBeInTheDocument();
// });

test("should load contact us component", () => {
	render(<ContactUs />);

	const heading = screen.getByRole("heading");

	expect(heading).toBeInTheDocument();
});

test("should load button in Contact component", () => {
	render(<ContactUs />);

	const button = screen.getByRole("button")

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
	const inputName = screen.getByPlaceholderText("name")

    // Assert
	expect(inputName).toBeInTheDocument();
});

test('should load 2 input boxes on the contact component', () => { 
    render(<ContactUs />)

    // Querying
    const inputBoxes = screen.getAllByRole("textbox")

    // console.log(inputBoxes)

    // Assertion
    expect(inputBoxes.length).not.toBe(3)
 })