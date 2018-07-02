import React, { Component } from 'react';
import './App.css';
import Typist from 'react-typist'


class App extends Component {
  render() {
    return (
      <Typist>
        <span> Hi, I'm Michael Geng</span>
        <Typist.Backspace count={25} delay={200} />
        <span> I'm a rising Senior at the University of Michigan</span>
        <Typist.Backspace count={20} delay={200} />
        <span> I'm looking for positions in all areas of the stack in web development</span>
        <Typist.Backspace count={20} delay={200} />
        <span> I hope you find something you like!</span>
      </Typist>
    );
  }
}

export default App;