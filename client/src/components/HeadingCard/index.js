import React from "react";
import "./style.css"
export default function HeadingCard(props) {
  console.log(props.image)
  return (
          <div className="card-container">
          <div className="small-title">{props.title}</div>
              <div> 
                <div>
                    <img className="small-image" src={props.image} alt="" />
                </div>       
                </div>
        </div>
  );
}