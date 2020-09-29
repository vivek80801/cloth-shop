import React from "react";
import { GlobalContext, gloabalContext } from "../../contexts/globalContext";
import { AuthContext, authContext } from "../../contexts/authContext";
import EditModal from "../../components/layouts/EditModal";

const EditProduct: React.FC = (): JSX.Element => {
  const products = React.useContext<gloabalContext>(GlobalContext);
  const persons = React.useContext<authContext>(AuthContext);
  let auth = false;
  let admin = false;
  for (let i = 0; i < persons.users.length; i++) {
    if (persons.users[i].auth) {
      auth = true;
      if (persons.users[i].role === "admin") {
        admin = true;
        break;
      }
    }
  }
  return (
    <>
      {auth && admin ? (
        products.products.map((product) => (
          <div>
            <h3>Title: {product.title}</h3>
            <img src={product.img} alt={product.title} />
            <h5>Catogary: {product.category}</h5>
            <h5>Price: {product.price}</h5>
            <h6>Details: {product.details}</h6>
            <EditModal
              id={product.id}
              catogary={product.category}
              price={product.price}
              title={product.title}
            />
          </div>
        ))
      ) : (
        <>
          <h1>You are not admin. Only admin can see This page</h1>
        </>
      )}
    </>
  );
};

export default EditProduct;
