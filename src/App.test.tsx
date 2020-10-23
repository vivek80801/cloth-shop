import React from "react";
import { render, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import { GlobalProvider } from "./contexts/globalContext";
import App from "./App";

cleanup();

describe("render app", () => {
  test("should render Products components", () => {
    const { getByText } = render(
      <Router>
        <AuthProvider>
          <GlobalProvider>
            <App />
          </GlobalProvider>
        </AuthProvider>
      </Router>
    );
    const man = getByText("Man");
    expect(man).toBeInTheDocument();
  });
});
