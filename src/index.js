import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { register as registerServiceWorker } from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("exilee-root"));
registerServiceWorker();
