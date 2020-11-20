import React from "react";
import Logo from "../assets/images/logo.png"
import TopAd from "../assets/images/publicite.png"
import "./style.css"

export default function TopHeader(){
    return (
      <header className="header">
        <img className="logo" src={Logo} alt="logo"></img>
        <img className="top-ad" src={TopAd} alt="ads panel"></img>
            <ul id="nav-right">
              <li><a href="accueil">Accueil</a></li>
              <li><a href="nous-connaitre">Nous connaitre</a></li>
              <li><a href="contact">Nous contacter</a></li>
            </ul>
        </header>
    )
}
