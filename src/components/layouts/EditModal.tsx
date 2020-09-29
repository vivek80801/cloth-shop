import React from "react";
import { EDIT_PRODUCT } from "../../typesOfReducers/typesOfCartReducers";
import { GlobalContext, gloabalContext } from "../../contexts/globalContext";

interface Props {
  id: number;
  title: string;
  catogary: string;
  price: number;
}

const EditModal: React.FC<Props> = (props): JSX.Element => {
  const products = React.useContext<gloabalContext>(GlobalContext);
  const [title, setTitle] = React.useState("");
  const [catogary, setCatogary] = React.useState("");
  const [price, setPrice] = React.useState(1);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          return products.dispatch({
            type: EDIT_PRODUCT,
            id: props.id,
            catogary: catogary,
            price: price,
            title: title,
          });
        }}
      >
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="catogary">Catogary:</label>
        <input
          type="text"
          onChange={(e) => setCatogary(e.target.value)}
          value={catogary}
        />
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          onChange={(e) => setPrice(+e.target.value)}
          value={price}
        />
        <br />
        <input type="submit" value="Edit" />
      </form>
    </>
  );
};

export default EditModal;
