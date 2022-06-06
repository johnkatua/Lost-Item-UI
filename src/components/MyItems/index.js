import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./index.css";
import Card from "../Cards";
import ModalComponent from "../Modal";
import UpdateItem from "../Forms/updateItem";
import { removeItem, showModal } from "../../containers/Items/store/itemActions";

const MyItemComponent = () => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const { items, isOpen } = useSelector((state) => state.itemReducer);
  const { user } = useSelector((state) => state.authReducer);
  const filteredItems = items.filter((item) => item.userId === user?.id);

  const handleEdit = (item) => {
    dispatch(showModal(true));
    setData(item)
  };

  const handleClose = () => {
    dispatch(showModal(false));
  }

  return (
    <div className="my--items--container">
      {!user && <div>Please login to see your items</div>}
      {user && filteredItems.length === 0 && <div>You have no items</div>}
      {user && filteredItems.length > 0 && (
        <div className="my--items__card">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              name={item.name}
              description={item.description}
              status={item.status}
              photo={item.photo}
              action={item.userId === user?.id ? true : false}
              handleDelete={() => dispatch(removeItem(item))}
              handleEdit={() => handleEdit(item)}
            />
          ))}
        </div>
      )}
      <ModalComponent 
        open={isOpen} 
        close={() => handleClose()} 
        body={<UpdateItem data={data} />} 
        title={"Update Item"}
        />
    </div>
  );
};

export default MyItemComponent;
