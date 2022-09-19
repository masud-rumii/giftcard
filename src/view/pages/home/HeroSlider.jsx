import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function HeroSlider() {
  const [sliderImage, setSliderImage] = useState([]);

  useEffect(() => {
    fetch("http://178.128.127.100/sochitel-communicator/public/api/get-all-slider-image")
      .then((res) => res.json())
      .then((data) => setSliderImage(data.data));
  }, []);

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
    <section>
      <Slider {...settings}>
        {sliderImage.map((image) => {
          return (
            <div>
              <img height={500} width="100%" style={{ objectFit: "cover" }} src={image} alt="" />
            </div>
          );
        })}
      </Slider>
    </section>
  );
}
