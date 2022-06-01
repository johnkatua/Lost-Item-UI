import { CLEAR_ERROR } from "./errorConstants";

const initialState = {
  error: null,
  isOpen: false,
};

export const errorReducer = (state = initialState, action) => {
  const { type, error } = action;
  if (error) {
    return {
      ...state,
      error,
      isOpen: true,
    };
  } else if (type === CLEAR_ERROR) {
    return {
      ...state,
      error: null,
      isOpen: false,
    };
  }
  return state;
};
