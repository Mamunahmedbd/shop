import React from "react";
import { Link } from "react-router-dom";
import Cart from "../cart/cart";
import "./header.style.scss";

const header = () => {
  return (
    <nav className="nav-menu container">
      <div className="logo">
        <Link to="/">Mamun Ahmed</Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
      <Cart />
    </nav>
  );
};

export default header;
