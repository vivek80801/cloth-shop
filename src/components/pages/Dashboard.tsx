import React from "react";
import { Link } from "react-router-dom";
import { AuthContext, authContext } from "../../contexts/authContext";
import { DELETE_ACCOUNT } from "../../typesOfReducers/typesOfAuthReducer";

const Dashboard: React.FC = (): JSX.Element => {
  const persons = React.useContext<authContext>(AuthContext);
  let name = "";
  let auth = false;
  for (let i = 0; i < persons.users.length; i++) {
    if (persons.users[i].auth) {
      auth = true;
      name = persons.users[i].name;
      break;
    }
  }
  return (
    <>
      {auth ? (
        <>
          <h1> Welcome, {name.toLocaleUpperCase()}</h1>
          {persons.users.map((user) =>
            user.auth ? (
              <div key={user.id}>
                <img
                  src={
                    user.img !== ""
                      ? user.img
                      : user.gender === "Male"
                      ? "../themes/images/users/male.svg"
                      : "../themes/images/users/female.svg"
                  }
                  alt={user.name}
                  style={{ width: "30vh", height: "30vh" }}
                />
                <div className="user-details">
                  <h3>Id: {user.id}</h3>
                  <h3>Name: {user.name}</h3>
                  <h3>Email: {user.email}</h3>
                  <h3>Password: {user.password}</h3>
                  <h3>Gender: {user.gender}</h3>
                  <h3>
                    Role:{" "}
                    {user.role === "user" ? "No Role Assing To You" : user.role}
                  </h3>
                  <div className="pursched-product">
                    {user.pursched_Products.length === 0 ? (
                      <h3>Pursches: You did not pursched anything </h3>
                    ) : (
                      user.pursched_Products.map((pursched_products) => (
                        <div key={pursched_products.id}>
                          <h2>Pursched Product</h2>
                          <h3>{pursched_products.title}</h3>
                          <img
                            src={pursched_products.img}
                            alt={pursched_products.title}
                          />
                          <br />
                          Quentity: {pursched_products.qty}
                          Price: {pursched_products.price}
                        </div>
                      ))
                    )}
                  </div>
                </div>
                <div className="buttons">
                  <button
                    className="danger"
                    onClick={() =>
                      persons.dispatchAuth({
                        type: DELETE_ACCOUNT,
                        id: user.id,
                      })
                    }
                    style={{
                      backgroundColor: "#f00",
                      color: "#fff",
                      borderRadius: "0.75rem",
                      outline: "none",
                      padding: "0.75rem",
                    }}
                  >
                    Delete Account
                  </button>
                  <Link to="/editaccount">
                    <button>Edit Account</button>
                  </Link>
                  {user.role === "moderator" ? (
                    <Link to="/showusers">
                      <button>Show Users</button>
                    </Link>
                  ) : null}
                  {user.role === "admin" ? (
                    <Link to="/editusers">
                      <button>Show Users</button>
                    </Link>
                  ) : null}
                    {user.role === "admin" ? (
                    <Link to="/editproducts">
                      <button>Edit Products</button>
                    </Link>
                  ) : null}
                </div>
              </div>
            ) : null
          )}
        </>
      ) : (
        <>
          <h1>
            you are not logged in <Link to="/register">Log in</Link>
          </h1>
        </>
      )}
    </>
  );
};

export default Dashboard;
