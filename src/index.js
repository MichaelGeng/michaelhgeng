import React from 'react';
import ReactDOM from 'react-dom';
import Typed from './components/Typed';
import Quote from './components/Quote';
import Body from './components/Body';

ReactDOM.render(<Quote />, document.getElementById('quote'));
ReactDOM.render(<Typed />, document.getElementById('typed'));
ReactDOM.render(<Body />, document.getElementById('body'))