import { combineReducers } from "redux";

import { authReducer } from "./containers/Authentication/redux/authReducers";
import { errorReducer } from "./containers/Error/redux/errorReducers";
import { itemReducer } from "./containers/Items/store/itemReducers";
import { categoriesReducer } from "./containers/Categories/redux/categoriesReducers";

export const rootReducer = combineReducers({
  authReducer,
  errorReducer,
  itemReducer,
  categoriesReducer,
});
