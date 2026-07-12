import "./FloatingButtons.css";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {

    const [show, setShow] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY > window.innerHeight - 100) {
                setShow(true);
            } else {
                setShow(false);
            }

        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (

        <div className={`floating-contact ${show ? "show" : ""}`}>

            <button className="floating-enquiry">

                <span>ENQUIRE NOW</span>

            </button>

            <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="floating-whatsapp"
            >

                <FaWhatsapp />

            </a>

        </div>

    );

}