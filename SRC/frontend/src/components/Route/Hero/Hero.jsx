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
        backgroundSize: "cover",  // Điều chỉnh kích thước ảnh nền
        backgroundPosition: "center", // Căn giữa ảnh nền
      }}
    >
      <div
        className={`${styles.section} w-[90%] 800px:w-[60%] flex justify-center items-center`}
        style={{ paddingBottom: "50px" }} // Thêm paddingBottom để hạ vị trí
      >
        <Link to="/products" className="inline-block">
          <div
            className="mt-5 py-5 px-8 bg-[#ff5722] text-white text-lg font-semibold rounded-full shadow-lg hover:bg-[#e64a19] transition duration-300 transform hover:scale-105"
          >
            <span>Shop Now</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
