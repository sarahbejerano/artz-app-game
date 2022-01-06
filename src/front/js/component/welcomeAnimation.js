import React from "react";
import "../../styles/welcomeAnimation.scss";

const WelcomeAnimation = ({ className }) => {
  return <div className={`welcome-animation ${className || ''}`}></div>;
};

export default WelcomeAnimation;
