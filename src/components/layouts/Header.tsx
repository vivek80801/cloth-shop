import React from "react";
import { AuthContext, authContext } from "../../contexts/authContext";
import { Link } from "react-router-dom";

const Header: React.FC = (): JSX.Element => {
  const person = React.useContext<authContext>(AuthContext);

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
        {person.users.map((user) =>
          user.auth ? (
            <div className="account pull-right">{user.name}</div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Header;
