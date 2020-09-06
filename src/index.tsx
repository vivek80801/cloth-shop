import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GlobalProvider } from "./contexts/globalContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
