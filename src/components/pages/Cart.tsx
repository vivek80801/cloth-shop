import React from "react";
import Manufactures from "../layouts/Manufactures";
import SubCatergories from "../layouts/SubCatergories";
import Randomize from "../layouts/Randomize";
import SubHeader from "../layouts/SubHeader";
import { QTY_OF_PRODUCT, REMOVE_FROM_CART } from "../../typesOfReducers/typesOfCartReducers";
import { GlobalContext, gloabalContext } from "../../contexts/globalContext";
import { Link } from "react-router-dom";

const Cart: React.FC = (): JSX.Element => {
  const { products, dispatch } = React.useContext<gloabalContext>(
    GlobalContext
  );
  let total = 0;
  products.map((product) =>
    product.inCart ? (total += product.qty * product.price) : null
  );
  let checkBtn = false;
  for (let i = 0; i < products.length; i++) {
    if (!products[i].inCart) {
    } else {
      checkBtn = true;
      break;
    }
  }
  console.log(checkBtn);

  return (
    <>
      <SubHeader title="shooping cart" />
      <section className="main-content">
        <div className="row">
          <div className="span9">
            <h4 className="title">
              <span className="text">
                <strong>Your</strong> Cart
              </span>
            </h4>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Remove</th>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Unit Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) =>
                  product.inCart && product.avaiblity ? (
                    <tr key={product.id}>
                      <td>
                        <button
                          onClick={() => dispatch({type:REMOVE_FROM_CART, id:product.id})}
                          className="btn btn-center"
                        >
                          &times;
                        </button>
                      </td>
                      <td>
                        <Link to={`/details/${product.id}`}>
                          <img alt="" src={`../${product.img}`} />
                        </Link>
                      </td>
                      <td>{product.title}</td>
                      <td>
                        <input
                          type="number"
                          placeholder="1"
                          min={1}
                          onChange={(e) =>
                            dispatch({
                              type: QTY_OF_PRODUCT,
                              id: product.id,
                              qty: parseInt(e.target.value),
                            })
                          }
                          className="input-mini"
                        />
                      </td>
                      <td>${product.price}</td>
                      <td>${product.price * product.qty}</td>
                    </tr>
                  ) : null
                )}
                <tr>
                  <td>Total</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>
                    <strong>${total}</strong>
                  </td>
                </tr>
                <tr>
                  {checkBtn ? (
                    <td>
                      <Link to="/checkout">
                        <button className="btn btn-inverse">checkout</button>
                      </Link>
                    </td>
                  ) : null}
                </tr>
              </tbody>
            </table>
          </div>
          <div className="span3 col">
            <div className="block">
              <SubCatergories />
              <br />
              <Manufactures />
            </div>
            <Randomize />
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
