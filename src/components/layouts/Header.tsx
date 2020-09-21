import React from "react";
import { LOG_OUT } from "../../typesOfReducers/typesOfAuthReducer";
import { AuthContext, authContext } from "../../contexts/authContext";
import { Link } from "react-router-dom";

const Header: React.FC = (): JSX.Element => {
  const person = React.useContext<authContext>(AuthContext);
  return (
    <div id="top-bar" className="container">
      <div className="span8">
        <div className="account pull-left">
          <ul className="user-menu">
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
            <div className="account pull-right" key={user.id}>
              <img
                src={
                  user.img
                    ? user.img
                    : user.gender === "Male"
                    ? "../themes/images/users/male.svg"
                    : "../themes/images/users/female.svg"
                }
                alt={user.name}
              />
              <Link to="/dashboard">dashboard</Link>
              <button onClick={() => {
                return person.dispatchAuth({type:LOG_OUT})
              }}>log out</button>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Header;
