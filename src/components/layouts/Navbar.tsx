import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = (): JSX.Element => {
  return (
    <section className="navbar main-menu">
      <div className="navbar-inner main-menu">
        <Link to="/" className="logo pull-left">
          <img src="themes/images/logo.png" className="site_logo" alt="" />
        </Link>
        <nav id="menu" className="pull-right">
          <ul>
            <li>
              <Link to="/product">Woman</Link>
              <ul>
                <li>
                  <Link to="/product/red">Red</Link>
                </li>
                <li>
                  <Link to="/product/white">White</Link>
                </li>
                <li>
                  <Link to="/product/green">Green</Link>
                </li>
                <li>
                  <Link to="/product/black">Black</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/product">Man</Link>
            </li>
            <li>
              <Link to="/product">Sport</Link>
              <ul>
                <li>
                  <Link to="/product">Gifts and Tech</Link>
                </li>
                <li>
                  <Link to="/product">Ties and Hats</Link>
                </li>
                <li>
                  <Link to="/product">Cold Weather</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/product">Hangbag</Link>
            </li>
            <li>
              <Link to="/product">Best Seller</Link>
            </li>
            <li>
              <Link to="/product">Top Seller</Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
