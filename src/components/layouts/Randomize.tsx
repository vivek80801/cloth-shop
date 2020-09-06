import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext, gloabalContext } from "../../contexts/globalContext";

const Randomize: React.FC = (): JSX.Element => {
  const products = React.useContext<gloabalContext>(GlobalContext);
  const [random] = React.useState(1);
  return (
    <div className="block">
      <h4 className="title">
        <span className="pull-left">
          <span className="text">Randomize</span>
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
      <div id="myCarousel" className="carousel slide">
        <div className="carousel-inner">
          {products.products.map((product) =>
            product.id === random ? (
              <div className="active item" key={product.id} >
                <ul className="thumbnails listing-products">
                  <li className="span3">
                    <div className="product-box">
                      <span className="sale_tag"></span>
                      <Link to={`/details/${product.id}`}>
                        <img alt="" src={`../${product.img}`} />
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
                </ul>
              </div>
            ) : (
              <div className="item" key={product.id} >
                <ul className="thumbnails listing-products">
                  <li className="span3">
                    <div className="product-box">
                      <Link to={`/details/${product.id}`}>
                        <img alt="" src={`../${product.img}`} />
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
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Randomize;
