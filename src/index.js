import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Store from "./Store/Store";
import { GoogleOAuthProvider } from "@react-oauth/google";

import App from "./App";
import "./index.css";
import Modal from "./components/ModalComponents/Modal";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={Store}>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_YOUTUBE_CLIENT_ID}>
      <App>
        <Modal />
      </App>
    </GoogleOAuthProvider>
  </Provider>
);
