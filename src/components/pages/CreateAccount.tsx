import React from "react";
import LogIn from "../layouts/LogIn";
import Register from "../layouts/Register";

const CreateAccount: React.FC = (): JSX.Element => {
  return (
    <section className="main-content">
      <div className="row">
        <LogIn />
        <Register />
      </div>
    </section>
  );
};

export default CreateAccount;
