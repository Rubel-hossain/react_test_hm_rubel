import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./happy_story.scss";
export default function Index() {
  const [ourStory, setOurStory] = useState([]);
  const [postsNumber, setPostsNumber] = useState(16);
  useEffect(() => {
    fetch(
      "https://pixabay.com/api/?key=20055481-747d5a5045dd80c339cb1387d&q=yellow+flowers&image_type=photo"
    )
      .then((res) => res.json())
      .then((data) => {
        setOurStory(data.hits);
      });
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    center: false,
  };
  if (ourStory.length > 0) {
    return (
      <div className="story-wrapper">
        <div id="brwowsPlan">
          <div className="container text-center">
            <h2>Upgrade your membership to connect with those you like</h2>
            <p>
              Search your perfect life-partner from millions of trusted &
              authentic profiles.
            </p>
            <p>
              To know more, call us: (+880) 25881149, (+880) 1789168581, (+880)
              1731556712
            </p>
            <br />
            <a href="#" className="browsplan_btn">
              Brows Membership Plans
            </a>
          </div>
        </div>
        <div className="happy_stories">
          <div className="container">
            <h2 className="text-center">Happy stories</h2>
            <div className="row">
              <div className="col-md-12">
                <Slider {...settings}>
                  {ourStory.slice(11, postsNumber).map((story) => (
                    <div key={story.id}>
                      <div className="happy_stories_elements">
                        <img
                          className="img-fluid"
                          data-src={story.webformatURL}
                          src={story.webformatURL}
                          alt=""
                        />
                        <div className="happy_stories_caption">
                          <p>
                            Love is here ..
                            <span className="pull-right loves">
                              <i className="love1 fa fa-heart"></i>
                              <i className="love2 fa fa-heart"></i>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>Loading..........</h3>
          </div>
        </div>
      </div>
    );
  }
}
