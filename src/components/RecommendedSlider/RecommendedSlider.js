import React from "react";
import Slider from "react-slick";
import okLogo from "../../assets/images/ok-logo.png";
import paretoLogo from "../../assets/images/pareto-logo.png";
import altruistoLogo from "../../assets/images/altruisto-logo.png";
import provegLogo from "../../assets/images/proveg-logo.png";
import schweitzerLogo from "../../assets/images/schweitzer-logo.png";
import { Col, Row } from "reactstrap";

const RecommendedSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    className: "d-flex align-items-center",
  };
  return (
    <Row>
      <Col>
        <Slider {...settings}>
          <div className="slide">
            <img src={okLogo} alt="OK logo" />
          </div>
          <div className="slide">
            <img src={schweitzerLogo} alt="Albert Schweitzer logo" />
          </div>
          <div className="slide">
            <img src={provegLogo} alt="ProVeg logo" />
          </div>
          <div className="slide">
            <img src={altruistoLogo} alt="Altruisto logo" />
          </div>
          <div className="slide">
            <img src={paretoLogo} alt="Pareto logo" />
          </div>
        </Slider>
      </Col>
    </Row>
  );
};

export default RecommendedSlider;
