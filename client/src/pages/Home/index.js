import React from "react";
import HeadingsList from "../../components/HeadingsList";
import HeadingsHeader from "../../components/HeadingsHeader"
import AdsList from "../../components/AdsList"
import Image from "../../components/assets/images/photo7.jpg"
import "./style.css"

const Home = () => (
    
    <div className="page-body">
        <HeadingsHeader
            displayClass = "headings-ad-sm"
        />
        <HeadingsList
            classes="small-headings-container headings-left"
            headerClass ="headings-ad-lg"
        />
        <div className="headline-and-ads">
        <main className="big-headline">
            <HeadingsHeader
                displayClass = "headings-ad-md"
            />
            <div className="big-headline-container">
                <img className="big-image" src={Image} alt="" /> 
                <div className="big-headline-text">
                    <h3 className="big-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>     
                    <p className="big-summary">Velit dignissim sodales ut eu sem. A arcu cursus vitae congue. Facilisis mauris sit amet massa vitae tortor condimentum lacinia quis. Amet consectetur adipiscing elit ut aliquam purus sit amet. Augue lacus viverra vitae congue. </p>
                </div>
            </div>
            <HeadingsList classes = "small-headings-container headings-bottom"
                    headerClass ="headings-ad-lg"
            />
        </main>
        <AdsList classes = "advertising"/>
        </div>
    </div>
 
);
export default Home;