import React, { Component } from 'react'
import './Bio.css'
import Favicon from 'react-favicon';
import ReactRevealText from 'react-reveal-text';
const photo = require('../images/hike_dogmt.jpg')
const favicon = require('../images/MG.png')

class Bio extends Component {
  render() {
    return (
      <div>
          <Favicon url = {favicon} />
          <img src = {photo} id = "selfie" alt="me"/>
          <p> Rising Senior in Computer Science at the University of Michigan. Currently seeking Full Time positions for 2019.</p>
      </div>
    )
  }
}

export default Bio;
