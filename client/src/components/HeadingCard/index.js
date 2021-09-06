import React from "react";
import "./style.css"
export default function HeadingsHeader(props) {
  return (
    <div className="card-container">
      <div>
          <div className="small-title">{props.title}</div>
          <img className="small-image" src={`/images/${props.image}`} alt={props.title} />
      </div>
    </div>
  );
}