import React from 'react';
import ReactDOM from 'react-dom';
import Typed from './components/Typed';
import Bio from './components/Bio';
import Chart from './components/Chart';
import Quote from './components/Quote';


ReactDOM.render(<Quote />, document.getElementById('quote'));
ReactDOM.render(<Typed />, document.getElementById('typed'));
ReactDOM.render(<Bio />, document.getElementById('my_bio'));
ReactDOM.render(<Chart />, document.getElementById('chart'));
