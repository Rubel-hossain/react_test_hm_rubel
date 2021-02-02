import React from "react";
import logo from "../../assets/images/logo.webp";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Index(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="main-menu">
              <Navbar expand="md">
                <Link className="navbar-brand" to="/">
                  <img src={logo} alt="logo" className="img-fluid" />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mx-auto">
                    <Link className="nav-link" to="/">
                      Saturday- Thursday 10:00 AM - 6:00 PM
                    </Link>
                  </Nav>
                  <Nav>
                    <Link className="nav-link" to="/registration">
                      Register Free
                    </Link>
                    <Link className="nav-link" to="/login">
                      Log In
                    </Link>
                    <Nav.Link href="#" onClick={props.handleSidebar}>
                      <i className="fas fa-bars"></i>
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
