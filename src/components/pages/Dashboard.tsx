import React from "react";
import { AuthContext, authContext } from "../../contexts/authContext";

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
  return <>{auth ? <>hello {name}</> : <>you are not logged in</>}</>;
};

export default Dashboard;
