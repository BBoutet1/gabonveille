import React from "react";
import HeadingsList from "../../components/HeadingsList";
import AdsList from "../../components/AdsList"
import "./style.css"


const Home = () => (
    
    <div className="page-body">
        <HeadingsList classes = "small-headings-container headings-left"/>
        <div className="headline-and-ads">
        <AdsList classes = "advertising advertising-top"/>
          <main className="big-headline">
            <h3 className="big-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
            <div> 
                <div>
                    <img className="big-image" src="https://scontent.fybz2-2.fna.fbcdn.net/v/t1.0-9/10398620_1125211609890_2232523_n.jpg?_nc_cat=105&ccb=2&_nc_sid=cdbe9c&_nc_ohc=Ytpn0m7FHSIAX-UYoGG&_nc_ht=scontent.fybz2-2.fna&oh=60465edd39df9653f74687f1228df5d0&oe=5FD019D1" alt="" />
                </div>       
                <p className="big-summary">Velit dignissim sodales ut eu sem. A arcu cursus vitae congue. Facilisis mauris sit amet massa vitae tortor condimentum lacinia quis. Amet consectetur adipiscing elit ut aliquam purus sit amet. Augue lacus viverra vitae congue. </p>
            </div>
            <HeadingsList classes = "small-headings-container headings-bottom"/>
        </main>
        <AdsList classes = "advertising advertising-right"/>
        </div>
    </div>
 
);
export default Home;