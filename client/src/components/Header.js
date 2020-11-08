import React from "react";
import Logo from "./assets/images/logo.png"
import Publicite from "./assets/images/publicite.png"



function Header(){

    return (
      <header className="header">
        <img className="logo" src={Logo} alt="logo"></img>
        <img className="publicite" src={Publicite} alt="ads panel"></img>
            <ul id="nav-right">
              <li><a className="gh-btn" href="sass.html">Accueil</a></li>
              <li><a href="nous">Nous connaitre</a></li>
              <li><a href="contact">Nous contacter</a></li>
            </ul>
        </header>
        
    )
}

export default Header;