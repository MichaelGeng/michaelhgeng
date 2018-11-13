import React, { Component } from 'react';
import './Typed.css';
import Typist from 'react-typist'


class Typed extends Component {
  render() {
    return (
      <Typist>
        <span>Hi, I'm Michael.</span>
        <Typist.Backspace count={21} delay={200} />
        <span>Thanks for visiting!</span>
        <Typist.Backspace count={20} delay={300} />
      </Typist>
    );
  }
}

export default Typed;