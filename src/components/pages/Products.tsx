import React from "react";
import LatestProducts from "../layouts/LatestProducts";
import FeatureProducts from "../layouts/FeatureProducts";
import Slider from "../layouts/Slider";
import HeaderText from "../layouts/HeaderText";
import Services from "../layouts/Services";
import Clients from "../layouts/Clients";

const Products: React.FC = (): JSX.Element => {
  return (
    <div>
      <Slider />
      <HeaderText />
      <section className="main-content">
        <div className="row">
          <div className="span12">
            <FeatureProducts />
            <br />
            <LatestProducts />
            <Services />
          </div>
        </div>
      </section>
      <Clients />
    </div>
  );
};

export default Products;
