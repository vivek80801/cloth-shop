import React from "react";
import { Link } from "react-router-dom";
import { featureProducts } from "../../data/featureProducts";
import { GlobalContext, gloabalContext } from "../../contexts/globalContext";

interface Props {
  product: featureProducts;
}

const RelatedProducts: React.FC<Props> = (props): JSX.Element => {
  const products = React.useContext<gloabalContext>(GlobalContext);
  return (
    <div className="span9">
      <br />
      <h4 className="title">
        <span className="pull-left">
          <span className="text">
            <strong>Related</strong> Products
          </span>
        </span>
        <span className="pull-right">
          <Link
            className="left button"
            to="#myCarousel-1"
            data-slide="prev"
          ></Link>
          <Link
            className="right button"
            to="#myCarousel-1"
            data-slide="next"
          ></Link>
        </span>
      </h4>
      <div id="myCarousel-1" className="carousel slide">
        <div className="carousel-inner">
          <div className="active item">
            <ul className="thumbnails listing-products">
              {products.products.map((product) =>
                props.product.related_products.map((relatedProduct) =>
                  relatedProduct.id === product.id ? (
                    <li className="span3" key={product.id}>
                      <div className="product-box">
                        <span className="sale_tag"></span>
                        <Link to={`/details/${product.id}`}>
                          <img alt={product.title} src={`../${product.img}`} />
                        </Link>
                        <br />
                        <Link to={`/details/${product.id}`} className="title">
                          {product.title}
                        </Link>
                        <br />
                        <Link to="/" className="category">
                          {product.category}
                        </Link>
                        <p className="price">${product.price}</p>
                      </div>
                    </li>
                  ) : null
                )
              )}
            </ul>
          </div>
          <div className="item">
            <ul className="thumbnails listing-products">
              {products.products.map((product) =>
                props.product.related_products.map((relatedProduct) =>
                  relatedProduct.id === product.id ? (
                    <li className="span3" key={product.id}>
                      <div className="product-box">
                        <span className="sale_tag"></span>
                        <Link to={`/details/${product.id}`}>
                          <img alt={product.title} src={`../${product.img}`} />
                        </Link>
                        <br />
                        <Link to={`/details/${product.id}`} className="title">
                          {product.title}
                        </Link>
                        <br />
                        <Link to="/" className="category">
                          {product.category}
                        </Link>
                        <p className="price">${product.price}</p>
                      </div>
                    </li>
                  ) : null
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
