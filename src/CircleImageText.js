import React from 'react';
import './CircleImageText.css';

function CircleImageText({ imageSrc, imageAlt, text, position = 'left' }) {
  return (
    <div className={`header-container ${position}`}>
      <div className="image-container">
        <img src={imageSrc} alt={imageAlt} className="circle-image" />
      </div>
      <div className="header-text">
        {text}
      </div>
    </div>
  );
}

export default CircleImageText;