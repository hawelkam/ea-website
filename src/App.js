import React, { Suspense } from "react";
import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import IntroSection from "./components/IntroSection/IntroSection";
import QuoteSection from "./components/QuoteSection/QuoteSection";
import ContentPreviewSection from "./components/ContentPreviewSection/ContentPreviewSection";
import NewsletterCtaSection from "./components/NewsletterCtaSection/NewsletterCtaSection";
import SocialSection from "./components/SocialSection/SocialSection";
import Footer from "./components/Footer/Footer";
import { Container } from "reactstrap";

function App() {
  return (
    <Suspense fallback="loading">
      <Container fluid>
        <TopBar />
        <IntroSection />
        <QuoteSection />
        <ContentPreviewSection />
        <ContentPreviewSection />
        <NewsletterCtaSection />
        <SocialSection />
        <Footer />
      </Container>
    </Suspense>
  );
}

export default App;
