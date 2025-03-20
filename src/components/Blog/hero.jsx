import "./blog.css";
import { Link } from "react-router-dom";
import { FaChevronCircleDown } from "react-icons/fa";

const hero = () => {
  const scroll = () => {
    document.getElementById("activity")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div>
        <img className="home" src="/assets/hero-bg.jpg" alt="" />
        <p className="hero-txt">
          Immerse yourself in nature&apos;s beauty at our serene campsites.
          <br />
          Explore, relax, and create memories that last a lifetime.
          <br />
          Find your perfect camping spot under the stars. <br />
          <br />
          <Link to="/" className="hero-btn">
            Book Now!
          </Link>
        </p>
        <FaChevronCircleDown className="large-icon" onClick={scroll} />
      </div>
    </>
  );
};

export default hero;
