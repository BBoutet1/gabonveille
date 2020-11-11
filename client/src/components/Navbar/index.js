import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox"
import BurgerMenu from "../BurgerMenu";
import "./style.css"


 const listLinks = [
    {
      path: "/société/",
      title: "société",
    },
    {
      path: "/culture/",
      title: "culture",
    },
     {
      path: "/sport/",
      title: "sport",
    },
    {
      path: "/politique/",
      title: "politique",
    },
    {
      path: "/économie/",
      title: "économie",
    },
    {
      path: "/entreprenariat/",
      title: "entreprenariat",
   },
    {

      path: "/afrique-et-diaspora/",
      title: "Afrique et diaspora",
    }
    ,
    {
      path: "/étranger/",
      title: "étranger",
   }
  ]
 const renderList = () => {
    return listLinks.map(item => (
      <li
        key={item.title}
      >
        <Link
          to={item.path}
        >
          {item.title}
        </Link>
      </li>
    ))
  }

function NavTabs(props) {
  return (
    <div>
      <nav className="navbar">
          <ul id="nav-mobile">
          {renderList()}
              <SearchBox />
              <ul  id="subnav">
                  <li>
                    <a href="accueil" className="material-icons prefix">home</a>
                  </li>
                  <li>
                    <a href="nous-connaitre" className="material-icons prefix">info</a>
                  </li>
                  <li>
                    <a href="contact" className="material-icons prefix">mail</a>
                  </li>
              </ul>
          </ul>
      </nav>
      <div className="sidebar">
          <BurgerMenu>
              {renderList()}
          </BurgerMenu>
      </div>
    </div>
 
  );
}
export default NavTabs;
