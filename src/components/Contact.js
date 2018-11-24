import React, { Component } from 'react';
import './Contact.css';


class Contact extends Component {
  render() {
    return (
      <div>
        <p>Please reach out at mikegeng@umich.edu for conversation!</p>
        <a className="contact_btn" href="https://github.com/MichaelGeng"><i className="fab fa-github"></i></a>
        <a className="contact_btn" href="https://www.linkedin.com/in/michael-geng/"><i className="fab fa-linkedin-in"></i></a>
        <a className="contact_btn" href="mailto:mikegeng@umich.edu"><i className="fas fa-envelope"></i></a>
        <a className="contact_btn" href="tel:734-546-5913"><i className="fas fa-phone"></i></a>
        <a className="contact_btn" href="https://www.instagram.com/mikeegeng/"><i className="fab fa-instagram"></i></a>
      </div>
    );
  }
}

export default Contact;