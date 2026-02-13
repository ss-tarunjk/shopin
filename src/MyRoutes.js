import { Route, Routes } from "react-router";

import HomePage from "./pages/HomePage";

import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";

import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import SearchPage from "./pages/SearchPage";

import NotFoundPage from "./pages/NotFoundPage";

import Layout from "./Layout";

export default function MyRoutes() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/products" element={<SearchPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/products/cart" element={<CartPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
