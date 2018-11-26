import React, { Component } from 'react'
import ReactFitText from 'react-fittext'
import {Container, Row, Col } from 'reactstrap';
import './About.css'

class About extends Component {
  render() {
    return (
      <div id="about">
        <img src = "/images/hike_dogmt.jpg" id = "selfie" alt="me"/>
        <Container>
          <Row>
            <Col xs="12" sm="3">About me</Col>
            <Col xs="12" sm="9">
              <ReactFitText minFontSize = {12} maxFontSize={15}>
                <p>In Winter 2018, I will be graduating from the University of Michigan with a B.S. 
                   in Computer Science. Starting February 2019, I will begin my career as a Software Engineer I at Nike in Portland, Oregon.</p>
              </ReactFitText>

              <ReactFitText minFontSize = {12} maxFontSize={15}>
                <p>In Summer 2018, I worked at Nike as an Application Engineer Intern on the Rapid Application Development Team. I 
                  implemnted a Slack Bot in Python to assist with daily stand ups and worked on user interface engineering with React.</p>
              </ReactFitText>

              <ReactFitText minFontSize = {12} maxFontSize={15}>
                <p>In Summer 2017, I worked at General Motors Financial as an IT Special Projects Intern on the international IT Team. I
                  worked with a team of developers and business analysts to create responsive web pages primarily using jQuery.</p>
              </ReactFitText>

              <ReactFitText minFontSize = {12} maxFontSize={15}>
                <p>In Summer 2016, I worked at Advantage Computing Systems as an Systems Analyst Intern on the Client Services Team. I
                  worked with a developers, business analysts, and VP's to aid in large-scale data migration using mySQL. I also worked
                  on automating time-off requests with Python, elminating paper usage and saving time.</p>
              </ReactFitText>
            </Col>
          </Row>

          <Row>
            <Col xs="12" sm="3">Skills</Col>
            <Col xs="12" sm="9">
              <Row>
                <Col xs="12" sm="3">Programming Languages
                  <p>JavaScript <br/>Python<br/>C++<br/>SQL/NoSQL<br/>HTML/CSS</p>
                </Col>
                <Col xs="12" sm="3">Frameworks
                  <p>React<br/>Node<br/>jQuery<br/>Flask</p>
                </Col>
                <Col xs="12" sm="3">Databases
                  <p>SQLite<br/>MySQL<br/>MongoDB<br/>DynamoDB</p>
                </Col>
                <Col xs="12" sm="3">Libraries/Tools
                  <p>Git<br/>Redux<br/>Webpack<br/>Babel<br/>Rest APIs<br/>AWS</p>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col xs="12" sm="3">Resume</Col>
            <Col xs="12" sm="9"><a href="/Michael_Geng_Resume.pdf" target="_blank"><button>View My Resume</button></a></Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default About;
