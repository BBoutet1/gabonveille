import React from "react";
import Logo from "./assets/images/logo.png"
import AdsPanel from "./assets/images/publicite.png"



function Header(){

    return (
      <nav className="header">
        <img className="logo" src={Logo} alt="logo"></img>
        <img className="adsPanel" src={AdsPanel} alt="ads panel"></img>
          <div className="nav-wrapper">
            <ul id="nav-right" className="right">
              <li><a href="sass.html">Accueil</a></li>
              <li><a href="nous">Nous connaitre</a></li>
              <li><a href="contact">Nous contacter</a></li>
            </ul>
          </div>
        </nav>
        
    )
}

export default Header;