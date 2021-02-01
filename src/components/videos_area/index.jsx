import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import "./videos_area.scss";
export default class Index extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: null,
      videosData: [],
    };
  }
  componentDidMount() {
    fetch(
      "https://pixabay.com/api/videos/?key=20055481-747d5a5045dd80c339cb1387d&q=yellow+flowers"
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ videosData: data.hits });
      });
  }

  handleClose = (id) => {
    this.setState({ show: id });
  };

  handleShow = (e, id) => {
    this.setState({ show: id });
    e.preventDefault();
  };

  render() {
    if (this.state.videosData.length > 0) {
      return (
        <section className="full_video_sessions">
          <h2 className="text-center"> Video Session's </h2>
          <div
            id="bg_video"
            style={{
              backgroundImage: `url(https://www.hmweddings.com/uploads/home_body_section/10f0408cc6213f4db3bd4a48f83c6237.webp)`,
            }}
          >
            <div className="container video">
              <div className="row">
                <br />
                <br />
                <div className="demo-gallery">
                  <ul id="video-gallery">
                    {this.state.videosData.slice(1, 4).map((video) => (
                      <li key={video.id} className="video mt-5">
                        <a href="#">
                          <img
                            className="img-fluid image_slide"
                            src={video.userImageURL}
                            onClick={(e) => this.handleShow(e, video.id)}
                          />
                          <div
                            className="demo-gallery-poster"
                            onClick={(e) => this.handleShow(e, video.id)}
                          >
                            <img
                              className="img-fluid"
                              src="https://www.hmweddings.com/uploads/youtube_video/play-button.png"
                            />
                          </div>
                        </a>
                        <Modal
                          show={this.state.show == video.id}
                          onHide={this.handleClose}
                          size="xl"
                        >
                          <Modal.Header
                            closeButton
                            closeLabel="close window"
                          ></Modal.Header>
                          <Modal.Body>
                            <p className="landing-page-markers you-are-here">
                              <div className="embed-responsive embed-responsive-16by9">
                                <iframe
                                  className="embed-responsive-item"
                                  src={video.videos.large.url}
                                  allowFullScreen
                                ></iframe>
                              </div>
                            </p>
                          </Modal.Body>
                        </Modal>
                      </li>
                    ))}
                  </ul>
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
              <h3>Loading ..........</h3>
            </div>
          </div>
        </div>
      );
    }
  }
}
