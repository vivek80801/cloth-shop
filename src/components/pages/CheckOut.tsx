import React from "react";
import SubHeader from "../layouts/SubHeader";
import LogIn from "../layouts/LogIn";
import ConfirmedOrder from "../layouts/ConfirmedOrder";
import Billing from "../layouts/Billing";

const CheckOut: React.FC = (): JSX.Element => {
  return (
    <>
      <SubHeader title="check out" />
      <section className="main-content">
        <div className="row">
          <div className="span12">
            <div className="accordion" id="accordion2">
              <div className="accordion-group">
                <div className="accordion-heading">
                  <a
                    className="accordion-toggle"
                    data-toggle="collapse"
                    data-parent="#accordion2"
                    href="#collapseOne"
                  >
                    Checkout Options
                  </a>
                </div>
                <div id="collapseOne" className="accordion-body in collapse">
                  <div className="accordion-inner">
                    <LogIn/>
                  </div>
                </div>
              </div>
              <div className="accordion-group">
                <div className="accordion-heading">
                  <a
                    className="accordion-toggle"
                    data-toggle="collapse"
                    data-parent="#accordion2"
                    href="#collapseTwo"
                  >
                    Account &amp; Billing Details
                  </a>
                </div>
                <Billing/>
              </div>
              <ConfirmedOrder/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckOut;
