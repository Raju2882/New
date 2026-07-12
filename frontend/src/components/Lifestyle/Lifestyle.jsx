import "./Lifestyle.css";

import yoga from "../../assets/images/yoga.jpeg";
import family from "../../assets/images/family.jpeg";
import friends from "../../assets/images/friends.jpeg";

import { FaCheckCircle } from "react-icons/fa";

export default function Lifestyle() {

    const features = [
        "Peaceful Surroundings",
        "Like-minded Neighbours",
        "Secure Environment",
        "Cultural Events"
    ];

    return (

        <section className="lifestyle" id="lifestyle">

            <div className="container-custom">

                <div className="lifestyle-wrapper">

                    {/* ===========================
                        Images
                    =========================== */}

                    <div className="lifestyle-images">

                        <div className="left-image">

                            <img
                                src={yoga}
                                alt="Yoga"
                            />

                        </div>

                        <div className="right-images">

                            <div className="top-image">

                                <img
                                    src={family}
                                    alt="Family"
                                />

                            </div>

                            <div className="bottom-image">

                                <img
                                    src={friends}
                                    alt="Friends"
                                />

                            </div>

                        </div>

                    </div>

                    {/* ===========================
                        Content
                    =========================== */}

                    <div className="lifestyle-content">

                        <span className="section-tag">
                            PREMIUM LIFESTYLE
                        </span>

                        <h2>
                            Community &
                            <br />
                            Lifestyle
                        </h2>

                        <div className="heading-line"></div>

                        <p>

                            Experience a vibrant community where
                            families thrive together. Thoughtfully
                            planned spaces, landscaped gardens and
                            modern amenities create the perfect
                            environment for a peaceful and fulfilling
                            lifestyle.

                        </p>

                        <div className="feature-grid">

                            {features.map((item, index) => (

                                <div
                                    className="feature-card"
                                    key={index}
                                >

                                    <FaCheckCircle className="feature-icon" />

                                    <span>

                                        {item}

                                    </span>

                                </div>

                            ))}

                        </div>

                        <div className="quote">

                            <p>

                                Ashraya Aarika - The Art of Plots

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}