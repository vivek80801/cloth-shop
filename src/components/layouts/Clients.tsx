import React from "react";
import { Link } from "react-router-dom";

const Clients: React.FC = (): JSX.Element => {
  return (
    <section className="our_client">
      <h4 className="title">
        <span className="text">Manufactures</span>
      </h4>
      <div className="row">
        <div className="span2">
          <Link to="/">
            <img alt="" src="themes/images/clients/14.png" />
          </Link>
        </div>
        <div className="span2">
          <Link to="/">
            <img alt="" src="themes/images/clients/35.png" />
          </Link>
        </div>
        <div className="span2">
          <Link to="/">
            <img alt="" src="themes/images/clients/1.png" />
          </Link>
        </div>
        <div className="span2">
          <Link to="/">
            <img alt="" src="themes/images/clients/2.png" />
          </Link>
        </div>
        <div className="span2">
          <Link to="/">
            <img alt="" src="themes/images/clients/3.png" />
          </Link>
        </div>
        <div className="span2">
          <Link to="/">
            <img alt="" src="themes/images/clients/4.png" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Clients;
