import React from "react";
import './PreLoader.css';
import { FaSpinner } from "react-icons/fa";


const PreLoader = ({ texto }) => {
  return (
    <div className="loader-box">
      <div className="loader">
        <FaSpinner className="Loader-bar" size={30} color="white" />
        <p className="loader-text">{texto}</p>
      </div>
    </div>
  );
};

export default PreLoader;
