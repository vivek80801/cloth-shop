import React from "react";
import Personal from "./Personal";
import Address from "./Address";

const Billing: React.FC = (): JSX.Element => {
  return (
    <div id="collapseTwo" className="accordion-body collapse">
      <div className="accordion-inner">
        <div className="row-fluid">
          <Personal />
          <Address />
        </div>
      </div>
    </div>
  );
};

export default Billing;
