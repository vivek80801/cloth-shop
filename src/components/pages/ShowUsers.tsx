import React from "react";
import { AuthContext, authContext } from "../../contexts/authContext";
import {
  REPORT_USER,
  UNREPORT_USER,
} from "../../typesOfReducers/typesOfAuthReducer";

const ShowUsers: React.FC = (): JSX.Element => {
  const persons = React.useContext<authContext>(AuthContext);
  let auth = false;
  let validPeople=false;
  for (let i = 0; i < persons.users.length; i++) {
    if (persons.users[i].auth) {
      auth = true;
      if (persons.users[i].role==="admin"|| persons.users[i].role==="moderator") {
        validPeople=true;
        break;
      }
    }
  }

  return (
    <>
      {auth && validPeople ? (
        <>
          <h1>Our Users</h1>
          {persons.users.map((user) => (
            <div key={user.id} className="users">
              <div className="user">
                <h3>{user.name}</h3>
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
                <h2>Password: {user.password}</h2>
                <h2>Email: {user.email}</h2>
                <h2>Role: {user.role}</h2>
                <h2>Gender: {user.gender}</h2>
                <h3>Banned: {user.banned ? "yes" : "no"}</h3>
                <h3>Reported: {user.reported ? "yes" : "no"}</h3>
                {user.reported ? (
                  <button
                    onClick={() =>
                      persons.dispatchAuth({ type: UNREPORT_USER, id: user.id })
                    }
                  >
                    Un Report {user.name}
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      persons.dispatchAuth({ type: REPORT_USER, id: user.id })
                    }
                  >
                    Report {user.name}
                  </button>
                )}
                <br/>
                {user.pursched_Products.length > 0
                  ? user.pursched_Products.map((pursched_Product) => (
                      <div key={pursched_Product.id}>
                        <h2>{pursched_Product.title}</h2>
                        <img
                          src={pursched_Product.img}
                          alt={pursched_Product.title}
                        />
                        <h3>Quentity: {pursched_Product.qty}</h3>
                        <h3>Price: {pursched_Product.price}</h3>
                      </div>
                    ))
                  : "No Pursched Product"}
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          <h1>You are not valid user to see this</h1>
        </>
      )}
    </>
  );
};

export default ShowUsers;
