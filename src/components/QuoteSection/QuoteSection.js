import React from "react";
import { useTranslation } from "react-i18next";
import "./QuoteSection.scss";
import { Col, Row } from "reactstrap";
import Slide from "react-reveal/Slide";

const QuoteSection = () => {
  const { t } = useTranslation("common");

  return (
    <Row className="quote-section">
      <Col xs={7} className="quote-section-column text-center mx-auto">
        <Slide left cascade>
          <div>
            <p className="quote-section__quote">"{t("welcome.quote")}"</p>
            <p className="quote-section__author">- Peter Singer</p>
          </div>
        </Slide>
      </Col>
    </Row>
  );
};

export default QuoteSection;
