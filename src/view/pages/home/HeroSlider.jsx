import { Button, Spin } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import bannerImage from "../../../assets/images/pages/landing/banner.jpg";

export default function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    pauseOnHover: false,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings}>
        {/* slider 1 */}
        <div>
          <img height={500} width="100%" style={{ objectFit: "cover" }} src={bannerImage} alt="" />
          <div
            style={{
              position: "fixed",
              top: "0",
              width: "100%",
              height: "99%",
              background: "rgba(0,0,0,0.4)",
            }}
          ></div>

          <div
            className="slider-text"
            style={{
              position: "absolute",
              top: "9%",
              left: "11%",
              width: "50%",
              padding: "20px 0",
              color: "white",
            }}
          >
            <h1 style={{ color: "white" }}>
              Sochitel delivers digital products and services to major banks, financial service
              providers, and corporate clients globally.
            </h1>
            <p style={{ fontSize: "16px" }}>
              Our industry leading platform enables our partners to offer the full range of digital
              products and services their customers want
            </p>
            <div>
              <Button
                type="primary"
                className="hp-py-sm-8 hp-py-16 hp-px-32 hp-mt-24"
                style={{ fontSize: "16px", boxShadow: "5px 5px 3px black" }}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
}
