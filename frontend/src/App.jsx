
import Hero from './components/hero/Hero'
import Navabar from './components/Navbar/Navbar'
import PrimeLocation from "./components/PrimeLocation/PrimeLocation";
import LocationCards from "./components/LocationCards/LocationCards";
import Connectivity from './components/Connectivity/Connectivity';
import Amenities from './components/Amenities/Amenities';
import Lifestyle from './components/Lifestyle/Lifestyle';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { useEffect } from "react";
import FloatingButtons from "./components/FloatingButtons/FloatingButtons";

function App() {
const handleScroll = () => {

    const floating = document.getElementById("floatingContact");

    console.log(floating);

    if (!floating) return;

    console.log(window.scrollY);

    if (window.scrollY > 300) {

        console.log("SHOW");

        floating.classList.add("show");

    } else {

        console.log("HIDE");

        floating.classList.remove("show");

    }

};

  return (
    <>
      <Navabar />
      <Hero />
      <FloatingButtons />
      <PrimeLocation />

      <LocationCards />
      <Connectivity/>
      <Amenities/>
      <Lifestyle/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
