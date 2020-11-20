import React from "react";
import BottomAd from "../assets/images/air-mandilou.jpg"
import "./style.css"

export default function BottomHeader(props){
  return (
    <div className={"headings-header " + props.displayClass}>
        <img className="bottom-ad" src={BottomAd} alt="ads panel"></img>
      </div>
    )
}
