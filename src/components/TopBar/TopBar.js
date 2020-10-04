import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./TopBar.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Button,
  Col
} from "reactstrap";
import eaLogo from "../../assets/images/efektywny-altruizm-logo.svg";
import { Link } from "react-router-dom";
import plFlag from "../../assets/images/pl.png";
import ukFlag from "../../assets/images/uk.png";

const TopBar = () => {
  const { t, i18n } = useTranslation("common");
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("pl");

  const toggle = () => setIsOpen(!isOpen);
  const switchLanguage = () => {
    const langToSet = lang === "pl" ? "en" : "pl";
    setLang(langToSet);
    i18n.changeLanguage(langToSet);
  };

  return (
    <div>
      <Navbar expand="lg" className="">
        <Col xs={2}>
          <NavbarBrand href="/">
            <object type="image/svg+xml" data={eaLogo} className="logo">
              EA Logo
            </object>
          </NavbarBrand>
          <NavbarToggler className="main-nav__toggler" onClick={toggle} />

        </Col>
        <Col xs={10} className="d-flex justify-content-end">
          <Collapse isOpen={isOpen} navbar className="justify-content-end">
            <Col xs={10}>
            <Nav navbar className="justify-content-center">
              <Link to="/movement" className="main-nav__item">
                {t("main_nav.about_movement")}
              </Link>
              <Link to="/foundation" className="main-nav__item">
                {t("main_nav.about_foundation")}
              </Link>
              <Link to="/join-us" className="main-nav__item">
                {t("main_nav.join_us")}
              </Link>
              <Link to="/blog" className="main-nav__item">
                {t("main_nav.blog")}
              </Link>
              <div onClick={switchLanguage} className="main-nav__item">
                <img src={lang === "pl" ? ukFlag : plFlag} alt={lang === "pl" ? "ukFlag" : "plFlag"}/>
              </div>
            </Nav>
              </Col>
              <Col xs={2}>
              <div className="main-nav__button--wrapper">
              <Button className="main-nav__button">
                {t("main_nav.contact")}
              </Button>
            </div>
              </Col>
            
          </Collapse>
        </Col>
        
      </Navbar>
    </div>
  );
};

export default TopBar;
