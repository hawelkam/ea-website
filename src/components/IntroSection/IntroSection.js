import React from "react";
import { Button, Col, Row } from "reactstrap";
import { useTranslation } from "react-i18next";
import "./IntroSection.scss";

const IntroSection = ({ content }) => {
  const { t, i18n } = useTranslation("common");

  return (
    <Row className="intro-section">
      <Col xs={6} className="text-center mx-auto">
        <h1 className="intro-section__heading">{t(`${content}.title`)}</h1>
        <p className="intro-section__subtitle">{t(`${content}.text`)}</p>
        <Button className="intro-section__button">Dowiedz się więcej</Button>
      </Col>
    </Row>
  );
};

export default IntroSection;
