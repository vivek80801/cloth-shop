import React from "react";

const ConfirmedOrder: React.FC = (): JSX.Element => {
  return (
    <div className="accordion-group">
      <div className="accordion-heading">
        <a
          className="accordion-toggle"
          data-toggle="collapse"
          data-parent="#accordion2"
          href="#collapseThree"
        >
          Confirm Order
        </a>
      </div>
      <div id="collapseThree" className="accordion-body collapse">
        <div className="accordion-inner">
          <div className="row-fluid">
            <div className="control-group">
              <label htmlFor="textarea" className="control-label">
                Comments
              </label>
              <div className="controls">
                <textarea rows={3} id="textarea" className="span12"></textarea>
              </div>
            </div>
            <button className="btn btn-inverse pull-right">
              Confirm order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmedOrder;
