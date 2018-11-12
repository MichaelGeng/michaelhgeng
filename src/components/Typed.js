import React, { Component } from 'react';
import './Typed.css';
import Typist from 'react-typist'


class Typed extends Component {
  render() {
    return (
      <Typist>
        <span>Hi, I'm Michael Geng.</span>
        <Typist.Backspace count={21} delay={200} />
        <span>Software Engineer at Nike interested in Web</span>
        <Typist.Backspace count={43} delay={200} />
        <span>JavaScript and Python are my favorite tools</span>
        <Typist.Backspace count={43} delay={200} />
        <span>Thanks for stopping by!</span>
      </Typist>
    );
  }
}

export default Typed;