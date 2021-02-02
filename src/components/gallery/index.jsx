import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./gallery.scss";
export default function Index() {
  const [sliderImages, setSliderImages] = useState([]);
  useEffect(() => {
    fetch(
      "https://pixabay.com/api/?key=20055481-747d5a5045dd80c339cb1387d&q=yellow+flowers&image_type=photo"
    )
      .then((res) => res.json())
      .then((data) => {
        setSliderImages(data.hits);
      });
  }, []);
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 6,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
  };
  if (sliderImages.length > 0) {
    return (
      <section id="bg_gallery" className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center">Gallery</h2>
              <div className="row glry_img ">
                <div className="col-md-12">
                  <SimpleReactLightbox>
                    <SRLWrapper>
                      <Slider {...settings}>
                        {sliderImages.slice(0, 8).map((gallery) => (
                          <div className="single-gallery" key={gallery.id}>
                            <a role="button" href={gallery.webformatURL}>
                              <img
                                className="img-fluid"
                                src={gallery.webformatURL}
                              />
                            </a>
                          </div>
                        ))}
                      </Slider>
                    </SRLWrapper>
                  </SimpleReactLightbox>
                  <SimpleReactLightbox>
                    <SRLWrapper>
                      <Slider {...settings}>
                        {sliderImages.slice(8, 16).map((gallery) => (
                          <div className="single-gallery" key={gallery.id}>
                            <a role="button" href={gallery.webformatURL}>
                              <img
                                className="img-fluid"
                                src={gallery.webformatURL}
                              />
                            </a>
                          </div>
                        ))}
                      </Slider>
                    </SRLWrapper>
                  </SimpleReactLightbox>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p>Loading............</p>
          </div>
        </div>
      </div>
    );
  }
}
