import React from "react";
import { Link } from "react-router-dom";
import { AuthContext, authContext } from "../../contexts/authContext";
import { MessageContext, messageContext } from "../../contexts/messageContext";
import { LOG_IN } from "../../typesOfReducers/typesOfAuthReducer";

const LogIn: React.FC = (): JSX.Element => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const persons = React.useContext<authContext>(AuthContext);
  const messages = React.useContext<messageContext>(MessageContext);
  return (
    <div className="span5">
      <h4 className="title">
        {messages.msg.map((message, idx) => (
          <div
            className={`alert alert-dismissible alert-${
              message.err ? "warning" : "success"
            }`}
            role="alert"
            key={idx}
          >
            {message.msg}
            <button className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        ))}
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
              onChange={(e) => setUserName(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="control-group">
          <Link to="#">
            <input
              tabIndex={3}
              className="btn btn-inverse large"
              type="submit"
              value="Sign into your account"
              onClick={() =>
                persons.dispatchAuth({
                  type: LOG_IN,
                  name: userName,
                  password: password,
                  dispatchMessage: messages.dispatchMessage,
                })
              }
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
