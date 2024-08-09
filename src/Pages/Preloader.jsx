import React from 'react';
import './Preloader.css'; // Add this CSS file for styling

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="text-animation">
        <span>L</span>
        <span>o</span>
        <span>a</span>
        <span>d</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
      </div>
    </div>
  );
};

export default Preloader;
