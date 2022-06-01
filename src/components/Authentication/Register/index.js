import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { submitRegister } from "../../../containers/Authentication/redux/authActions";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const set = (name) => {
    return (e) => {
      setUser({ ...user, [name]: e.target.value });
    };
  };

  const handleSubmit = (e) => {
    const { name, email, password, phone } = user;
    e.preventDefault();
    dispatch(submitRegister({ name, email, password, phone }, navigate));
  };
  return (
    <Form onSubmit={handleSubmit}>
      <div className="form--header">
        <h3>Register to continue</h3>
      </div>
      <div className="form--body">
        <FloatingLabel
          controlId="floatingLabelName"
          label="Name"
          className="mb-3 form--label"
        >
          <Form.Control
            type="text"
            placeholder="Name"
            className="form--input"
            onChange={set("name")}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingEmail"
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
          className="mb-3 form--label"
        >
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={set("password")}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Phone Number"
          className="mb-3 form--label"
        >
          <Form.Control
            type="text"
            placeholder="Phone Number"
            onChange={set("phone")}
          />
        </FloatingLabel>
      </div>
      <div className="form--footer">
        <button className="btn btn-primary">Register</button>
        <span className="form--footer__span">
          or
          <button onClick={() => navigate("/auth")}>Login</button>
        </span>
      </div>
    </Form>
  );
};

export default RegisterForm;
