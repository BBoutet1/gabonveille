import React from "react";
import BottomAd from "../assets/images/air-mandilou.jpg"
import "./style.css"
/* This section is used to render a advertising image:
- props.displayClass is used to hide or show the image in different components
*/
export default function BottomHeader(props){
  return (
    <div className={"headings-header " + props.displayClass}>
        <img className="headings-ad" src={BottomAd} alt="ads panel"></img>
      </div>
    )
}
