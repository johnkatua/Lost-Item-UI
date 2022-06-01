import React from "react";
import { Badge, Dropdown, DropdownButton } from "react-bootstrap";

import "./index.css";

const Card = (props) => {
  return (
    <div className="card--container">
      <div className="card--container__top">
        <div className="card--container__top--image">
          <img
            src={props.photo}
            className="card--img"
            alt="my-beautiful--cat"
          />
        </div>
      </div>
      <div className="card--container__bottom">
        <div className="card--container__bottom--title">
          <div>{props.name}</div>
            <div className="card--title__action">
            {props.action === true && (
              <DropdownButton
                id="dropdown-basic-button"
                title="Action"
                variant="secondary"
              >
                <Dropdown.Item onClick={props.handleEdit}>
                  Edit
                </Dropdown.Item>
                <Dropdown.Item onClick={props.handleDelete}>Delete</Dropdown.Item>
              </DropdownButton> 
            )}
            </div>
        </div>
        <div className="card--container__bottom--description">
          {props.description}
        </div>
        <div className="card--container__bottom--tags">
          <div className="card--tags__badge">
            {props.status === "lost" ? (
              <Badge className="badge--success" bg="danger">
                Lost
              </Badge>
            ) : (
              <Badge className="badge--success" bg="success">
                Found
              </Badge>
            )}
          </div>
          {props.action === false && (<button className="card--tags__contact" onClick={props.showContactInfo}>Show Contact</button>)}
        </div>
      </div>
    </div>
  );
};

export default Card;
