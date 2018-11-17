import React, { Component } from 'react';
import './Contact.css';


class Contact extends Component {
  render() {
    return (
      <div class="middle">
        <a class="contact_btn" href="#"><i class="fab fa-facebook-f"></i></a>
        <a class="contact_btn" href="#"><i class="fab fa-twitter"></i></a>
        <a class="contact_btn" href="#"><i class="fab fa-google"></i></a>
        <a class="contact_btn" href="#"><i class="fab fa-instagram"></i></a>
        <a class="contact_btn" href="#"><i class="fab fa-youtube"></i></a>
      </div>
    );
  }
}

export default Contact;