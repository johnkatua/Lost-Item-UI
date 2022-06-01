import React from "react";

import "./auth.css";
import lost from "../../../public/assets/lost-items.png";
import ErrorNotification from "../../containers/Error";

const AuthPage = ({ children }) => {
  return (
    <div className="auth--container">
      <div className="auth--container__title">
        <h1>Authentication</h1>
      </div>
      <div className="auth--container__body">
        <div className="error--container">
          <ErrorNotification />
        </div>
        <div className="auth--container__details">
          <div className="auth--image">
            <img src={lost} alt="lost-items" />
          </div>
          <div className="auth--forms">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
