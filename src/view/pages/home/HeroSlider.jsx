import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

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
    <section className="hp-my-32">
      <Slider {...settings}>
        <div>
          <img
            height={500}
            width="100%"
            style={{ objectFit: "cover" }}
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.iUnleDpkbpOkxomYc_mctQHaEo%26pid%3DApi&f=1"
            alt=""
          />
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <img
            height={500}
            width="100%"
            style={{ objectFit: "cover" }}
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.iUnleDpkbpOkxomYc_mctQHaEo%26pid%3DApi&f=1"
            alt=""
          />
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <img
            height={500}
            width="100%"
            style={{ objectFit: "cover" }}
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.iUnleDpkbpOkxomYc_mctQHaEo%26pid%3DApi&f=1"
            alt=""
          />
        </div>
      </Slider>
    </section>
  );
}