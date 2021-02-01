import React, { Component } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
class Test extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: null,
    };
  }

  handleClose = (id) => {
    this.setState({ show: id });
  };

  handleShow = (id) => {
    this.setState({ show: id });
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col xsOffset={1} sm={5}>
              <Button
                bsStyle="primary"
                bsSize="large"
                onClick={() => this.handleShow("here")}
              >
                <h1>You are here!</h1>
              </Button>
              <Modal show={this.state.show == "here"} onHide={this.handleClose}>
                <Modal.Header
                  closeButton
                  closeLabel="close window"
                ></Modal.Header>
                <Modal.Body>
                  <p className="landing-page-markers you-are-here">
                    Tired of toy projects, tutorials and online courses?
                    <p>Love lorem</p>
                  </p>
                </Modal.Body>
              </Modal>
            </Col>
            <Col xsOffset={1} sm={5}>
              <Button
                bsStyle="primary"
                bsSize="large"
                onClick={() => this.handleShow("2")}
              >
                <h1>You are here!</h1>
              </Button>
              <Modal show={this.state.show == "2"} onHide={this.handleClose}>
                <Modal.Header
                  closeButton
                  closeLabel="close window"
                ></Modal.Header>
                <Modal.Body>
                  <p className="landing-page-markers you-are-here">
                    Tired of toy projects, tutorials and online courses?
                    55555555555555555
                    <p>Love lorem</p>
                  </p>
                </Modal.Body>
              </Modal>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Test;
