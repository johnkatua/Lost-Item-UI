import { SUBMITTING_REQUEST, AUTH_USER } from "./authConstants";

const initialState = {
  isLoading: false,
  user: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMITTING_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case AUTH_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
