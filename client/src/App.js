import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";

const App = () => (
  <Router>
    <div>
      {/* <p>Hello NYT!</p> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
)

export default App;
