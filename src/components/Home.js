import React, { Component } from 'react';
import Quote from './Quote';

class Home extends Component {
  render() {
    return (
        <div id="home">
            <p><b>This site is currently undergoing reconstruction 11/12/18</b></p>
            <Quote />
        </div>
    );
  }
}

export default Home;