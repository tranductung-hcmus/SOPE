import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import panel from "../../../Assests/panel.png";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage: `url(${panel})`,
        backgroundSize: "cover",  // Adjust background image size
        backgroundPosition: "center", // Center background image
      }}
    >
      <div className="absolute bottom-10 w-full flex justify-center">
        <Link to="/products" className="inline-block">
          <div
            className="py-2 px-6 bg-[#e88b1a] text-white text-base font-semibold rounded-full shadow-lg hover:bg-[#e1ae0e] transition duration-300 transform hover:scale-105"
          >
            <span className="font-bold">Shop Now</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
