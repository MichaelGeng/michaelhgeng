import React, { Component } from 'react';
import Quote from './Quote';

class Home extends Component {
  render() {
    return (
        <div id="home">
            <p><b>This site is currently undergoing reconstruction 11/14/18</b></p>
            <p>This website is currently being reimplented with React.</p>
            <Quote />
        </div>
    );
  }
}

export default Home;