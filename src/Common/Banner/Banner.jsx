import React from "react";
import { Container, Row, Col } from "reactstrap";
import slide1 from "./slide1.jpg";
import slide2 from "./slide2.jpg";
import slide3 from "./slide3.jpg";
import slide4 from "./slide4.jpg";
import classes from "./Banner.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css";

function SampleNextArrow({ className, style, onClick }) {
    return (
      <div
        className={className}
        style={{ ...style, display: "block", zIndex: "10"}}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow({ className, style, onClick }) {
    return (
      <div
        className={className}
        style={{ ...style, display: "block", zIndex: "10"}}
        onClick={onClick}
      />
    );
  }

const Banner = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

    return (
        <div className={classes.banner}>
            <Container fluid className="no_gap">
                <Row>
                    <Col lg="12">
                        <Slider {...settings}>
                          <BannerItem src={slide1} alt="Banner 1" />
                          <BannerItem src={slide2} alt="Banner 2" />
                          <BannerItem src={slide3} alt="Banner 3" />
                          <BannerItem src={slide4} alt="Banner 4" />
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

const BannerItem = ({src, alt}) => {
  return(
    <div>
      <img src={src} alt={alt}/>
    </div>
  )
}


export default Banner;