import React, { Component } from 'react';
import './Typed.css';
import Typist from 'react-typist'


class Typed extends Component {
  render() {
    return (
      <Typist>
        <span>Hi, I'm Michael.</span>
        <Typist.Backspace count={16} delay={200} />
        <span>A rising Senior studying Computer Science at the University of Michigan.</span>
        <Typist.Backspace count={72} delay={200} />
        <span>Looking for positions particularly in Front-End Development or Full-Stack.</span>
        <Typist.Backspace count={75} delay={200} />
        <span>Thanks for stopping by!</span>
      </Typist>
    );
  }
}

export default Typed;