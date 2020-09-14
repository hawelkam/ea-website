import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import eaLogo from "../../assets/images/efektywny-altruizm-logo.svg";

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
        <NavbarBrand href="/">
          <object type="image/svg+xml" data={eaLogo} className="logo">
            EA Logo
          </object>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          <Nav navbar>
            <NavItem>
              <NavLink href="#" className="main-nav-item">
                {t("main_nav.about_movement")}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="main-nav-item">
                {t("main_nav.about_foundation")}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="main-nav-item">
                {t("main_nav.join_us")}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={switchLanguage} className="main-nav-item">
                {lang === "pl" ? "EN" : "PL"}
              </NavLink>
            </NavItem>
          </Nav>
          <Button className="main-nav-button">{t("main_nav.contact")}</Button>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TopBar;
