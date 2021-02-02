import React, { useState, useEffect } from "react";
import Navbar from "../navbar";
import "./scss/header.scss";
export default function Index() {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };
  const closeSidebar = () => {
    setSidebar(false);
  };
  return (
    <div>
      <Navbar handleSidebar={handleSidebar} />
      <div
        id="side_menu"
        className={sidebar ? "open-sidebar" : "close-sidebar"}
      >
        <div className="side_menu_close side_menu_off">
          <a role="button" onClick={closeSidebar}>
            <i className="fa fa-arrow-circle-right"></i>
          </a>
        </div>
        <div className="side_menu_log_reg">
          <a href="#">LOGIN</a>
          <a href="#">REGISTER</a>
        </div>
        <div className="side_menus_menu">
          <a href="#">Home</a>
          <a href="#">Active Member</a>
          <a href="#">Premium Plans</a>
          <a href="#">Happy Stories</a>
          <a href="#">Contact Us</a>
          <a href="#">About Us</a>
          <a href="#">Help</a>
          <a href="#">Blog</a>
          <a href="#">Download App</a>
          <a href="#">Media & Press</a>
        </div>
        <div className="side_menu_contacts">
          <p>
            Give Us Your Feedback Need any help? Write to us at
            hmweddingsdev@gmail.com
          </p>
          <ul>
            Call Us On
            <li>(+880) 25881149 </li>
            <li>(+880) 1789168581 </li>
            <li>(+880) 1731556712 </li>
          </ul>
        </div>
        <div className="side_menu_follow_us">
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa fa-link"></i>
          </a>
          <a href="#">
            <i className="fa fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
