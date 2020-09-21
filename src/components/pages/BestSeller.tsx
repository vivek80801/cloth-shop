import React from "react";
import SubHeader from "../layouts/SubHeader";
import BestSeller from "../layouts/BestSeller";
import Randomize from "../layouts/Randomize";
import Manufactures from "../layouts/Manufactures";
import SubCatergories from "../layouts/SubCatergories";
import { Link } from "react-router-dom";
import { GlobalContext, gloabalContext } from "../../contexts/globalContext";

const BestSeller1: React.FC = (): JSX.Element => {
  const products = React.useContext<gloabalContext>(GlobalContext);
  return (
    <>
      <SubHeader title="new products" />
      <section className="main-content">
        <div className="row">
          <div className="span9">
            <ul className="thumbnails listing-products">
              {products.products.map((product) =>
                product.best_seller ? (
                  <li className="span3" key={product.id}>
                    <div className="product-box">
                      <span className="sale_tag"></span>
                      <Link to={`/details/${product.id}`}>
                        <img alt={product.title} src={product.img} title="BUY" />
                      </Link>
                      <br />
                      <Link to={`/details/${product.id}`} className="title">
                        {product.title}
                      </Link>
                      <br />
                      <Link to={`/details/${product.id}`} className="category">
                        {product.category}
                      </Link>
                      <p className="price">${product.price}</p>
                    </div>
                  </li>
                ) : null
              )}
            </ul>
          </div>
          <div className="span3 col">
            <div className="block">
              <SubCatergories />
              <br />
              <Manufactures />
            </div>
            <Randomize />
            <BestSeller />
          </div>
        </div>
      </section>
    </>
  );
};

export default BestSeller1;
