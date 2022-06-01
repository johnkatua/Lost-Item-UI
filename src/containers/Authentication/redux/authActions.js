import axios from "axios";

import { AUTH_USER, SUBMITTING_REQUEST, LOGOUT_USER } from "./authConstants";
import { validateLogin, validateRegister } from "../../../helpers/validations";
import { setError } from "../../Error/redux/errorActions";

export const submittingRequest = (isLoading) => ({
  type: SUBMITTING_REQUEST,
  isLoading,
});

export const authUser = (user) => ({
  type: AUTH_USER,
  user,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const submitLogin = (user, navigate) => {
  return async (dispatch) => {
    try {
      dispatch(submittingRequest(true));
      await validateLogin(user);
      const response = await axios.post(
        "http://localhost:5000/auth/login",
        user
      );
      if (response) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.userDetails));
        dispatch(authUser(response.data.userDetails));
        dispatch(submittingRequest(false));
        navigate("/");
      }
    } catch (error) {
      dispatch(
        setError(error.response ? error.response.data.message : error.message)
      );
      dispatch(submittingRequest(false));
    }
  };
};

export const submitRegister = (user, navigate) => {
  return async (dispatch) => {
    try {
      dispatch(submittingRequest(true));
      await validateRegister(user);
      const response = await axios.post(
        "http://localhost:5000/auth/register",
        user
      );
      if (response) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.userDetails));
        dispatch(authUser(response.data.userDetails));
        dispatch(submittingRequest(false));
        navigate("/");
      }
    } catch (error) {
      dispatch(
        setError(error.response ? error.response.data.message : error.message)
      );
      dispatch(submittingRequest(false));
    }
  };
};

export const removeUser = () => {
  return async (dispatch) => {
    localStorage.removeItem("user");
    dispatch(authUser(null));
  }
};
