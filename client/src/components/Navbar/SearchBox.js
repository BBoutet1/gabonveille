import React from "react";
  
function SearchBox(){

    return (
    <div className="search-form">
          <div className="search-icon"><i className="material-icons prefix">search</i></div>
          <input type="text" id="search-input" placeholder="Rechercher"></input>
    </div>
    )
}

export default SearchBox;