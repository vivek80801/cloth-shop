import React from "react";

const Personal: React.FC = (): JSX.Element => {
  return (
    <div className="span6">
      <h4>Your Personal Details</h4>
      <div className="control-group">
        <label className="control-label">First Name</label>
        <div className="controls">
          <input type="text" placeholder="" className="input-xlarge" />
        </div>
      </div>
      <div className="control-group">
        <label className="control-label">Last Name</label>
        <div className="controls">
          <input type="text" placeholder="" className="input-xlarge" />
        </div>
      </div>
      <div className="control-group">
        <label className="control-label">Email Address</label>
        <div className="controls">
          <input type="text" placeholder="" className="input-xlarge" />
        </div>
      </div>
      <div className="control-group">
        <label className="control-label">Telephone</label>
        <div className="controls">
          <input type="text" placeholder="" className="input-xlarge" />
        </div>
      </div>
      <div className="control-group">
        <label className="control-label">Fax</label>
        <div className="controls">
          <input type="text" placeholder="" className="input-xlarge" />
        </div>
      </div>
    </div>
  );
};

export default Personal;
