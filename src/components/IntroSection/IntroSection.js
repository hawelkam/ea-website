import React from "react";
import { Button, Col, Row } from "reactstrap";
import { useTranslation } from "react-i18next";

const IntroSection = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <Row className="intro-section">
      <Col>
        <h1>{t("welcome.title")}</h1>
        <p>{t("welcome.text")}</p>
        <Button>Dowiedz się więcej</Button>
      </Col>
    </Row>
  );
};

export default IntroSection;
