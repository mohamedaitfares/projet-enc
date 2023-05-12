import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
        <footer id="footer">
      <div class="footer-info">
        <h3>About Us</h3>
        <p>We are a company that specializes in creating high-quality products and services for our customers.</p>
      </div>
      <div class="footer-info">
        <h3>Contact Us</h3>
        <ul>
          <li>Email: example@company.com</li>
          <li>Phone: +1 (555) 555-5555</li>
          <li>Address: 123 Main St, Anytown USA</li>
        </ul>
      </div>
      <div class="footer-info">
        <h3>Follow Us</h3>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
    </footer>

  );
}

export default Footer;
