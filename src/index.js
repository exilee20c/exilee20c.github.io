import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { register as registerServiceWorker, unregister } from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("exilee-root"));

if (window._exilee_map && window._exilee_map.is_service_worker_works) {
  registerServiceWorker();
}

unregister();
