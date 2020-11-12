import React from "react";
import HeadingCard from "../HeadingCard";
import AdvertisingCard from "../advertisingCard"
import "./style.css"
import headingsArray from "../../utils/lastReporst"
import ads from "../../utils/advertising"

 const smallHeadings = headingsArray.map(heading => {
   return <HeadingCard
     key = {heading.title}
     title={heading.title}
     image={heading.image}
   /> 
 });
        
const advertisings = ads.map(element => {
   return <AdvertisingCard
     image={element.image}
   />  
        });

 console.log(smallHeadings)
export default function ReportCard(){
  return (
    <div className="page-body">
        <aside className="small-headings heading-left">
              {smallHeadings}
      </aside>
      <div className="headline-and-ads"> 
          <main className="big-headline">
              <h3 className="big-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
              <div> 
                <div>
                    <img className="big-image" src="https://scontent.fybz2-2.fna.fbcdn.net/v/t1.0-9/10398620_1125211609890_2232523_n.jpg?_nc_cat=105&ccb=2&_nc_sid=cdbe9c&_nc_ohc=Ytpn0m7FHSIAX-UYoGG&_nc_ht=scontent.fybz2-2.fna&oh=60465edd39df9653f74687f1228df5d0&oe=5FD019D1" alt="" />
                </div>       
                <p className="big-summary">Velit dignissim sodales ut eu sem. A arcu cursus vitae congue. Facilisis mauris sit amet massa vitae tortor condimentum lacinia quis. Amet consectetur adipiscing elit ut aliquam purus sit amet. Augue lacus viverra vitae congue. </p>
                </div>
        </main>
        <aside className="advertising">
            {advertisings}
      </aside>
     
      </div>
 <aside className="small-headings headings-bottom">
              {smallHeadings}
        </aside>
    </div>
  );
}