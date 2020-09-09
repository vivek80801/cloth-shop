import React from "react";
import { AuthContext, authContext } from "../../contexts/authContext";
import { REGISTER_ACCOUNT } from "../../typesOfReducers/typesOfAuthReducer";
import { message } from "./LogIn";

const Register: React.FC = (): JSX.Element => {
  const [userName, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [messages, setMessages] = React.useState<message[]>([]);
  const persons = React.useContext<authContext>(AuthContext);

  React.useEffect(() => {
    const timer1 = setTimeout(() => {
      setMessages([]);
    }, 2000);
    return () => {
      clearTimeout(timer1);
    };
  }, [messages]);

  return (
    <div className="span7">
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
          <strong>Register</strong> Form
        </span>
      </h4>
      <fieldset>
        <div className="control-group">
          <label className="control-label">Username</label>
          <div className="controls">
            <input
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              placeholder="Enter your username"
              className="input-xlarge"
            />
          </div>
        </div>
        <div className="control-group">
          <label className="control-label">Email address:</label>
          <div className="controls">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className="input-xlarge"
            />
          </div>
        </div>
        <div className="control-group">
          <label className="control-label">Password:</label>
          <div className="controls">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              className="input-xlarge"
            />
          </div>
        </div>
        <div className="control-group">
          <p>
            Now that we know who you are. I'm not a mistake! In a comic, you
            know how you can tell who the arch-villain's going to be?
          </p>
        </div>
        <hr />
        <div className="actions">
          <input
            onClick={() => {
              if (userName === "" || password === "" || email === "") {
                setMessages([
                  ...messages,
                  { msg: "Please fill the form", err: true },
                ]);
              } else if (userName.length < 4) {
                setMessages([
                  ...messages,
                  { msg: "Username must be of more then 3 letters", err: true },
                ]);
              } else if (userName.length > 20) {
                setMessages([
                  ...messages,
                  {
                    msg: "Username must be of less then 20 letters",
                    err: true,
                  },
                ]);
              } else if (password.length < 8) {
                setMessages([
                  ...messages,
                  { msg: "Password must be more then 7 charecters", err: true },
                ]);
              } else if (password.length > 15) {
                setMessages([
                  ...messages,
                  {
                    msg: "Password must be less then 15 charecters",
                    err: true,
                  },
                ]);
              } else {
                return persons.dispatchAuth({
                  type: REGISTER_ACCOUNT,
                  userName: userName,
                  email: email,
                  password: password,
                });
              }
            }}
            tabIndex={9}
            className="btn btn-inverse large"
            type="button"
            value="Create your account"
          />
        </div>
      </fieldset>
    </div>
  );
};

export default Register;
