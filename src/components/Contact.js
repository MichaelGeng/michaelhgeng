import React, { Component } from 'react';
import './Contact.css';


class Contact extends Component {
  render() {
    return (
      <div id="contact_section">
        <a className="contact_btn" href="https://www.linkedin.com/in/michael-geng/"><i className="fab fa-linkedin-in"></i></a>
        <a className="contact_btn" href="mailto:mikegeng@umich.edu"><i className="fas fa-envelope"></i></a>
        <a className="contact_btn" href="tel:734-546-5913"><i className="fas fa-phone"></i></a>
      </div>
    );
  }
}

export default Contact;