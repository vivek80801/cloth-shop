import React from "react";

const Services: React.FC = (): JSX.Element => {
  return (
    <div className="row feature_box">
      <div className="span4">
        <div className="service">
          <div className="responsive">
            <img src="themes/images/feature_img_2.png" alt="" />
            <h4>
              MODERN <strong>DESIGN</strong>
            </h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and printing
              industry unknown printer.
            </p>
          </div>
        </div>
      </div>
      <div className="span4">
        <div className="service">
          <div className="customize">
            <img src="themes/images/feature_img_1.png" alt="" />
            <h4>
              FREE <strong>SHIPPING</strong>
            </h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and printing
              industry unknown printer.
            </p>
          </div>
        </div>
      </div>
      <div className="span4">
        <div className="service">
          <div className="support">
            <img src="themes/images/feature_img_3.png" alt="" />
            <h4>
              24/7 LIVE <strong>SUPPORT</strong>
            </h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and printing
              industry unknown printer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
