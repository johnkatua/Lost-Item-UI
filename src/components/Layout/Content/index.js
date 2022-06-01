import React from "react";

import "./content.css";
import Sidebar from "../Sidebar/index";

const Content = ({ children }) => {
  return (
    <div className="content--container">
      <div className="content--container__left">
        <Sidebar />
      </div>
      <div className="content--container__right">{children}</div>
    </div>
  );
};

export default Content;
