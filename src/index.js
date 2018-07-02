import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Typed from './components/Typed';
import Bio from './components/Bio';

ReactDOM.render(<Typed />, document.getElementById('typed'));
ReactDOM.render(<Bio />, document.getElementById('my_bio'));
