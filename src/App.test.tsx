import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

cleanup();

describe("render labour components", () => {
  test("should render labour components", () => {
  
    const { getByText, debug } = render(
      <Router>
        <App />
      </Router>
    );
    // debug();
  });
});
