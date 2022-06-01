import { GET_ITEMS, CREATE_ITEM, DELETE_ITEM , SHOW_MODAL, UPDATE_ITEM } from "./itemConstants";

const initialState = {
  items: [],
  isOpen: false
};

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.items,
      };
    case CREATE_ITEM:
      return {
        ...state,
        items: [...state.items, action.item]
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.item.id)
      };
    case SHOW_MODAL:
      return {
        ...state,
        isOpen: action.status
      };
    case UPDATE_ITEM:
      return {
        items: state.items.map((item) => {
          if (item.id !== action.item._id) {
            return item;
          }
          return {
            ...item,
            ...action.item
          }
        })
      };
    default:
      return state;
  }
};
