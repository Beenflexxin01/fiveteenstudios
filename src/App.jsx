// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./UI/AppLayout";

import Home from "./Page/Home";
import Products from "./Page/Products";
import Summer from "./Page/Summer";
import Autumn from "./Page/Autumn";
import Contact from "./Page/Contact";
import PageNotFound from "./Page/PageNotFound";
import Login from "./Page/Login";
import SignUp from "./Page/SignUp";
import PasswordReset from "./Page/PasswordReset";
import SummerDetails from "./Page/SummerDetails";
import AdminPanel from "./AdminPanel/AdminPanel";

import Cart from "./Features/Cart/Cart";
import ProductPage from "./Features/Products/ProductPage";
import AllFeatureProducts from "./Features/Home/FeatureProducts/AllFeatureProducts";

import ArrivalDatas from "./Features/Home/Arrivals/ArrivalDatas";
import FeatureProductDetails from "./Features/Home/FeatureProducts/FeatureProductDetails";
import AllfeatureProductDetails from "./Features/Home/FeatureProducts/AllfeatureProductDetails";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./AdminPanel/Dashboard/Dashboard";
import Posting from "./AdminPanel/Posting/Posting";
import Settings from "./AdminPanel/Settings/Settings";
import Orders from "./AdminPanel/Orders/Orders";

// import CheckOutSuccess from "./UI/CheckOutSuccess";
// import ShoppingCart from "./Features/Cart/ShoppingCart";

function App() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || []
  );

  const [cartValidation, setCartValidation] = useState([]);

  useEffect(
    function () {
      localStorage.setItem("shopping-cart", JSON.stringify(cart));
    },
    [cart]
  );

  return (
    <>
      <BrowserRouter basename="/">
        <ToastContainer />
        <Routes>
          <Route
            element={
              <AppLayout
                cartCount={cart.length}
                cart={cart}
                setCart={setCart}
              />
            }>
            <Route index element={<Navigate replace to="home" />} />
            <Route
              path="cart"
              element={<Cart />}
              cart={cart}
              setCart={setCart}
            />
            <Route path="contact" element={<Contact />} />
            <Route path="home" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="login" element={<Login />} />
            <Route path="AllFeatureProducts" element={<AllFeatureProducts />} />
            <Route path="account/register" element={<SignUp />} />
            <Route path="account/recover" element={<PasswordReset />} />
            <Route
              path="productPage/:id"
              element={
                <ProductPage
                  cart={cart}
                  setCart={setCart}
                  cartValidation={cartValidation}
                  setCartValidation={setCartValidation}
                />
              }
            />
            <Route
              path="arrivalData/:id"
              element={
                <ArrivalDatas
                  cart={cart}
                  setCart={setCart}
                  cartValidation={cartValidation}
                  setCartValidation={setCartValidation}
                />
              }
            />
            <Route
              path="summerDetails/:id"
              element={
                <SummerDetails
                  cart={cart}
                  setCart={setCart}
                  cartValidation={cartValidation}
                  setCartValidation={setCartValidation}
                />
              }
            />
            <Route
              path="featureData/:id"
              element={
                <FeatureProductDetails
                  cart={cart}
                  setCart={setCart}
                  cartValidation={cartValidation}
                  setCartValidation={setCartValidation}
                />
              }
            />
            <Route
              path="allfeatureData/:id"
              element={
                <AllfeatureProductDetails
                  cart={cart}
                  setCart={setCart}
                  cartValidation={cartValidation}
                  setCartValidation={setCartValidation}
                />
              }
            />
            <Route path="collections/ss" element={<Summer />} />
            <Route path="collections/aw" element={<Autumn />} />
            <Route path="admin" element={<AdminPanel />} />
            <Route path="admin" element={<Dashboard />} />
            <Route path="posting" element={<Posting />} />
            <Route path="settings" element={<Settings />} />
            <Route path="orders" element={<Orders />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
