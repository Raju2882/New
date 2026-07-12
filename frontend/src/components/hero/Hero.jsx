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
                        Premium Residential Layout
                    </span>

                    <h1 className="hero-title">
                        Live the <br />
                        Future <span>Today</span>
                    </h1>

                    <p className="hero-description">
                        Experience a premium lifestyle surrounded by nature,
                        world-class amenities, and excellent connectivity.
                    </p>

                    <div className="hero-buttons">

                        <a href="#contact" className="btn-primary">
                            Call Now
                        </a>

                        <a href="#about" className="btn-secondary">
                            Explore Project
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