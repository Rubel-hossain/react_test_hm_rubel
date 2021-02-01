import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import FilterSearch from "../filter_search";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero_area.scss";
export default function Index() {
  const [heroImages, setHeroImages] = useState([]);
  const [postsNumber, setPostsNumber] = useState(8);
  useEffect(() => {
    fetch(
      "https://pixabay.com/api/?key=20055481-747d5a5045dd80c339cb1387d&q=yellow+flowers&image_type=photo"
    )
      .then((res) => res.json())
      .then((data) => {
        setHeroImages(data.hits);
      });
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  if (heroImages.length > 0) {
    return (
      <div className="hero-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 px-0">
              <Slider {...settings}>
                {heroImages.slice(0, postsNumber).map((hero) => (
                  <div key={hero.id}>
                    <div
                      className="single-slide"
                      style={{
                        backgroundImage: `url(${hero.webformatURL})`,
                      }}
                    ></div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <FilterSearch />
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>Loading ...........</h3>
          </div>
        </div>
      </div>
    );
  }
}
