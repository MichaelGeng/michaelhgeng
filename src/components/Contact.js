import React, { Component } from 'react';
import './Contact.css';


class Contact extends Component {
  render() {
    return (
      <div>
        <p>Please reach out at mikegeng@umich.edu for conversation!</p>
        <a class="contact_btn" href="https://github.com/MichaelGeng"><i class="fab fa-github"></i></a>
        <a class="contact_btn" href="https://www.linkedin.com/in/michael-geng/"><i class="fab fa-linkedin-in"></i></a>
        <a class="contact_btn" href="mailto:mikegeng@umich.edu"><i class="fas fa-envelope"></i></a>
        <a class="contact_btn" href="tel:734-546-5913"><i class="fas fa-phone"></i></a>
        <a class="contact_btn" href="https://www.instagram.com/mikeegeng/"><i class="fab fa-instagram"></i></a>
      </div>
    );
  }
}

export default Contact;