import React from "react";
import { Link } from "react-router-dom";

const LogIn: React.FC = (): JSX.Element => {
  return (
    <div className="span5">
      <h4 className="title">
        <span className="text">
          <strong>Login</strong> Form
        </span>
      </h4>
      <input type="hidden" name="next" value="/" />
      <fieldset>
        <div className="control-group">
          <label className="control-label">Username</label>
          <div className="controls">
            <input
              type="text"
              placeholder="Enter your username"
              id="username"
              className="input-xlarge"
            />
          </div>
        </div>
        <div className="control-group">
          <label className="control-label">Password</label>
          <div className="controls">
            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              className="input-xlarge"
            />
          </div>
        </div>
        <div className="control-group">
          <Link
            to="#"
          >
            <input
              tabIndex={3}
              className="btn btn-inverse large"
              type="submit"
              value="Sign into your account"
            />
          </Link>
          <hr />
          <p className="reset">
            Recover your
            <Link tabIndex={4} to="#" title="Recover your username or password">
              username or password
            </Link>
          </p>
        </div>
      </fieldset>
    </div>
  );
};

export default LogIn;
