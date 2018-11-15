import React, { Component } from 'react'
import './About.css'

class About extends Component {
  render() {
    return (
      <div>
          <img src = "/images/hike_dogmt.jpg" id = "selfie" alt="me"/>
          <p> I will be graduating in December 2018 with a Bachelors in Science 
              in Computer Science from the University of Michigan. Afterwards I 
              will be a Software Engineer I at Nike in Portland, Oregon.</p>

          <p>I'm highly interested in Web Development and have experience in both
             Front-End and Back-End Development primarily in JavaScript and Python.
          </p>
          <p>Other interests include hiking, fitness, and being a yelper!</p>
      </div>
    )
  }
}

export default About;
