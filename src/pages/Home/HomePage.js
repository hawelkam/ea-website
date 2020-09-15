import React from "react";
import IntroSection from "../../components/IntroSection/IntroSection";
import QuoteSection from "../../components/QuoteSection/QuoteSection";
import ContentPreviewSection from "../../components/ContentPreviewSection/ContentPreviewSection";
import NewsletterCtaSection from "../../components/NewsletterCtaSection/NewsletterCtaSection";
import SocialSection from "../../components/SocialSection/SocialSection";
import RecommendedSlider from "../../components/RecommendedSlider/RecommendedSlider";
import photo from "../../assets/images/test-photo.jpg";

const content = [
  {
    label: "O NAS",
    heading: "Czym jest Efektywny Altruizm?",
    text:
      "Które działania wspierać? Którą ścieżkę kariery wybrać? Które organizacje charytatywne zagospodarują moją darowiznę w najbardziej efektywny sposób? Jeśli nie wybierzesz dobrze, ryzykujesz utratę czasu i pieniędzy. Jeśli jednak podejmiesz właściwy wybór, masz ogromną szansę na zmianę świata na lepsze.",
    cta: "dowiedz się więcej",
    img: photo,
    imgAlt: "test",
  },
  {
    label: "O NAS",
    heading: "Jak działamy w Polsce?",
    text:
      "Fundacja Efektywny Altruizm jest częścią międzynarodowej społeczności Effective Altruism. Tworzą ją organizacje dobroczynne, przedsiębiorcy społeczni, pracownicy akademiccy i rozległa sieć sympatyków na świecie.",
    cta: "dowiedz się więcej",
    img: photo,
    imgAlt: "test",
  },
];

const HomePage = () => {
  return (
    <>
      <IntroSection content={"welcome"} />
      <QuoteSection />
      <ContentPreviewSection content={content[0]} />
      <ContentPreviewSection reversed content={content[1]} />
      <RecommendedSlider />
      <NewsletterCtaSection />
      <SocialSection />
    </>
  );
};

export default HomePage;
