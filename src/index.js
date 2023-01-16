import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { MainPage } from "./page/MainPage";
import "./styles/index.css";

render(
  <Provider store={store}>
    <React.StrictMode>
      <MainPage />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
