import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import CartPage from "./components/cart/CartPage";
import { CartProvider } from "./components/cart/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
        <ToastContainer position="top-right" autoClose={3000} />
      </Router>
    </CartProvider>
  );
}

export default App;
