import axios from "axios";
import { GET_CATEGORIES } from "./categoriesConstants";

export const getCategories = (categories) => ({
  type: GET_CATEGORIES,
  categories,
});

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("https://powerful-tundra-02406.herokuapp.com/genre");
      if (response.status === 200) {
        dispatch(getCategories(response.data.data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
