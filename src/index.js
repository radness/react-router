import React from "react";
import ReactDOM from "react-dom";
import Root from "./client/Root";
// import registerServiceWorker from './registerServiceWorker';
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>,
  document.getElementById("root")
);

// registerServiceWorker();
