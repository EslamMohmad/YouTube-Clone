import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Store from "./Store/Store";

import App from "./App";
import "./index.css";
import Modal from "./components/ModalComponents/Modal";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={Store}>
    <App>
      <Modal />
    </App>
  </Provider>
);
