import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Row } from "reactstrap";

const SocialSection = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <Row>
      <Col>
        <h1>SocialSection SECTION</h1>
      </Col>
    </Row>
  );
};

export default SocialSection;
