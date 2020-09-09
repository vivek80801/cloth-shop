import React from "react";

const Slider: React.FC = (): JSX.Element => {
  return (
    <section className="homepage-slider" id="home-slider">
      <div className="flexslider">
        <ul className="slides">
          <li>
            <img src="../themes/images/carousel/banner-1.jpg" alt="banner-1" />
          </li>
          <li>
            <img src="../themes/images/carousel/banner-2.jpg" alt="banner-2" />
            <div className="intro">
              <h1>Mid season sale</h1>
              <p>
                <span>Up to 50% Off</span>
              </p>
              <p>
                <span>On selected items online and in stores</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Slider;
