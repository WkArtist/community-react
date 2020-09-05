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
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Overview}></Route>
          <Route path="/overview" component={Overview}></Route>
          <Route path="/complex" component={Complex}></Route>
          <Route component={Blank}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
