import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = (): JSX.Element => {
  return (
    <section className="navbar main-menu">
      <div className="navbar-inner main-menu">
        <Link to="/" className="logo pull-left">
          <img
            src="../themes/images/logo.png"
            className="site_logo"
            alt="logo"
          />
        </Link>
        <nav id="menu" className="pull-right">
          <ul>
            <li>
              <Link to="/product/women">Woman</Link>
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
              <Link to="/product/men">Man</Link>
            </li>
            <li>
              <Link to="/product/kids">Kids</Link>
            </li>
            <li>
              <Link to="/bestseller">Best Seller</Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
