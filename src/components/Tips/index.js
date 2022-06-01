import React from "react";
import { Button } from "react-bootstrap";

import ModalComponent from "../Modal";
import TipsList from "../Forms/TipsList";
import "./index.css";

const TipsPage = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false)
  return (
  <div className="tips--container">
    <Button onClick={handleOpen} className="tips--btn">See Some Tips</Button>
    <ModalComponent open={open} close={handleClose} title="Some tips while using the platform" body={<TipsList />} />
  </div>
  );
};

export default TipsPage;
