import React from "react";

import "./layout.css";
import Topbar from "./Topbar";
import Content from "./Content";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout--container">
      <Topbar />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};

export default Layout;
