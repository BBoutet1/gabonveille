import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./components/assets/style.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Us from "./pages/Nous"
import PagesHader from "./pages/PagesHeader"
import NewArticleForm from "./pages/NewArticleForm"

function App() {
  return (
    <Router>
        <PagesHader/>
        <Switch>
            <Route exact path={["/"]}>
              <Home/>
            </Route>
            <Route exact path={["/contact"]}>
              <Contact/>
            </Route>
            <Route exact path={["/nous-connaitre"]}>
              <Us/>
            </Route>
            <Route exact path={["/nouvel-article"]}>
              <NewArticleForm/>
            </Route>
            <Route exact path={["/*"]}>
              <Home/>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;