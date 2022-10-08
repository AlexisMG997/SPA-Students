import React from "react";
import "./loading.scss";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center mt-[30%] spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
