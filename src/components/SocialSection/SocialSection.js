import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Row } from "reactstrap";
import "./SocialSection.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const SocialSection = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <Row className="social-section">
      <Col className="text-center mx-auto">
        <a href="#">
          <FontAwesomeIcon icon={faFacebookSquare} className="fa-5x" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faLinkedin} className="fa-5x" />
        </a>
      </Col>
    </Row>
  );
};

export default SocialSection;
