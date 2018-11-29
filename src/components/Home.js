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
                <Col xs="12" sm="3" className="left">PURPOSE</Col>
                <Col xs="12" sm="9">
                  <p>This website is a demonstration of my engineering capabilities and personal interests. More importantly,
                     I use this website as a playground to continuously improve myself as a web engineer.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="3" className="left">TECH STACK</Col>
                <Col xs="12" sm="9">
                  <p>The DOM is rendered with <a href="https://reactjs.org/">React</a>. Version control
                     using <a href="https://github.com/">GitHub</a>. Styling with <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"> CSS</a>.
                     <a href="https://www.npmjs.com/"> Node Package Manager</a> to manage dependencies. 
                     <a href="https://eslint.org/"> ESLint</a> for writing clean JavaScript code.
                  </p>
                </Col>
              </Row>

              <Row>
                <Col xs="12" sm="3" className="left">RESPONSIVE</Col>
                <Col xs="12" sm="9">
                  <p>I have followed <a href="https://getbootstrap.com/docs/4.0/layout/overview/">Bootstrap 4's </a> media queries
                     to account for various devices. If you're on desktop, go ahead and resize the browser window.
                  </p>
                </Col>
              </Row>

              <Row>
                <Col xs="12" sm="3" className="left">CODE</Col>
                <Col xs="12" sm="9"><a href="https://github.com/MichaelGeng/michaelhgeng" target="_blank"><button className="parentButton">View Source Code <i className="fas fa-code hvr-grow-rotate"></i></button></a></Col>
              </Row>
            </Container>
        </div>
    );
  }
}

export default Home;