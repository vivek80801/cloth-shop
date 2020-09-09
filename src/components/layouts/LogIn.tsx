import React from "react";
import { Link } from "react-router-dom";
import { AuthContext, authContext } from "../../contexts/authContext";
import { LOG_IN } from "../../typesOfReducers/typesOfAuthReducer";

export interface message {
  msg: string;
  err: boolean;
}

const LogIn: React.FC = (): JSX.Element => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [messages, setMessages] = React.useState<message[]>([]);
  const { users, dispatchAuth } = React.useContext<authContext>(AuthContext);

  React.useEffect(() => {
    const timer1 = setTimeout(() => {
      setMessages([]);
    }, 2000);
    return () => {
      clearTimeout(timer1);
    };
  }, [messages]);

  return (
    <div className="span5">
      <h4 className="title">
        {messages.map((message, idx) => (
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
              type="button"
              value="Sign into your account"
              onClick={() => {
                if (password === "" || userName === "") {
                  setMessages([
                    ...messages,
                    { msg: "Please fill the form", err: true },
                  ]);
                  return messages;
                } else {
                  users.map((person) => {
                    if (person.auth) {
                      setMessages([
                        ...messages,
                        { msg: "You are already Logged in", err: true },
                      ]);
                      return messages;
                    } else if (
                      person.name === userName &&
                      person.password === password
                    ) {
                      setMessages([
                        ...messages,
                        { msg: "You are Logged in", err: false },
                      ]);
                      return dispatchAuth({
                        type: LOG_IN,
                        id: person.id,
                      });
                    } else {
                      setMessages([
                        ...messages,
                        { msg: "Username or Password is wrong", err: true },
                      ]);
                      return messages;
                    }
                  });
                }
              }}
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
