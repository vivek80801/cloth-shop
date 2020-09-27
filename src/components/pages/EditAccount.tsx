import React from "react";
import { Gender } from "../../data/users";
import { AuthContext, authContext } from "../../contexts/authContext";
import { message } from "../layouts/LogIn";
import { UPDATE_ACCOUNT } from "../../typesOfReducers/typesOfAuthReducer";

const EditAccount: React.FC = (): JSX.Element => {
  const persons = React.useContext<authContext>(AuthContext);
  const [userName, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [gender, setGender] = React.useState<Gender>("Male");
  const [messages, setMessages] = React.useState<message[]>([]);
  let auth = false;
  let id = "";
  React.useEffect(() => {
    const timer1 = setTimeout(() => {
      setMessages([]);
    }, 2000);
    return () => {
      clearTimeout(timer1);
    };
  }, [messages]);
  for (let i = 0; i < persons.users.length; i++) {
    if (persons.users[i].auth) {
      id = persons.users[i].id;
      auth = true;
      break;
    }
  }

  return (
    <>
      {auth ? (
        <>
          <h1>Only fill those which you want to edit.</h1>
          <h2>
            Example: If I want to edit my user name then I will only fill user
            name field then I will submit
          </h2>
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setMessages([
                ...messages,
                { msg: "You Edit Your Account", err: false },
              ]);
              return persons.dispatchAuth({
                type: UPDATE_ACCOUNT,
                id: id,
                gender: gender,
                userName: userName,
                email: email,
                password: password,
              });
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
                  value="Edit your account"
                />
              </div>
            </fieldset>
          </form>
        </>
      ) : (
        <>
          <h1>Please Log In to edit Profile</h1>
        </>
      )}
    </>
  );
};

export default EditAccount;
