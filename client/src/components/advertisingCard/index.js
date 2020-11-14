import React from "react";
import "./style.css"
export default function HeadingCard(props) {
  return (
          <div className="ads-container">
          <div className="ad-title">{props.title}</div>
              <div> 
                <div>
                    <img className="ad-image" src={props.image} alt="" />
                </div>       
                </div>
        </div>
  );
}