import "./Amenities.css";
import parkTree from "../../assets/images/park-tree.jpeg"; 
import gateIcon from "../../assets/images/gate.jpeg";
import {
  FaTree,
  FaHome,
  FaSwimmingPool,
  FaChild,
  FaVideo,
  FaBolt,
  FaTint,
  FaRoad,
  FaShieldAlt,
} from "react-icons/fa";

export default function Amenities() {

  const amenities = [
    {
      icon: <FaTree />,
      title: "Landscaped Gardens"
    },
    {
  icon: (
    <img
      src={gateIcon}
      alt="Gated Community"
      className="custom-card-icon"
    />
  ),
  title: "Gated Community",
  desc: "Secure gated community with 24×7 security and controlled access."
},
    {
    icon: (
      <img
        src={parkTree}
        alt="Park And Tree"
        className="custom-card-icon"
      />
    ),
    title: "Park And Tree"
  },
    {
      icon: <FaChild />,
      title: "Children's Play Area"
    },
    {
      icon: <FaVideo />,
      title: "24×7 CCTV"
    },
    {
      icon: <FaBolt />,
      title: "Electricity Supply"
    },
    {
      icon: <FaTint />,
      title: "Water Supply"
    },
    {
      icon: <FaRoad />,
      title: "Internal Roads"
    }
  ];

  return (

    <section
      className="amenities"
      id="amenities"
    >

      <div className="container-custom">

        {/* Heading */}

        <div className="amenities-heading">

          <span className="section-tag">
            PREMIUM LIFESTYLE
          </span>

          <h2>
            Modern Amenities
          </h2>

          <div className="heading-line"></div>

          <p>
            Experience a thoughtfully designed lifestyle
            with premium amenities that offer comfort,
            convenience and a vibrant community living
            experience.
          </p>

        </div>

        {/* Amenities Grid */}

        <div className="amenities-grid">

          {amenities.map((item, index) => (

            <div
              className="amenity-card"
              key={index}
            >

              <div className="amenity-icon">

                {item.icon}

              </div>

              <h3>

                {item.title}

              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}