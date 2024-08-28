import React from "react";
import styles from "../../styles/styles";
import sonyLogo from '../../Assests/Sony_logo.svg';
import samsungLogo from '../../Assests/Samsung_Logo.jpg';
import appleLogo from '../../Assests/Apple_Logo.png';
import thienlongLogo from '../../Assests/ThienLong_Logo.png';
import xiaomiLogo from '../../Assests/Xiaomi_logo.svg';

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-around items-center w-full">
        <div className="flex items-center justify-center">
          <img
            src={sonyLogo}
            alt="Sony Logo"
            style={{width:"120px", objectFit:"contain"}}
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src={samsungLogo}
            style={{width:"120px", objectFit:"contain"}}
            alt="Samsung Logo"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src={appleLogo}
            style={{width:"120px", objectFit:"contain"}}
            alt="Apple Logo"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src={thienlongLogo}
            style={{width:"120px", objectFit:"contain"}}
            alt="Thien Long Logo"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src={xiaomiLogo}
            style={{width:"120px", objectFit:"contain"}}
            alt="Xiaomi Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
