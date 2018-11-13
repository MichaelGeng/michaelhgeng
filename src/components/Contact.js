import React, { Component } from 'react';
import './Contact.css';


class Contact extends Component {
  render() {
    return (
        <ul id = "social">
            <li class = "sociali"><a href="https://www.linkedin.com/in/michael-geng/"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
            <li class = "sociali"><a href="mailto:mikegeng@umich.edu"><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
            <li class = "sociali"><a href="https://github.com/MichaelGeng"><i class="fa fa-github" aria-hidden="true"></i></a></li>
            <li class = "sociali"><a href="tel:734-546-5913"><i class="fa fa-phone" aria-hidden="true"></i></a></li>
        </ul>
    );
  }
}

export default Contact;