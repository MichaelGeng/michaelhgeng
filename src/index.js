import React from 'react';
import ReactDOM from 'react-dom';
import Typed from './components/Typed';
import Bio from './components/Bio';
import Chart from './components/Chart';
import Quote from './components/Quote';
import Body from './components/Body';

ReactDOM.render(<Quote />, document.getElementById('quote'));
ReactDOM.render(<Typed />, document.getElementById('typed'));
ReactDOM.render(<Bio />, document.getElementById('my_bio'));
ReactDOM.render(<Chart />, document.getElementById('chart'));
ReactDOM.render(<Body />, document.getElementById('body'))