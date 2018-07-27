import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Typed from './components/Typed';
import Bio from './components/Bio';
import Chart from './components/Chart';
import Quote from './components/Quote';
import Navigation from './components/Navigation';

ReactDOM.render(<Navigation />, document.getElementById('navigation'));
ReactDOM.render(<Quote />, document.getElementById('quote'));
ReactDOM.render(<Typed />, document.getElementById('typed'));
ReactDOM.render(<Bio />, document.getElementById('my_bio'));
ReactDOM.render(<Chart />, document.getElementById('chart'));
