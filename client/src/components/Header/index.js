import React from "react";
import Logo from "../assets/images/logo.png"
import Publicite from "../assets/images/publicite.png"
import RightMenu from "../RightMenu"

function Header(){
    return (
      <header className="header">
          <img className="logo" src={Logo} alt="logo"></img>
          <img className="publicite" src={Publicite} alt="ads panel"></img>
           <RightMenu/>
      </header>
    )
}

export default Header;