import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_pl from "./locale/pl/common.json";
import common_en from "./locale/en/common.json";
import { BrowserRouter } from "react-router-dom";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "pl",
  resources: {
    pl: {
      common: common_pl,
    },
    en: {
      common: common_en,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
