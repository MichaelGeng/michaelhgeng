import React, { Component } from 'react'
import {Container, Row, Col } from 'reactstrap';
import './About.css'

class About extends Component {
  render() {
    return (
      <div id="about">
        <img src = "/images/hike_dogmt.jpg" id = "selfie" alt="me"/>

        <Container id="react_strap">
          <Row>
            <Col xs="12" sm="3" className="left">ABOUT ME</Col>
            <Col xs="12" sm="9">
              <p> In Summer 2020, I began my journey as a Software Engineer II at Microsoft in the Greater Seattle Area. I work Full-Stack for several web pages in Windows utilizing primarly C#, React, and Azure.</p>
              <p> In Spring 2019, I began my career as a Software Engineer at Nike in Portland, Oregon. I am a Backend Engineer on the Nike App @ Retail team developing Java and Node micro-services
                deployed on AWS solutions. I develop new features with test driven development and contribute ideas towards our REST micro-services.
              </p>

              <p>In Winter 2018, I graduated from the University of Michigan with a B.S.
                  in Computer Science. My coursework heavily revolved around Data Structures, Algorithms, Software Engineering, and Web Development.</p>

              <p>In Summer 2018, I worked at <a href="https://jobs.nike.com/digital">Nike</a> as an Application Engineer Intern on the Rapid Application Development Team. I
                  implemented a Slack Bot in Python to aid with daily stand-ups and worked on user interface engineering with React.</p>

              <p>In Summer 2017, I worked at <a href="https://www.gmfinancial.com/">General Motors Financial</a> as an IT Special Projects Intern on the international IT Team. I
                worked with a team of developers and business analysts to create responsive web pages primarily using jQuery.</p>

              <p>In Summer 2016, I worked at <a href="https://www.advantagecs.com/">Advantage Computing Systems</a> as a Systems Analyst Intern on the Client Services Team. I
                worked with developers, business analysts, and VP's to aid in large-scale data migration using MySQL. I also worked
                on automating time-off requests with Python, eliminating paper usage and saving time.</p>
            </Col>
          </Row>

          <Row>
            <Col xs="12" sm="3" className="left">EDUCATION</Col>
            <Col xs="12" sm="9">
              <p>I graduated Winter 2018 from the University of Michigan with a B.S. in Computer Science. I participated in various
                Computer Science extracurriculars such as <a href="https://web.eecs.umich.edu/~cseschol/">Code-M</a>,
                <a href="http://michiganhackers.org/"> Michigan Hackers</a>, and <a href="https://mhacks.org/subscribe">MHacks</a> to further
                develop my interest outside of classwork.
              </p>
            </Col>
          </Row>

          <Row>
            <Col xs="12" sm="3" className="left">SKILLS</Col>
            <Col xs="12" sm="9">
              <Row>
                <Col xs="12" sm="3"><div className="skill_section"><i className="fas fa-laptop-code skill_icon"></i>Backend</div>
                  <p>Java<br/>Node<br/>Python<br/></p>
                </Col>
                <Col xs="12" sm="3"><div className="skill_section"><i class="fas fa-server"></i>Frontend</div>
                  <p>React<br/>Angular<br/>jQuery<br/>HTML/CSS</p>
                </Col>
                <Col xs="12" sm="3"><div className="skill_section"><i class="fas fa-database"></i>Databases</div>
                  <p>SQLite<br/>MySQL<br/>MongoDB<br/>DynamoDB</p>
                </Col>
                <Col xs="12" sm="3"><div className="skill_section"><i class="fas fa-cogs"></i>Testing</div>
                  <p>JUnit<br/>Mocha<br/>Cucumber<br/>Mockito</p>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col xs="12" sm="3" className="left">RESUME</Col>
            <Col xs="12" sm="9"><a href="/Michael_Geng_Resume.pdf" target="_blank"><button className="parentButton">View Resume <i className="fas fa-file hvr-grow-rotate"></i></button></a></Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default About;
