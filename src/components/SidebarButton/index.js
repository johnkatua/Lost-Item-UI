import React from 'react';

import "./index.css";

const SidebarButton = ({ children, onClick, mobile }) => {
  return (
    <button onClick={onClick} className={mobile ? "sidebar--btn" : "sidebar--btn__mobile"}>
      {children}
    </button>
  )
}

export default SidebarButton;