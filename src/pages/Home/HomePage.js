import React from "react";
import IntroSection from "../../components/IntroSection/IntroSection";
import QuoteSection from "../../components/QuoteSection/QuoteSection";
import ContentPreviewSection from "../../components/ContentPreviewSection/ContentPreviewSection";
import NewsletterCtaSection from "../../components/NewsletterCtaSection/NewsletterCtaSection";
import SocialSection from "../../components/SocialSection/SocialSection";
import RecommendedSlider from "../../components/RecommendedSlider/RecommendedSlider";

const HomePage = () => {
  return (
    <>
      <IntroSection content={"welcome"} />
      <QuoteSection />
      <ContentPreviewSection />
      <ContentPreviewSection />
      <RecommendedSlider />
      <NewsletterCtaSection />
      <SocialSection />
    </>
  );
};

export default HomePage;
