import axios from "axios";
import { Cookies } from "react-cookie";

import { AUTH_USER, SUBMITTING_REQUEST, LOGOUT_USER } from "./authConstants";
import { validateLogin, validateRegister } from "../../../helpers/validations";
import { setError } from "../../Error/redux/errorActions";

const cookies = new Cookies();

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
        "https://powerful-tundra-02406.herokuapp.com/auth/login",
        user
      );
      if (response) {
        cookies.set("token", response.data.token, { path: "/" });
        cookies.set("user", JSON.stringify(response.data.userDetails), { path: "/"});
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
        "https://powerful-tundra-02406.herokuapp.com/auth/register",
        user
      );
      if (response) {
        cookies.set("token", response.data.token, { path: "/" });
        cookies.set("user", JSON.stringify(response.data.userDetails), { path: "/"});
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
    // localStorage.removeItem("user");
    cookies.remove("user");
    dispatch(authUser(null));
  }
};
