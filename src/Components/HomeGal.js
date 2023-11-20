import React from "react";
import "./HomeGal.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HomeGalData from "./HomeGalData";

function HomeGal() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };
  return (
    <div>
      <section className="collection">
        <div className="container top">
          <Slider {...settings}>
            {HomeGalData.map((value) => {
              return (
                <div className="box">
                  <img src={value.cover} alt="" />
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </div>
  );
}

export default HomeGal;
