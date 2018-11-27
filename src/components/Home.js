import React, { Component } from 'react';
import {Container, Row, Col } from 'reactstrap';
import Quote from './Quote';
import './Home.css'

class Home extends Component {
  render() {
    return (
        <div id="home">
            <img src = "/images/home_pic.jpg" id = "selfie" alt="me"/>
            <Quote />
            <h1>THIS PAGE IS CURRENTLY UNDER CONSTRUCTION</h1>
            <Container id="react_strap">
              <Row>
                <Col xs="12" className="center">
                  <h1>Welcome to My Website</h1>
                </Col>
              </Row>

              <Row>
                <Col xs="12" sm="3" className="left">Purpose</Col>
                <Col xs="12" sm="9">
                  <p>This website is a demonstration of my engineering capabilities and personal interests. More importantly,
                     I use this website as a playground to continuously improve myself as a web engineer.
                  </p>
                </Col>
              </Row>

              <Row>
                <Col xs="12" sm="3" className="left">Responsive</Col>
                <Col xs="12" sm="9">
                  <p>I have followed <a href="https://getbootstrap.com/docs/4.0/layout/overview/">Bootstrap 4's </a> media queries
                     to account for various devices. If you're on desktop, go ahead and resize the browser window.
                  </p>
                </Col>
              </Row>
            </Container>
        </div>
    );
  }
}

export default Home;