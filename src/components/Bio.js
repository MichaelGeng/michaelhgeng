import React, { Component } from 'react'
import './Bio.css'
import Favicon from 'react-favicon';
const photo = require('../images/hike_dogmt.jpg')
const favicon = require('../images/MG.png')

class Bio extends Component {
  render() {
    return (
      <div>
          <Favicon url = {favicon} />
          <img src = {photo} id = "selfie" alt="me"/>
          <p> I will be graduating in December 2018 with a Bachelors in Science 
              in Computer Science from the University of Michigan. Afterwards I 
              will be a Software Engineer I at Nike in Portland, Oregon.</p>
      </div>
    )
  }
}

export default Bio;
