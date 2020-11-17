import React from "react";
import AdCard from "../../components/AdCard";
import adsArray from "../../utils/advertising"

const adsList = adsArray.map(element => {
    return <AdCard
    key = { element.image }
    image = { element.image }
    />  
});
export default function AdsList(props) {
    return (
     <div className={props.classes}>
            {adsList}
      </div>
    );
}