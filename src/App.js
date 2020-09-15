import React, { Suspense } from "react";
import "./App.scss";
import TopBar from "./components/TopBar/TopBar";
import HomePage from "./pages/Home/HomePage";
import MovementPage from "./pages/Movement/MovementPage";
import FoundationPage from "./pages/Foundation/FoundationPage";
import JoinUsPage from "./pages/JoinUs/JoinUsPage";
import Footer from "./components/Footer/Footer";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Suspense fallback="loading">
        <Container fluid>
          <TopBar />
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/movement" exact>
              <MovementPage />
            </Route>
            <Route path="/foundation" exact>
              <FoundationPage />
            </Route>
            <Route path="/join-us" exact>
              <JoinUsPage />
            </Route>
          </Switch>
          <Footer />
        </Container>
      </Suspense>
    </Router>
  );
}

export default App;
