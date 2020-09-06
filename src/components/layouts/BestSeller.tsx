import React from "react";
import { GlobalContext, gloabalContext } from "../../contexts/globalContext";
import { Link } from "react-router-dom";

const BestSeller: React.FC = (): JSX.Element => {
  const products = React.useContext<gloabalContext>(GlobalContext);
  return (
    <div className="block">
      <h4 className="title">
        <strong>Best</strong> Seller
      </h4>
      <ul className="small-product">
        {products.products.map((product) =>
          product.best_seller ? (
            <li key={product.id}>
              <Link to={`/details/${product.id}`} title={product.title}>
                <img src={`../${product.img}`} alt={product.title} />
              </Link>
              <Link to={`/details/${product.id}`}>{product.title}</Link>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};

export default BestSeller;
