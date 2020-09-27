import React from "react";
import { AuthContext, authContext } from "../../contexts/authContext";
import { REGISTER_ACCOUNT } from "../../typesOfReducers/typesOfAuthReducer";
import { Gender } from "../../data/users";
import { message } from "./LogIn";

const Register: React.FC = (): JSX.Element => {
  const [userName, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [messages, setMessages] = React.useState<message[]>([]);
  const [gender, setGender] = React.useState<Gender>("Male");
  const persons = React.useContext<authContext>(AuthContext);

  const emailCheck = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const passwordCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,}$/g;

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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let validUser = false;
          if (userName === "" || password === "" || email === "") {
            setMessages([
              ...messages,
              { msg: "Please fill the form", err: true },
            ]);
          } else if (userName.length < 4) {
            setMessages([
              ...messages,
              {
                msg: "Username must be of more then 3 letters",
                err: true,
              },
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
              {
                msg: "Password must be more then 7 charecters",
                err: true,
              },
            ]);
          } else if (password.length > 15) {
            setMessages([
              ...messages,
              {
                msg: "Password must be less then 15 charecters",
                err: true,
              },
            ]);
          } else if (!emailCheck.test(email)) {
            setMessages([
              ...messages,
              {
                msg: "Please enter a valid email",
                err: true,
              },
            ]);
          } else if (!passwordCheck.test(password)) {
            setMessages([
              ...messages,
              {
                msg: "Please enter a strong password",
                err: true,
              },
            ]);
          } else if (!validUser) {
            for (let i = 0; i < persons.users.length; i++) {
              if (persons.users[i].name === userName) {
                setMessages([
                  ...messages,
                  {
                    msg: "This user is already register",
                    err: true,
                  },
                ]);
                return messages;
              } else if (persons.users[i].email === email) {
                setMessages([
                  ...messages,
                  {
                    msg: "This email is already register",
                    err: true,
                  },
                ]);
                return messages;
              } else {
                validUser = true;
              }
            }
          }
          if (validUser) {
            validUser = false;
            setUserName("");
            setPassword("");
            setEmail("");
            setMessages([
              ...messages,
              {
                msg: "Your account has been created and You are looged in",
                err: false,
              },
            ]);
            return persons.dispatchAuth({
              type: REGISTER_ACCOUNT,
              userName: userName,
              email: email,
              password: password,
              gender: gender,
            });
          }
        }}
      >
        <fieldset>
          <div className="control-group">
            <label className="control-label">Username</label>
            <div className="controls">
              <input
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                placeholder="Enter your username"
                className="input-xlarge"
                required
                aria-required
                value={userName}
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
                required
                aria-required
                value={email}
              />
            </div>
          </div>
          <label className="radio" htmlFor="male">
            <input
              type="radio"
              name="gender"
              onChange={() => setGender("Male")}
            />
            Male
          </label>
          <label className="radio" htmlFor="female">
            <input
              type="radio"
              name="gender"
              onChange={() => setGender("Female")}
            />
            Female
          </label>
          <div className="control-group">
            <label className="control-label">Password:</label>
            <div className="controls">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
                className="input-xlarge"
                required
                aria-required
                value={password}
              />
            </div>
          </div>
          <hr />
          <div className="actions">
            <input
              tabIndex={9}
              className="btn btn-inverse large"
              type="submit"
              value="Create your account"
            />
          </div>
        </fieldset>
      
      </form>
    </div>
  );
};

export default Register;
