import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./assets/style/index.scss";
import { App } from "./components";
import { store, history } from "./store/store";
import { Router } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
