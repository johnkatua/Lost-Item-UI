import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { removeItem, showModal } from "../../containers/Items/store/itemActions";
import  ModalComponent  from "../Modal/index"
import Card from "../Cards";
import "./index.css";
import UpdateItem from "../Forms/updateItem";
import ContactInfo from "../Forms/ContactInfo";

const ItemComponent = ({ items }) => {
  const [data, setData] = useState({});
  const [showContactModal, setShowContactModal] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.authReducer);
  const { isOpen } = useSelector((state) => state.itemReducer);

  const handleEdit = (item) => {
    dispatch(showModal(true));
    setData(item)
  };

  const handleShowContactInfo = (item) => {
    dispatch(showModal(true));
    setShowContactModal(true);
    setData(item);
  }

  const handleClose = () => {
    dispatch(showModal(false));
    setShowContactModal(false);
  }

  return (
    <div className="item--container">
      {items.map((item) => {
        return (
          <>
            <Card
              key={item.id}
              name={item.name}
              description={item.description}
              status={item.status}
              photo={item.photo}
              action={item.userId === user?.id ? true : false}
              handleDelete={() => dispatch(removeItem(item))}
              handleEdit = {() => handleEdit(item)}
              showContactInfo={() => handleShowContactInfo(item)}
            />
          </>
        )
      })}
      <ModalComponent 
        open={isOpen} 
        close={() => handleClose()} 
        body={showContactModal ? <ContactInfo data={data} /> : <UpdateItem data={data} />} 
        title={showContactModal ? "Contact Info" : "Update Item"} 
      />
    </div>
  );
};

export default ItemComponent;
