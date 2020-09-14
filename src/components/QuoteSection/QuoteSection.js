import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Row } from "reactstrap";

const QuoteSection = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <Row>
      <Col>
        <h1>QUOTE SECTION</h1>
      </Col>
    </Row>
  );
};

export default QuoteSection;
