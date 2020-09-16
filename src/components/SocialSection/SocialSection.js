import React from "react";
//import { useTranslation } from "react-i18next";
import { Col, Row } from "reactstrap";
import "./SocialSection.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const SocialSection = () => {
  //const { t, i18n } = useTranslation("common");

  return (
    <Row className="social-section">
      <Col className="d-flex justify-content-center mx-auto">
        <div className="social-section__icon">
          <a href="http://facebook.com">
            <FontAwesomeIcon icon={faFacebookSquare} className="fa-5x" />
          </a>
        </div>
        <div className="social-section__icon">
          <a href="htpp://linkedin.com">
            <FontAwesomeIcon icon={faLinkedin} className="fa-5x" />
          </a>
        </div>
      </Col>
    </Row>
  );
};

export default SocialSection;
