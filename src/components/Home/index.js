import React from "react";

import welcome from "../../../public/assets/item-2.jpg"
import "./index.css"

const HomePage = () => {
  return ( 
    <div className="home--container">
      <div className="home--img__container">
        <img src={welcome} alt="welcome" className="home--img" />
      </div>
      <div className="home--details">Welcome</div>
    </div>
  );
};

export default HomePage;
