import React from 'react';
import logo from "../../assets/images/logo.webp";
import {Navbar,Button,Link,Nav,Form,FormControl } from "react-bootstrap";
export default function Index() {
    return (
     <>
      <div className="container">
          <div className="row">
              <div className="col-md-12">
               <div className="main-menu">
                <Navbar  expand="md">
                    <Navbar.Brand href="#home">
                      <img src={logo} alt="logo" className="img-fluid" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#">Saturday- Thursday 10:00 AM - 6:00 PM</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#">Register Free</Nav.Link>
                            <Nav.Link href="#">Log In</Nav.Link>
                            <Nav.Link href="#"><i className="fas fa-bars"></i></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
               </div>
              </div>
          </div>
      </div>
     </>
    )
}
