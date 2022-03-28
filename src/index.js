import React from "react";
import ReactDOM from "react-dom";
import "./scss/styles.scss";
import { App } from "./App";
import { BrowserRouter as Router } from "react-router-dom";
// import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.unregister();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
