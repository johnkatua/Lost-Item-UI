import React from "react";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { authUser } from "./containers/Authentication/redux/authActions";
import { fetchItems } from "./containers/Items/store/itemActions";
import { fetchCategories } from "./containers/Categories/redux/categoriesActions";
import RoutesPage from "./Routes";
import store from "./store";

const user = localStorage.getItem("user");
if (user) {
  store.dispatch(authUser(JSON.parse(user)));
}

store.dispatch(fetchItems());
store.dispatch(fetchCategories());

const App = () => {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <RoutesPage />
      </Provider>
    </CookiesProvider>
  );
};

export default App;
