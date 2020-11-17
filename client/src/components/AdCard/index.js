import React from "react";
import "./style.css"
export default function AdCard(props) {
  return (
      <div className="ads-container">
          <img className="ad-image" src={props.image} alt=""/>      
        </div>
  );
}