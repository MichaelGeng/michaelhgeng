import React, { Component } from 'react'
import './Bio.css'
const photo = require('../images/hike_dogmt.jpg')

class Bio extends Component {
  render() {
    return (
      <div>
          <img src = {photo} id = "selfie" alt="me"/>
          <p class="about_para"> I'm a rising Senior in Computer Science at the University of Michigan. Currently seeking fulltime positions begininning in 2019 after my graduation.</p>

          <p class="about_para">I have experience with fullstack software development with an emphasis on frontend development.</p>
          <p class="about_para">Since my first programming course, I have developed and continue to improve my foundation in data structures and algorithms. My passion lies in finding opportunities to apply skills I have learned to create, implement, and solve complex computer science problems that businesses face today.</p>
          <p class="about_para">I continuously seek opportunities to learn and enhance my skills both technically and interpersonally to contribute value in my profession.</p>
          <p class="about_para"> Outside of programming I enjoy working out, traveling, gaming, browsing yelp for new food spots, and visiting national parks</p>
      </div>
    )
  }
}

export default Bio;
