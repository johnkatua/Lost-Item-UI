import { Toast } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import "./index.css";
import { CLEAR_ERROR } from "./redux/errorConstants";

const ErrorNotification = () => {
  const dispatch = useDispatch();
  const { isOpen, error } = useSelector((state) => state.errorReducer);

  const handleClose = () => {
    dispatch({ type: CLEAR_ERROR });
  };

  return (
    <Toast
      onClose={handleClose}
      show={isOpen}
      delay={5000}
      autohide
      className="error-notification"
    >
      <Toast.Header>
        <strong className="me-auto">Error</strong>
      </Toast.Header>
      <Toast.Body>* {error}</Toast.Body>
    </Toast>
  );
};

export default ErrorNotification;
