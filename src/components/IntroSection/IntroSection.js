import React from "react";
import { Button, Col, Row } from "reactstrap";
import { useTranslation } from "react-i18next";

const IntroSection = ({ content }) => {
  const { t, i18n } = useTranslation("common");

  return (
    <Row className="intro-section">
      <Col xs={6} className="text-center mx-auto">
        <h1 className="heading">{t(`${content}.title`)}</h1>
        <p className="bold-text">{t(`${content}.text`)}</p>
        <Button className="intro-button">Dowiedz się więcej</Button>
      </Col>
    </Row>
  );
};

export default IntroSection;
