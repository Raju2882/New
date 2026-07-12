import "./Connectivity.css";
import cityImage from "../../assets/images/city.jpg";

import {
  FaRoad,
  FaCarSide,
  FaSchool,
  FaShoppingBag,
  FaArrowUp
} from "react-icons/fa";

export default function Connectivity() {

  const cards = [
    {
      icon: <FaRoad />,
      title: "Strategic Access",
      desc: "Close to 4-Lane State Highway (SH-09), ensuring rapid transit."
    },
    {
      icon: <FaCarSide />,
      title: "Seamless Travel",
      desc: "Well-developed roads providing smooth connectivity to the city center."
    },
    {
      icon: <FaSchool />,
      title: "Education Hubs",
      desc: "Surrounded by prestigious schools and educational institutions."
    },
    {
      icon: <FaShoppingBag />,
      title: "Lifestyle Centers",
      desc: "Short drive to major malls, shopping destinations and entertainment."
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

            <span className="section-tag">
              PREMIUM CONNECTIVITY
            </span>

            <h2>
              Unmatched
              <br />
              Connectivity
            </h2>

            <div className="connectivity-line"></div>

            <p>
              Our project offers exceptional connectivity to every
              important destination in Bengaluru. With excellent
              road infrastructure, educational institutions,
              business hubs, shopping centres and healthcare
              facilities nearby, residents enjoy convenience
              without compromising lifestyle.
            </p>

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