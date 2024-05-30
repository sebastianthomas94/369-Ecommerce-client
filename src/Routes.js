import React from "react";
import LoginPage from "./pages/Login/index";
import OTPPage from "./pages/OTP";
import Homepage from "./pages/Home";
import ShopPage from "./pages/Shop";
import ProductPage from "./pages/Product";
import CheckoutPage from "./pages/CheckOut";
import CartPage from './pages/Cart'
import { createBrowserRouter } from "react-router-dom";
import App from "./App";

let routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Homepage /> },
      // { path: "*", element: <NotFound /> },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "otp",
        element: <OTPPage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "product/:productId",
        element: <ProductPage />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
]);

export default routes;
