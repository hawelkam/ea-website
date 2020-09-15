import React from "react";
import { useTranslation } from "react-i18next";
import "./QuoteSection.scss";
import { Col, Row } from "reactstrap";

const QuoteSection = () => {
  const { t } = useTranslation("common");

  return (
    <Row className="quote-section">
      <Col xs={7} className="text-center mx-auto">
        <p className="quote-section__quote">"{t("welcome.quote")}"</p>
        <p className="quote-section__author">- Peter Singer</p>
      </Col>
    </Row>
  );
};

export default QuoteSection;
