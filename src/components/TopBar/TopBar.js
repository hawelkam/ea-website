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

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md" className="">
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
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="main-nav-item">
                Język
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  onClick={() => i18n.changeLanguage("pl")}
                  className="main-nav-item"
                >
                  PL
                </DropdownItem>
                <DropdownItem
                  onClick={() => i18n.changeLanguage("en")}
                  className="main-nav-item"
                >
                  EN
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Button className="main-nav-button">Kontakt</Button>
        </Collapse>
      </Navbar>
      <h1>{t("welcome.title")}</h1>
    </div>
  );
};

export default TopBar;
