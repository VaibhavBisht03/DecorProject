// import { Link } from "react-router-dom";
// import "../styles/Navbar.css";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <h1>Decor Store</h1>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/cart">Cart</Link></li>
//       </ul>
//     </nav>
//   );
// }
// export default Navbar;


import React from "react";
import { FaArrowLeft, FaArrowRight, FaSearch, FaUser, FaShoppingBag, FaEye } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      {/* Announcement Banner */}
      <div className="announcement-bar">
        <FaArrowLeft className="arrow-icon" />
        <span>
          JUST IN: 1000+ New Products{" "}
          <a href="/new-products" className="explore-link">
            Explore New
          </a>
        </span>
        <FaArrowRight className="arrow-icon" />
      </div>

      {/* Navigation Bar */}
      <div className="main-navbar">
        <div className="logo">TheDecorKart</div>

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
            <a href={`/${item.toLowerCase().replace(/\s+/g, "-")}`} key={index}>
              {item}
            </a>
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
          <div className="icon-group cart">
            <FaShoppingBag />
            <span>Cart</span>
            <span className="cart-count">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
