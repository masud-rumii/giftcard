import { Spin } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import useGetAllSliderImage from "../../../hooks/rq/sohcitelCommunicator/useGetAllSliderImage";

export default function HeroSlider() {
  const { data: allSliderImage, isLoading } = useGetAllSliderImage();

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
      {isLoading ? (
        <Spin />
      ) : (
        <Slider {...settings}>
          {allSliderImage?.data?.data.map((image, idx) => {
            return (
              <div key={idx}>
                <img
                  height={500}
                  width="100%"
                  style={{ objectFit: "cover" }}
                  src={image}
                  alt=""
                />
              </div>
            );
          })}
        </Slider>
      )}
    </>
  );
}
