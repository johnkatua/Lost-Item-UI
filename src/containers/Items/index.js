import React from "react";
import { useSelector } from "react-redux";

import ItemComponent from "../../components/Items";

const ItemContainer = () => {
  const { items } = useSelector((state) => state.itemReducer);

  return <ItemComponent items={items} />;
};

export default ItemContainer;
