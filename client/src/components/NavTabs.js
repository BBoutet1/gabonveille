import React from "react";
import { Link } from "react-router-dom";

function NavTabs(props) {
  return (
   
   
       <nav>
    <div className="nav-wrapper">
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="Société">Société</a></li>
        <li><a href="Culture">Culture & Art</a></li>
        <li><a href="Business">Business & Entreprenariat</a></li>
          <li><a href="Education">Education & Science</a></li>
           <li><a href="Technologie">Technologie & Innovation</a></li>
        <li><a href="Politique">Politique & Economie</a></li>
      </ul>
    </div>
  </nav>

  );
}

export default NavTabs;
