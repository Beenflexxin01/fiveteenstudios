import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import AppLayout from "./UI/AppLayout";
import Home from "./Page/Home";
import Products from "./Page/Products";
import Journals from "./Page/Journals";
import Summer from "./Page/Summer";
import Autumn from "./Page/Autumn";
import Story from "./Page/Story";
import Contact from "./Page/Contact";
import PageNotFound from "./Page/PageNotFound";
import Login from "./Page/Login";
import Cart from "./Page/Cart";
import SignUp from "./Page/SignUp";
import PasswordReset from "./Page/PasswordReset";
import Blogs from "./Features/Journals.jsx/Blogs";
import ProductPage from "./Features/Products/ProductPage";
import Search from "./Page/Search";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const querryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  // const [products, setProducts] = useState("");
  // useEffect(function () {
  //   fetch("http://localhost:3000/products")
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data.products))
  //     .catch((error) => console.error(error));
  // }, []);
  return (
    <>
      
      <QueryClientProvider client={querryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="cart" element={<Cart />} />
              <Route path="contact" element={<Contact />} />
              <Route path="home" element={<Home />} />
              <Route path="blog" element={<Journals />} />
              <Route path="products" element={<Products />} />
              <Route path="story" element={<Story />} />
              <Route path="login" element={<Login />} />
              <Route path="search" element={<Search />} />
              <Route path="account/register" element={<SignUp />} />
              <Route path="account/recover" element={<PasswordReset />} />
              <Route path="productPage" element={<ProductPage />} />
              <Route path="blogs/designs" element={<Blogs />} />
              <Route path="collections/ss" element={<Summer />} />
              <Route path="collections/aw" element={<Autumn />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;