import "./Connectivity.css";
import cityImage from "../../assets/images/city.jpg";

 import {
  FaCheckCircle,
  FaShieldAlt,
  FaRoad,
  FaFileContract,
  FaArrowUp
} from "react-icons/fa";

export default function Connectivity() {

 
const cards = [
  {
    icon: <FaCheckCircle />,
    title: "BMRDA Approved",
    desc: "Fully approved plots with clear documentation."
  },
  {
    icon: <FaShieldAlt />,
    title: "Gated Community",
    desc: "Secure environment with modern amenities."
  },
  {
    icon: <FaRoad />,
    title: "Individual A Khata",
    desc: "Every plot comes with an Individual A Khata"  },
  {
    icon: <FaFileContract />,
    title: "Clear Titles",
    desc: "Transparent documentation process."
  }
];

  return (

    <section className="connectivity" id="connectivity">

      <div className="container-custom">

        <div className="connectivity-wrapper">

          {/* ===========================
              Left Content
          =========================== */}

          <div className="connectivity-left">

          

            <h2>
              Project 
              Highlights
            </h2>

            <div className="connectivity-line"></div>

            <p>
             Experience a thoughtfully planned community where premium infrastructure, legal transparency, modern amenities, and excellent connectivity come together to create the perfect destination for comfortable living and long-term investment.</p>

            <div className="connectivity-grid">

              {cards.map((item, index) => (

                <div
                  className="connect-card"
                  key={index}
                >

                  <span className="card-arrow">

                    <FaArrowUp />

                  </span>

                  <div className="connect-icon">

                    {item.icon}

                  </div>

                  <h3>

                    {item.title}

                  </h3>

                  <p>

                    {item.desc}

                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* ===========================
              Right Image
          =========================== */}

          <div className="connectivity-right">

            <div className="image-wrapper">

              <img
                src={cityImage}
                alt="Premium Connectivity"
              />

              <div className="image-overlay"></div>

              <div className="quote-box">

                <span className="quote-icon">
                  "
                </span>

                <p>

                  Connectivity is the key to growth.

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}