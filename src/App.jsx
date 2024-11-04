import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";

const App = () => {
  return (
    <div className="App">
      <nav
        style={{

          display: "flex",
          gap: "10px",
          padding: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link
          style={{
            fontSize: "22px",
            textDecoration: "none",
          }}
          to={"/"}
        >
          Home
        </Link>
        <Link
          style={{
            textDecoration: "none",
            fontSize: "22px",
          }}
          to={"/category"}
        >
          Category
        </Link>
        <Link
          style={{
            fontSize: "22px",
            textDecoration: "none",
          }}
          to={"/cart"}
        >
          Cart
        </Link>
        <Link
          style={{
            fontSize: "22px",
            textDecoration: "none",
          }}
          to={"/wishlist"}
        >
          Wish-List
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <h1></h1>
    </div>
  );
};

export default App;
