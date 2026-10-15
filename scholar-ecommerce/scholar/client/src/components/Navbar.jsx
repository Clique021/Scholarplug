import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function Navbar() {
  const { count } = useCart();
  return (
    <header className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          Scholar<span>.</span>
        </Link>
        <nav className="nav-links">
          <Link to="/products">All Products</Link>
          <Link to="/products?category=cbc">CBC</Link>
          <Link to="/products?category=international">International</Link>
          <Link to="/cart">
            Cart {count > 0 && <span className="cart-pill">{count}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
}
