import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Row } from "reactstrap";

const Footer = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <Row>
      <Col>
        <h1>Footer SECTION</h1>
      </Col>
    </Row>
  );
};

export default Footer;
