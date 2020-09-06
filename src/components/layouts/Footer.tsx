import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = (): JSX.Element => {
  return (
    <section id="footer-bar">
      <div className="row">
        <div className="span3">
          <h4>Navigation</h4>
          <ul className="nav">
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contac Us</Link>
            </li>
            <li>
              <Link to="/cart">Your Cart</Link>
            </li>
            <li>
              <Link to="/register">Login</Link>
            </li>
          </ul>
        </div>
        <div className="span4">
          <h4>My Account</h4>
          <ul className="nav">
            <li>
              <a href="/">My Account</a>
            </li>
            <li>
              <a href="/">Order History</a>
            </li>
            <li>
              <a href="/">Wish List</a>
            </li>
            <li>
              <a href="/">Newsletter</a>
            </li>
          </ul>
        </div>
        <div className="span5">
          <p className="logo">
            <img src="themes/images/logo.png" className="site_logo" alt="" />
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. the Lorem Ipsum has been the industry's standard dummy
            text ever since the you.
          </p>
          <br />
          <span className="social_icons">
            <a className="facebook" href="/">
              Facebook
            </a>
            <a className="twitter" href="/">
              Twitter
            </a>
            <a className="skype" href="/">
              Skype
            </a>
            <a className="vimeo" href="/">
              Vimeo
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
