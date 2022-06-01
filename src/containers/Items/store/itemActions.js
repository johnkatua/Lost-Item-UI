import axios from "axios";
import { GET_ITEMS, CREATE_ITEM, DELETE_ITEM, SHOW_MODAL, UPDATE_ITEM } from "./itemConstants";

export const getItems = (items) => {
  return {
    type: GET_ITEMS,
    items,
  };
};

export const addItem = (item) => {
  return {
    type: CREATE_ITEM,
    item
  }
};

export const updateItem = (item) => {
  return {
    type: UPDATE_ITEM,
    item
  }
}

export const deleteItem = (item) => {
  return {
    type: DELETE_ITEM,
    item
  }
};

export const showModal = (status) => {
  return {
    type: SHOW_MODAL,
    status
  }
}

export const fetchItems = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://powerful-tundra-02406.herokuapp.com/items/get-all-items"
      );
      if (response.status === 200) {
        dispatch(getItems(response.data.data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const createItem = (item) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("https://powerful-tundra-02406.herokuapp.com/items/create", item);
      if (response) {
        dispatch(addItem(response.data));
      }
    } catch (error) {
      console.log(error);
    }
  }
};

export const fetchUpdateItem = (item) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`https://powerful-tundra-02406.herokuapp.com/items/update-item/${item.id}`, item);
      if (response) {
        dispatch(updateItem(response.data.item));
      }
    } catch (error) {
      console.log(error);
    } 
  }
}

export const removeItem = (item) => {
  return async (dispatch) => {
    try {
      await axios.delete(`https://powerful-tundra-02406.herokuapp.com/items/delete/${item.id}`);
      dispatch(deleteItem(item))
    } catch (error) {
      console.log(error);
    }
  }
};
