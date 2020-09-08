import React from "react";
import { persons, user } from "../data/users";
import { authReducer, authAction } from "../reducers/authReducer";

export interface authContext {
  users: user[]
  dispatchAuth: React.Dispatch<authAction>;
}

export const AuthContext = React.createContext<any | authContext>(
  persons
);

export const AuthProvider: React.FC = (props): JSX.Element => {
  const [users, dispatchAuth] = React.useReducer(authReducer, persons);
  return (
    <AuthContext.Provider value={{ users, dispatchAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};
