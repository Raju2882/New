import "./Contact.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaEnvelope,
  FaPaperPlane
} from "react-icons/fa";

export default function Contact() {

  return (

    <section className="contact" id="contact">

      <div className="container-custom">

        <div className="contact-wrapper">

          {/* ==========================
              Left Side
          ========================== */}

          <div className="contact-left">

            <span className="section-tag">
              GET IN TOUCH
            </span>

            <h2>Contact Us</h2>

            <div className="heading-line"></div>

            <p>
              We'd love to hear from you. Contact us for project
              details, pricing, site visits, or any other enquiries.
            </p>

            {/* Address */}

            <div className="contact-card">

              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <div>

                <h4>Visit Us</h4>

                <p>
                 12, M P M Empyloyees Layout, Kengunte,<br/> Annapurneshwari NagarM<br/> Bengaluru, Karnataka 560056
                </p>

              </div>

            </div>

            {/* Phone */}

            <div className="contact-card">

              <div className="contact-icon">
                <FaPhoneAlt />
              </div>

              <div>

                <h4>Call Us</h4>

                <p>+91 75410 14101</p>

              </div>

            </div>

            {/* Office */}

            <div className="contact-card">

              <div className="contact-icon">
                <FaClock />
              </div>

              <div>

                <h4>Office Hours</h4>

                <p>

                  Monday - Saturday
                  <br />

                  10:00 AM – 6:30 PM

                </p>

              </div>

            </div>

            {/* Email */}

            <div className="contact-card">

              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div>

                <h4>Email</h4>

                <p>

                  info@ashrayaestates.com

                </p>

              </div>

            </div>

          </div>

          {/* ==========================
              Right Side
          ========================== */}

          <div className="contact-right">

            <form>

              <h3>

                Send Message

              </h3>

              <div className="form-row">

                <div className="form-group">

                  <label>Name</label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                  />

                </div>

                <div className="form-group">

                  <label>Phone Number</label>

                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                  />

                </div>

              </div>

              <div className="form-group">

                <label>Email Address</label>

                <input
                  type="email"
                  placeholder="example@email.com"
                />

              </div>

              <div className="form-group">

                <label>Message</label>

                <textarea
                  rows="5"
                  placeholder="Tell us about your enquiry..."
                ></textarea>

              </div>

              <div className="checkbox">

                <input
                  type="checkbox"
                  id="agree"
                />

                <label htmlFor="agree">

                  I agree to the Terms & Conditions

                </label>

              </div>

              <button
                type="submit"
                className="submit-btn"
              >

                Submit Enquiry

                <FaPaperPlane />

              </button>

            </form>

          </div>

        </div>

        {/* ==========================
            Google Map
        ========================== */}

        <div className="contact-map">

          <iframe
            title="Ashraya Location"
            src="https://www.google.com/maps?q=Haliyal,Karnataka&output=embed"
            loading="lazy"
            allowFullScreen
          ></iframe>

        </div>

      </div>

    </section>

  );

}