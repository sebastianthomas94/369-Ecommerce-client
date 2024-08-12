import React from "react";
import LoginPage from "./pages/UserPages/Login/index";
import OTPPage from "./pages/UserPages/OTP";
import Homepage from "./pages/UserPages/Home";
import ShopPage from "./pages/UserPages/Shop";
import ProductPage from "./pages/UserPages/Product";
import CheckoutPage from "./pages/UserPages/CheckOut";
import CartPage from "./pages/UserPages/Cart";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProfilePage from "./pages/UserPages/Profile";
import WishlistPage from "./pages/UserPages/Wishlist";
import OrdersPage from "./pages/UserPages/Orders";
import AddressPage from "./pages/UserPages/Addresses";
import AdminLoginPage from "./pages/AdminPages/Login";
import AdminHeader from "./pages/AdminPages/Home";
import Orders from "./pages/AdminPages/Orders";

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
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "wishlist",
        element: <WishlistPage />,
      },
      {
        path: "orders",
        element: <OrdersPage />,
      },
      {
        path: "addresses",
        element: <AddressPage />,
      },
    ],
  },
  {
    path: "admin",
    element: <App />,
    children: [
      {
        path: "",
        element: <AdminHeader/>,
      },
      { path: "login", element: <AdminLoginPage /> },
      { path: "orders", element: <Orders /> },
    ],
  },
]);

export default routes;
