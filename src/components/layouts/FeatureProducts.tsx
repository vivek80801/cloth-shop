import React from "react";
import { Link } from "react-router-dom";
import { saleTags, products } from "../../data/featureProducts";

const FeatureProducts: React.FC = (): JSX.Element => {
  return (
    <div className="row">
      <div className="span12">
        <h4 className="title">
          <span className="pull-left">
            <span className="text">
              <span className="line">
                Feature <strong>Products</strong>
              </span>
            </span>
          </span>
          <span className="pull-right">
            <Link
              className="left button"
              to="#myCarousel"
              data-slide="prev"
            ></Link>
            <Link
              className="right button"
              to="#myCarousel"
              data-slide="next"
            ></Link>
          </span>
        </h4>
        <div id="myCarousel" className="myCarousel carousel slide">
          <div className="carousel-inner">
            <div className="active item">
              <ul className="thumbnails">
                {saleTags.map((saleTag) => (
                  <li key={saleTag.id} className="span3">
                    <div className="product-box">
                      <span className="sale_tag"></span>
                      <p>
                        <Link to={`/details/${saleTag.id}`}>
                          <img src={saleTag.img} alt={saleTag.title} />
                        </Link>
                      </p>
                      <Link to={`/details/${saleTag.id}`} className="title">
                        {saleTag.title}
                      </Link>
                      <br />
                      <Link to={`/details/${saleTag.id}`} className="category">
                        {saleTag.category}
                      </Link>
                      <p className="price">${saleTag.price}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="item">
              <ul className="thumbnails">
                {products.map((product) => (
                  <li key={product.id} className="span3">
                    <div className="product-box">
                      <p>
                        <Link to={`/details/${product.id}`}>
                          <img src={product.img} alt={product.title} />
                        </Link>
                      </p>
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
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureProducts;
