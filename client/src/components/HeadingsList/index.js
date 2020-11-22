import React from "react";
import HeadingCard from "../../components/HeadingCard";
import headingsArray from "../../utils/lastReports"
import HeadingsHeader from "../HeadingsHeader"

const headingsList = headingsArray.map(heading => {
    return <HeadingCard
    key = { heading.title }
    title = { heading.title }
    image = { heading.image }
    /> 
});
export default function HeadingsList(props) {
    return (
        <div className={props.classes}>
            <HeadingsHeader
                displayClass = {props.headerClass}
            />
            {headingsList}
      </div>
         
  );
}