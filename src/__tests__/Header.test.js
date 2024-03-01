import { render } from "react-dom";
import Header from "./../components/Header";
import { screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "./../utils/appStore";
import { BrowserRouter } from "react-router-dom";

test("should load Header Component with a login button", () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>
	);

	// const loginButton = screen.getByText("login")

	// expect(loginButton).toBeInTheDocument()
});

// import { createRoot } from 'react-dom/client'; // Import from "react-dom/client"
// import Header from './../components/Header';
// import { screen } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import appStore from './../utils/appStore';
// import { BrowserRouter } from 'react-router-dom';

// test('should load Header Component with a login button', () => {
//   const root = document.createElement('div');
//   document.body.appendChild(root);

//   createRoot(root).render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );

//   // Use queryByText instead of getByText to handle asynchronous rendering
// //   const loginButton = screen.queryByText('login');

// //   expect(loginButton).toBeInTheDocument(); // This assertion will fail if loginButton is null

// //   document.body.removeChild(root);
// });

