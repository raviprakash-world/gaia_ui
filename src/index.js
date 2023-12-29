import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client

const root = document.getElementById("root");

const rootElement = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

const appRoot = createRoot(root); // Use createRoot from react-dom/client
appRoot.render(rootElement);
