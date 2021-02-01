import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./members_slider.scss";
export default function Index() {
  const [memberImages, setMemberImages] = useState([]);
  const [postsNumber, setPostsNumber] = useState(16);
  useEffect(() => {
    fetch(
      "https://pixabay.com/api/?key=20055481-747d5a5045dd80c339cb1387d&q=yellow+flowers&image_type=photo"
    )
      .then((res) => res.json())
      .then((data) => {
        setMemberImages(data.hits);
      });
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    center: false,
  };
  if (memberImages.length > 0) {
    return (
      <section id="premium_member" className="members-slider my-5">
        <div className="container">
          <div className="row-col-md-12">
            <Slider {...settings}>
              {memberImages.slice(8, postsNumber).map((member) => (
                <div key={member.id}>
                  <img
                    data-src={member.webformatURL}
                    className="img-fluid"
                    src={member.webformatURL}
                    alt=""
                  />
                  <div className="premium_members_infos text-center">
                    <strong> ID : HM_23j590</strong>
                    <div className="members_followers">
                      <span>
                        <span>0</span> Follower(s)
                      </span>
                      <span>
                        <span>1</span> Following
                      </span>
                    </div>
                    <a href="#" className="viewProfile">
                      Full Profile
                    </a>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>Loading ......</h3>
          </div>
        </div>
      </div>
    );
  }
}
