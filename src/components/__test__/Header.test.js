import { Provider } from "react-redux";
import Header from "../Header"; // Correct component name
import appStore from '../../utils/appStore';
import { fireEvent,render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// ✅ Test 1: Login Button
it("should render Header component with a Login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: /login/i }); // case-insensitive
    expect(loginButton).toBeInTheDocument();
});

// ✅ Test 2: Cart Item with 0 count
it("should render Header component with Cart item (0)", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const cartItem = screen.getByText("(0)");
    expect(cartItem).toBeInTheDocument();
});
it("should change Button to logout on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const LoginBtn = screen.getByRole("button",{name:"Login"});
    fireEvent.click(LoginBtn);
    
    const LogOutBtn = screen.getByRole("button",{name:"Logout"});

    expect(LogOutBtn).toBeInTheDocument();

});

