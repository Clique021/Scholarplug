import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import OrderSuccess from "./pages/OrderSuccess.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>
      <footer>
        <div className="container">
          Scholar — School supplies for CBC & international curricula, Kenya.
        </div>
      </footer>
    </>
  );
}
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <div style={{
      fontFamily: "Arial",
      textAlign: "center",
      padding: "40px"
    }}>
      <h1>My Interactive Website</h1>

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>

      <hr style={{ margin: "30px" }} />

      <h2>Enter Your Name</h2>

      <input
        value={name}
        onChange={(event) =>
          setName(event.target.value)
        }
        placeholder="Type your name"
      />

      <p>
        {name ? `Welcome, ${name}!` : "Your greeting will appear here."}
      </p>

      <button onClick={() => alert("Hello, " + (name || "friend") + "!")}>
        Greet Me
      </button>
    </div>
  );
}