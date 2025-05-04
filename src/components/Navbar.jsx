import React, { useContext } from "react";
import { FaArrowLeft, FaArrowRight, FaSearch, FaUser, FaShoppingBag, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ import Link
import "../styles/Navbar.css";
import { CartContext } from "./cart/CartContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="navbar-wrapper">
      {/* Announcement Banner */}
      <div className="announcement-bar">
        <FaArrowLeft className="arrow-icon" />
        <span>
          JUST IN: 1000+ New Products{" "}
          <Link to="/new-products" className="explore-link">
            Explore New
          </Link>
        </span>
        <FaArrowRight className="arrow-icon" />
      </div>

      {/* Navigation Bar */}
      <div className="main-navbar">
        <Link to="/" className="logo">
          The Decor Shop
        </Link>

        <div className="nav-links">
          {[
            "New Arrivals",
            "Decor",
            "Kitchen & Dining",
            "Lighting",
            "Wall Decor",
            "Bath Decor",
            "Furniture",
            "Discover",
            "Sale",
          ].map((item, index) => (
            <Link to={`/${item.toLowerCase().replace(/\s+/g, "-")}`} key={index}>
              {item}
            </Link>
          ))}
        </div>

        <div className="nav-icons">
          <button className="get-app">Get App</button>

          <div className="icon-group">
            <FaEye />
            <span>Viewed</span>
          </div>

          <div className="icon-group">
            <FaSearch />
            <span>Search</span>
          </div>

          <div className="icon-group">
            <FaUser />
            <span>Account</span>
          </div>

          <Link to="/cart" className="icon-group cart relative">
            <FaShoppingBag />
            <span>Cart</span>
            {cartItems.length > 0 && (
              <span className="cart-count absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
