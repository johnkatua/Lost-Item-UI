import React from 'react';

import "./index.css";

const SidebarButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="sidebar--btn">
      {children}
    </button>
  )
}

export default SidebarButton;