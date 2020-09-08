import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "./components/Container";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Nav from "./components/NavTabs";
import Header from "./components/Header";

function App() {
  
  return (
    <Router>
          <div>
        <Header/>
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