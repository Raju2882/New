import "./LocationCards.css";

import {
  FaPlaneDeparture,
  FaIndustry,
  FaMicrochip,
  FaRocket,
  FaCity,
  FaHeartbeat,
} from "react-icons/fa";

const locations = [
  {
    icon: <FaPlaneDeparture />,
    title: "Bangalore Airport",
    subtitle: "20-minute drive away",
  },
  {
    icon: <FaIndustry />,
    title: "KIADB Industrial Area",
    subtitle: "Close proximity to major hub",
  },
  {
    icon: <FaMicrochip />,
    title: "Foxconn & Tech Parks ",
    subtitle: "Asia's Largest Apple Manufacturing Ecosyste",
  },
  {
    icon: <FaRocket />,
    title: "Aerospace Park",
    subtitle: "1,000 acres Hardware Park",
  },
  {
    icon: <FaCity />,
    title: "KWIN City ",
    subtitle: "₹40,000 Crore Project ",
  },
  {
    icon: <FaHeartbeat />,
    title: "Premium Healthcare",
    subtitle: "Near Manipal & Seven Hills Hospital",
  },
];

export default function LocationCards() {
  return (
    <section className="location-cards">

      <div className="container-custom">

        <div className="cards-grid">

          {locations.map((item, index) => (

            <div className="location-card" key={index}>

              <div className="card-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.subtitle}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}