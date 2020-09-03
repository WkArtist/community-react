import React from 'react';
import './App.scss'
import Nav from './components/common/Nav'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import Overview from "./pages/overview"
import Complex from "./pages/complex"
import Blank from "./components/common/blank"

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Switch>
          <Route path="/overview" exact component={Overview}></Route>
          <Route path="/complex" exa component={Complex}></Route>
          <Redirect from="/" exact to="/overview"></Redirect>
          <Route component={Blank}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
