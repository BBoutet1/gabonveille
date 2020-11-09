import React from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "./Sidebar";

 const listLinks = [
    {
      key: "société",
      path: "/société/",
      title: "Société",
    },
    {
      key: "culture",
      path: "/culture/",
      title: "Culture",
    },
    {
      key: "politique",
      path: "/politique/",
      title: "Politique",
    },
    {
      key: "Economie",
      path: "/économie/",
      title: "Economie",
    },
    {
      key: "entreprenariat",
      path: "/entreprenariat/",
      title: "Entreprenariat",
   },
    {
      key: "afrique",
      path: "/afrique/",
      title: "Afrique et diaspora",
    }
    ,
    {
      key: "etranger",
      path: "/étranger/",
      title: "Etranger",
   }
  ]
 const renderList = () => {
    return listLinks.map(item => (
      <li
        key={item.key}
      >
        <Link
          to={item.path}
          activeStyle={{
            color: "#FFFFFF",  
          }}
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
