import React, { Suspense } from "react";
import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import { Container } from "reactstrap";

function App() {
  return (
    <Suspense fallback="loading">
      <Container>
        <TopBar />
      </Container>
    </Suspense>
  );
}

export default App;
