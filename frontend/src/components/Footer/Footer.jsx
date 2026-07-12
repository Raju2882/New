import "./Footer.css";

import logo from "../../assets/images/logo.png";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp
} from "react-icons/fa";

export default function Footer() {

  return (

    <footer className="footer">

      <div className="container-custom">

        <img
          src={logo}
          alt="Ashraya Estates"
          className="footer-logo"
        />

        <h3>Ashraya Estates</h3>

        <p>
          Premium Residential Layouts in Bangalore
        </p>

        <div className="footer-social">

          <a href="#">
            <FaFacebookF />
          </a>

          <a href="#">
            <FaInstagram />
          </a>

          <a href="#">
            <FaLinkedinIn />
          </a>

          <a href="#">
            <FaWhatsapp />
          </a>

        </div>

        <div className="footer-line"></div>

        <p className="copyright">
          © 2026 Ashraya Estates. All Rights Reserved.
        </p>

      </div>
      <div className="footer-action-bar">

        <a href="tel:+919876543210" className="action-btn call-btn">
          <i className="fa-solid fa-phone"></i>
          <span>Call</span>
        </a>

        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noreferrer"
          className="action-btn whatsapp-btn"
        >
          <i className="fa-brands fa-whatsapp"></i>
          <span>WhatsApp</span>
        </a>

        <button className="action-btn enquire-btn">
          <i className="fa-regular fa-pen-to-square"></i>
          <span>Enquire</span>
        </button>

      </div>
    </footer>

  );

}