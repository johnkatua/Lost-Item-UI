import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

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
    <Provider store={store}>
      <RoutesPage />
    </Provider>
  );
};

export default App;
render(<App />, document.getElementById("root"));
