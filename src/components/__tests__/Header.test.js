import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import appStore from './../../utils/appStore';
import "@testing-library/jest-dom"

test('should render Header component with a Login button', () => { 
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    )

    // const loginButton = screen.getByText("Login")
    // const loginButton = screen.getByRole("button")
    const loginButton = screen.getByRole("button", {name: "Login"})

    expect(loginButton).toBeInTheDocument()
 })

test('should change Login button to Logout on click', () => { 
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", {name: "Login"})
    
    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole("button", {name: "Logout"})

    expect(loginButton).toBeInTheDocument()
 })

test('should render Header component with cart items 0', () => { 
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    )

    const cartItems = screen.getByText("Cart - (0)")

    expect(cartItems).toBeInTheDocument()
 })

test('should render Header component with a cart item', () => { 
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    )

    const cartItems = screen.getByText(/Cart/)

    expect(cartItems).toBeInTheDocument()
 })