import React from "react";
//import { useTranslation } from "react-i18next";
import { Col, Row } from "reactstrap";
import "./SocialSection.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Fade } from "react-reveal";

const SocialSection = () => {
  //const { t, i18n } = useTranslation("common");

  return (
    <Fade left cascade>
      <Row className="social-section">
        <Col className="d-flex justify-content-center mx-auto">
          <div className="social-section__icon">
            <a href="https://www.facebook.com/efektywnyaltruizmfundacja">
              <FontAwesomeIcon icon={faFacebookSquare} className="fa-5x" />
            </a>
          </div>
          <div className="social-section__icon">
            <a href="https://www.linkedin.com/company/efektywnyaltruizm/">
              <FontAwesomeIcon icon={faLinkedin} className="fa-5x" />
            </a>
          </div>
        </Col>
      </Row>
    </Fade>
  );
};

export default SocialSection;
