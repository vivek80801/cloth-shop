import React from "react";
import BestSeller from "../layouts/BestSeller";
import Randomize from "../layouts/Randomize";
import Manufactures from "../layouts/Manufactures";
import SubHeader from "../layouts/SubHeader";
import SubCatergories from "../layouts/SubCatergories";
import { GlobalContext, gloabalContext } from "../../contexts/globalContext";
import { Link } from "react-router-dom";

const Product: React.FC = (): JSX.Element => {
  const products = React.useContext<gloabalContext>(GlobalContext);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [productPerPage,] = React.useState(9);

  const pagenumbers = [];
  const indexOfLastProducts = currentPage * productPerPage;
  const indexOfFirstProducts = indexOfLastProducts - productPerPage;
  const currentProduct = products.products.slice(
    indexOfFirstProducts,
    indexOfLastProducts
  );

  for (
    let i = 1;
    i <= Math.ceil(products.products.length / productPerPage);
    i++
  ) {
    pagenumbers.push(i);
  }

  return (
    <>
      <SubHeader title="new products" />
      <section className="main-content">
        <div className="row">
          <div className="span9">
            <ul className="thumbnails listing-products">
              {currentProduct.map((newProduct) => (
                <li className="span3" key={newProduct.id}>
                  <div className="product-box">
                    <span className="sale_tag"></span>
                    <Link to={`/details/${newProduct.id}`}>
                      <img alt={newProduct.title} src={newProduct.img} title="BUY" />
                    </Link>
                    <br />
                    <Link to={`/details/${newProduct.id}`} className="title">
                      {newProduct.title}
                    </Link>
                    <br />
                    <Link to={`/details/${newProduct.id}`} className="category">
                      {newProduct.category}
                    </Link>
                    <p className="price">${newProduct.price}</p>
                  </div>
                </li>
              ))}
            </ul>
            <hr />
            <div className="pagination pagination-small pagination-centered">
              <ul>
                {currentPage > 1 ? (
                  <li>
                    <Link
                      onClick={() => setCurrentPage(currentPage - 1)}
                      to="#"
                    >
                      Prev
                    </Link>
                  </li>
                ) : null}
                {pagenumbers.map((pageNumber) => (
                  <li
                    key={pageNumber}
                    className={pageNumber === currentPage ? "active" : ""}
                  >
                    <Link onClick={() => setCurrentPage(pageNumber)} to="#">
                      {pageNumber}
                    </Link>
                  </li>
                ))}
                {currentPage <
                Math.ceil(products.products.length / productPerPage) ? (
                  <li>
                    <Link
                      onClick={() => setCurrentPage(currentPage + 1)}
                      to="#"
                    >
                      Next
                    </Link>
                  </li>
                ) : null}
              </ul>
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
    </>
  );
};

export default Product;
