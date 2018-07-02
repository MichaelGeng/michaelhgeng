import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Typed from './components/Typed';
import Bio from './components/Bio';
import Buttons from './components/Buttons';

ReactDOM.render(<Typed />, document.getElementById('typed'));
ReactDOM.render(<Bio />, document.getElementById('my_bio'));
ReactDOM.render(<Buttons />, document.getElementById('button_menu'))
