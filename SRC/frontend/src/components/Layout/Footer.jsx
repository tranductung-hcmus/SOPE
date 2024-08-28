import React from "react";
import logo from '../../Assests/logo.png';

const Footer = () => {
  return (
    <div className="bg-black text-white py-10 flex flex-col items-center">
      <img
        src={logo}
        alt="Logo"
        className="w-[150px] h-auto"
      />
      <p className="mt-4 text-sm text-white">A product from SHINRA TENSEI</p>
    </div>
  );
};

export default Footer;
