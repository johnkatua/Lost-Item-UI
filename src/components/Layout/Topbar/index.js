import React from "react";
import { Button, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./topbar.css";
import ModalComponent from "../../Modal";
import CreateItem from "../../Forms/createItem";
import { removeUser } from "../../../containers/Authentication/redux/authActions";

const Topbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer);
  const [showModal, setShowModal] = React.useState(false)
  const navigate = useNavigate();

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const logoutUser = () => {
    dispatch(removeUser());
  };

  return (
    <div className="topbar--container">
      <div className="topbar--container__title">
        <h1>Lost&Found</h1>
      </div>
      <div className="topbar--container__auth">
        {user ? (
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic-button">
              {user.name}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={handleShow}>Create New Item</Dropdown.Item>
              <ModalComponent open={showModal} close={handleClose} title="Add New Item" body={<CreateItem />} />
              <Dropdown.Item onClick={logoutUser}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Button variant="primary" onClick={() => navigate("/auth")}>
            Get Started
          </Button> 
        )}
      </div>
    </div>
  );
};

export default Topbar;
