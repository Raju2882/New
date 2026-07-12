import "./Hero.css";
import heroImage from "../../assets/images/hero.png";


import { FaArrowDown, FaWhatsapp } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="hero" id="home">

            {/* Background */}
            <div className="hero-bg">
                <img src={heroImage} alt="Premium Residential Project" />
            </div>

            {/* Overlay */}
            <div className="hero-overlay"></div>

            {/* Content */}
            <div className="container-custom">

                <div className="hero-content">

                    <span className="hero-badge">
                        Welcome to Ashraya Aarika
                    </span>

                    <h1 className="hero-title">
                        Premium Plots <br />
                        <span> In Doddaballapur </span>
                    </h1>

                    <p className="hero-description">
        
                        BMRDA Approved | Gated Community | High Growth Location Invest Today in North Bangalore’s Fastest Growing Corridor
                    </p>

                    <div className="hero-buttons">

                        <a href="#contact" className="btn-primary">
                            Book site visit
                        </a>

                        <a href="#about" className="btn-secondary">
                            Download Brocure
                        </a>

                    </div>

                </div>

            </div>

            {/* Scroll Indicator */}
            <a href="./components/Contact/Contact'" className="scroll-down">
                <FaArrowDown />
            </a>
            {/* Floating Right Side */}






        </section>
    );
}