import React from "react";
import "./Cards.css"

const Cards = props => (
  <div className="Cards">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
          <strong>Name:</strong> {props.name}
    </div>
  </div>
);
export default Cards;