import React, { Component } from 'react'
import './About.css'
import Favicon from 'react-favicon';

class About extends Component {
  render() {
    return (
      <div>
          <Favicon url = "/images/MG.png" />
          <img src = "/images/hike_dogmt.jpg" id = "selfie" alt="me"/>
          <p> I will be graduating in December 2018 with a Bachelors in Science 
              in Computer Science from the University of Michigan. Afterwards I 
              will be a Software Engineer I at Nike in Portland, Oregon.</p>
      </div>
    )
  }
}

export default About;
