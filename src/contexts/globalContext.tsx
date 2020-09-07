import React from "react";
import { featureProducts } from "../data/featureProducts";
import { allProducts } from "../data/allProducts";
import { globalReducer, actions } from "../reducers/globalReducer";

export interface gloabalContext {
  products: featureProducts[];
  dispatch: React.Dispatch<actions>;
}

export const GlobalContext = React.createContext<any | gloabalContext>(
  allProducts,
);

export const GlobalProvider: React.FC = (props): JSX.Element => {
  const [products, dispatch] = React.useReducer(globalReducer, allProducts);
  return (
    <GlobalContext.Provider value={{ products, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
