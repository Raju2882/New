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
          Premium Residential Layouts in Karnataka
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

    </footer>

  );

}