import React from "react";
import { Link } from "react-router-dom";


function NavTabs(props) {
  return (
  <nav>
    <div className="nav-wrapper ">
      <ul id="nav-mobile">
        <li><a href="Société">Société</a></li>
        <li><a href="Culture">Culture</a></li>
        <li><a href="Politique">Politique</a></li>
        <li><a href="Economie">Economie</a></li>
        <li><a href="Entreprenariat">Entreprenariat et innovation</a></li>
      </ul>
    </div>
  </nav>

  );
}

export default NavTabs;
