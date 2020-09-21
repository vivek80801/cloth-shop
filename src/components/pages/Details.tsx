import React from "react";
import SubHeader from "../layouts/SubHeader";
import BestSeller from "../layouts/BestSeller";
import Randomize from "../layouts/Randomize";
import Manufactures from "../layouts/Manufactures";
import SubCatergories from "../layouts/SubCatergories";
import { featureProducts } from "../../data/featureProducts";
import { Link } from "react-router-dom";
import { GlobalContext, gloabalContext } from "../../contexts/globalContext";
import {
  ADD_TO_CART,
  QTY_OF_PRODUCT,
} from "../../typesOfReducers/typesOfCartReducers";
import RelatedProducts from "../layouts/RelatedProducts";

interface Props {
  match: {
    params: {
      id: number;
    };
  };
}

const Details: React.FC<Props> = (props): JSX.Element => {
  const { products, dispatch } = React.useContext<gloabalContext>(
    GlobalContext
  );

  const [home, setHome] = React.useState(true);

  return (
    <>
      <SubHeader title="product detail" />
      {products.map((product: featureProducts) =>
        +props.match.params.id === +product.id ? (
          <div key={product.id}>
            <section className="main-content">
              <div className="row">
                <div className="span9">
                  <div className="row">
                    <div className="span4">
                      <Link
                        to={`../../${product.img}`}
                        target="_blank"
                        className="thumbnail"
                        data-fancybox-group="group1"
                        title="Description 1"
                      >
                        <img alt={product.title} src={`../${product.img}`} />
                      </Link>
                      <ul className="thumbnails small">
                        {product.related_imgs.map((related_product, index) =>
                          related_product.img ? (
                            <li className="span1" key={index}>
                              <Link
                                target="_blank"
                                to={`../${related_product.img}`}
                                title="to see image click on image"
                                className="thumbnail"
                                data-fancybox-group="group1"
                              >
                                <img src={`../${related_product.img}`} alt="related_product" />
                              </Link>
                            </li>
                          ) : null
                        )}
                      </ul>
                    </div>
                    <div className="span5">
                      <address>
                        <strong>Brand:</strong> <span>{product.brand}</span>
                        <br />
                        <strong>Product Code:</strong>{" "}
                        <span>{product.product_code}</span>
                        <br />
                        <strong>Reward Points:</strong>{" "}
                        <span>{product.reward_point}</span>
                        <br />
                        <strong>Availability:</strong>{" "}
                        <span style={{ textTransform: "capitalize" }}>
                          {product.avaiblity ? "in the stock" : "out of stock"}
                        </span>
                        <br />
                      </address>
                      <h4>
                        <strong>Price: ${product.price}</strong>
                      </h4>
                    </div>
                    <div className="span5">
                      <label>Qty:</label>
                      <input
                        type="number"
                        min={1}
                        className="span1"
                        placeholder={product.qty.toString()}
                        onChange={(e) =>
                          dispatch({
                            type: QTY_OF_PRODUCT,
                            id: product.id,
                            qty: parseInt(e.target.value),
                          })
                        }
                      />
                      <Link to={"/cart"}>
                        <button
                          className="btn btn-inverse"
                          onClick={() =>
                            dispatch({ type: ADD_TO_CART, id: product.id })
                          }
                        >
                          Add to cart
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="row">
                    <div className="span9">
                      <ul className="nav nav-tabs" id="myTab">
                        <li className={home ? "active" : ""}>
                          <Link to="#" onClick={() => setHome(true)}>
                            Description
                          </Link>
                        </li>
                        <li className={!home ? "active" : ""}>
                          <Link to="#" onClick={() => setHome(false)}>
                            Additional Information
                          </Link>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div className="tab-pane active" id="home">
                          {home
                            ? product.details
                            : product.addition_information}
                        </div>
                        <div className="tab-pane" id="profile">
                          <table className="table table-striped shop_attributes">
                            <tbody>
                              <tr className="">
                                <th>Size</th>
                                <td>Large, Medium, Small, X-Large</td>
                              </tr>
                              <tr className="alt">
                                <th>Colour</th>
                                <td>Orange, Yellow</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <RelatedProducts product={product} />
                  </div>
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
          </div>
        ) : null
      )}
    </>
  );
};

export default Details;
