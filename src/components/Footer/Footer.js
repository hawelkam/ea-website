import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Nav, NavItem, NavLink, Row } from "reactstrap";
import "./Footer.scss";

const Footer = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <Row className="footer">
      <Col>
        <h1>Footer SECTION</h1>
        <p>
          Fundacja Efektywny Altruizm
          <br />
          Plac Bankowy 2, 00-095 Warszawa
          <br />
          KRS: 0000726237, REGON: 369951399, NIP: 5252746902
          <br />
          ING Bank Śląski S.A.
          <br />
          Nr konta: PL 67 1050 1012 1000 0090 8040 3265
          <br />
        </p>
        <Nav>
          <NavItem>
            <NavLink>Materiały dla mediów</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Napisz do nas</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Ciasteczka</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Polityka prywatności</NavLink>
          </NavItem>
        </Nav>
      </Col>
    </Row>
  );
};

export default Footer;
