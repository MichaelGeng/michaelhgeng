import React, { Component } from 'react';
import './Typed.css';
import Typist from 'react-typist'


class Typed extends Component {
  render() {
    return (
      <Typist>
        <Typist.Delay ms={4100} />
        <span>Incoming Software Engineer at Nike</span>
        <Typist.Backspace count={34} delay={200} />
        <span>Interested in Web Development</span>
        <Typist.Backspace count={29} delay={200} />
        <span>Thanks for stopping by!</span>
      </Typist>
    );
  }
}

export default Typed;