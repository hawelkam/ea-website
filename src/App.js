import React, { Suspense } from "react";
import "./App.css";
import { useTranslation } from "react-i18next";

function TopBar() {
  const { t, i18n } = useTranslation("common");
  return (
    <div>
      <h1>{t("welcome.title")}</h1>
      <button onClick={() => i18n.changeLanguage("pl")}>PL</button>
      <button onClick={() => i18n.changeLanguage("en")}>EN</button>
    </div>
  );
}

function App() {
  return (
    <Suspense fallback="loading">
      <div className="App">
        <TopBar />
      </div>
    </Suspense>
  );
}

export default App;
