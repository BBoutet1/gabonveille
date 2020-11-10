import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./components/assets/style.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Nous from "./pages/Nous"
import Nav from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <Router>
        <Header/>
        <Nav/>
        <Switch>
          <Route exact path={["/"]}>
            <Home/>
          </Route>
          <Route exact path={["/contact"]}>
            <Contact/>
        </Route>
        <Route exact path={["/nous-connaitre"]}>
            <Nous/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;