import React from "react";
import "./Main.css";

const Main = ({ imageSrc }) => {
  return (
    <div className="main">
      <img src={imageSrc} alt="Praia" className="main-image" />
      <h1 className="main-title">SARTHE</h1>
      <p className="main-subt">Resort Wear</p>
    </div>
  );
};

export default Main;