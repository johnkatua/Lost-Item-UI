import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Button } from "react-bootstrap";

import "./index.css";
import Card from "../Cards";
import { removeItem, showModal } from "../../containers/Items/store/itemActions";
import ModalComponent from "../Modal";
import UpdateItem from "../Forms/updateItem";
import ContactInfo from "../Forms/ContactInfo";


const FilteredItems = () => {
  const [data, setData] = useState({});
  const [showContactInfo, setShowContactModal] = useState(false);
  const dispatch = useDispatch();
  const { items, isOpen } = useSelector((state) => state.itemReducer);
  const { categories } = useSelector((state) => state.categoriesReducer);
  const { user } = useSelector(state => state.authReducer)
  const { id } = useParams();
  const filteredItems = items.filter((item) => item.genreId === id);
  const filteredCategory = categories.filter((category) => category.id === id);
  const categoryName = filteredCategory[0]?.name;

  const handleEdit = item => {
    dispatch(showModal(true));
    setData(item);
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
    <div className="filtered--items">
      <div className="filtered__button--box">
        <Button className="mb-3 filtered--button" variant="primary">
          <span>{categoryName}</span>
          <Badge variant="light" bg="success">
            {filteredItems.length}
          </Badge>
        </Button>
      </div>
      <div className="filtered--items__card">
        {filteredItems.length === 0 ? (
          <h2>No items found under this category</h2>
        ) : (
            filteredItems.map((item) => (
              <Card
                key={item.id}
                name={item.name}
                description={item.description}
                status={item.status}
                photo={item.photo}
                action={item.userId === user?.id ? true : false}
                handleEdit={() => handleEdit(item)}
                handleDelete={() => dispatch(removeItem(item))}
                showContactInfo={() => handleShowContactInfo(item)}
              />
            ))
        )}
      </div>
      <ModalComponent 
        open={isOpen} 
        close={() => handleClose()} 
        body={showContactInfo ? <ContactInfo data={data} /> : <UpdateItem data={data} />} 
        title={showContactInfo ? "Contact Info" : "Update Item"} />
    </div>
  );
};

export default FilteredItems;
