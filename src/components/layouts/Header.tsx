import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = (): JSX.Element => {
  return (
    <div id="top-bar" className="container">
      <div className="span8">
        <div className="account pull-right">
          <ul className="user-menu">
            <li>
              <Link to="/">My Account</Link>
            </li>
            <li>
              <Link to="/cart">Your Cart</Link>
            </li>
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
            <li>
              <Link to="/register">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
