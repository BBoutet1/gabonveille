import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "./components/Container";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Nav from "./components/NavTabs";

function App() {
  
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route exact path={["/Accueil"]}>
            <Home />
          </Route>
          <Route exact path={["/Contact"]}>
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;