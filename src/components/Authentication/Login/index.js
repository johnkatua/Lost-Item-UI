import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { submitLogin } from "../../../containers/Authentication/redux/authActions";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const set = (name) => {
    return (e) => {
      setUser({ ...user, [name]: e.target.value });
    };
  };

  const handleSubmit = (e) => {
    const { email, password } = user;
    e.preventDefault();
    dispatch(submitLogin({ email, password }, navigate));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="form--header">
        <h3>Login to continue</h3>
      </div>
      <div className="form--body">
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3 form--label"
        >
          <Form.Control
            type="email"
            placeholder="Email"
            className="form--input"
            onChange={set("email")}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          className="form--label"
        >
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={set("password")}
          />
        </FloatingLabel>
      </div>
      <div className="form--footer">
        <button className="btn btn-primary">Login</button>
        <span className="form--footer__span">
          or
          <button onClick={() => navigate("register")}>Sign up</button>
        </span>
      </div>
    </Form>
  );
};

export default LoginForm;
