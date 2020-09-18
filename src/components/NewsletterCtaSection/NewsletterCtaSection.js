import React from "react";
//import { useTranslation } from "react-i18next";
import "./NewsletterCtaSection.scss";
import { Button, Col, Row } from "reactstrap";
import { Fade } from "react-reveal";

const NewsletterCtaSection = () => {
  //const { t, i18n } = useTranslation("common");

  return (
    <Fade right>
      <Row className="newsletter-cta-section">
        <Col className="text-center mx-auto">
          <h1 className="newsletter-cta-section__heading">
            Zapisz się do newslettera
          </h1>
          <Button className="newsletter-cta-section__button">SUBSKRYBUJ</Button>
        </Col>
      </Row>
    </Fade>
  );
};

export default NewsletterCtaSection;
