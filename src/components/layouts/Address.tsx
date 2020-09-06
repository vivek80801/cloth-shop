import React from "react";

const Address: React.FC = (): JSX.Element => {
  return (
    <div className="span6">
      <h4>Your Address</h4>
      <div className="control-group">
        <label className="control-label">Company</label>
        <div className="controls">
          <input type="text" placeholder="" className="input-xlarge" />
        </div>
      </div>
      <div className="control-group">
        <label className="control-label">Company ID:</label>
        <div className="controls">
          <input type="text" placeholder="" className="input-xlarge" />
        </div>
      </div>
      <div className="control-group">
        <label className="control-label">
          <span className="required">*</span> Address 1:
        </label>
        <div className="controls">
          <input type="text" placeholder="" className="input-xlarge" />
        </div>
      </div>
      <div className="control-group">
        <label className="control-label">Address 2:</label>
        <div className="controls">
          <input type="text" placeholder="" className="input-xlarge" />
        </div>
      </div>
      <div className="control-group">
        <label className="control-label">
          <span className="required">*</span> City:
        </label>
        <div className="controls">
          <input type="text" placeholder="" className="input-xlarge" />
        </div>
      </div>
      <div className="control-group">
        <label className="control-label">
          <span className="required">*</span> Post Code:
        </label>
        <div className="controls">
          <input type="text" placeholder="" className="input-xlarge" />
        </div>
      </div>
      <div className="control-group">
        <label className="control-label">
          <span className="required">*</span> Country:
        </label>
        <div className="controls">
          <select className="input-xlarge">
            <option value="1">Afghanistan</option>
            <option value="2">Albania</option>
            <option value="3">Algeria</option>
            <option value="4">American Samoa</option>
            <option value="5">Andorra</option>
            <option value="6">Angola</option>
          </select>
        </div>
      </div>
      <div className="control-group">
        <label className="control-label">
          <span className="required">*</span> Region / State:
        </label>
        <div className="controls">
          <select name="zone_id" className="input-xlarge">
            <option value="" disabled>--- Please Select ---</option>
            <option value="3513">Aberdeen</option>
            <option value="3514">Aberdeenshire</option>
            <option value="3515">Anglesey</option>
            <option value="3516">Angus</option>
            <option value="3517">Argyll and Bute</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Address;
