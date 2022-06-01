import { SET_ERROR, CLEAR_ERROR } from "./errorConstants";

export const setError = (error) => ({
  type: SET_ERROR,
  error,
});

export const clearError = () => ({
  type: CLEAR_ERROR,
});
