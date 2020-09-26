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
          <h1> Welcome, {name}</h1>
          {persons.users.map((user) =>
            user.auth ? (
              <div key={user.id}>
                <img src={user.img} alt={user.name} />
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
                  <h3>
                    {user.comments.length === 0
                      ? "Comments: You did not comment on any product"
                      : user.comments.map((comment) => (
                          <li key={comment.product_id}>
                            Comment:{comment.comment}
                          </li>
                        ))}
                  </h3>
                  <div className="pursched-product">
                    Pursched Products:{" "}
                    {user.pursched_Products.length === 0
                      ? "You did not pursched anything "
                      : user.pursched_Products.map((pursched_products) => (
                          <div key={pursched_products.id}>
                            <h3>{pursched_products.title}</h3>
                            <img
                              src={pursched_products.img}
                              alt={pursched_products.title}
                            />
                            <br />
                            Quentity: {pursched_products.qty}
                            Price: {pursched_products.price}
                          </div>
                        ))}
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
                  >
                    Delete Account
                  </button>
                  <button>Edit Account</button>
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
