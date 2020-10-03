import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';

import Home from './components/Home';
import Lookup from './components/Lookup';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen bg-dark">
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/lookup" component={Lookup} />
        </Switch>
      </div>
    </Router>
  );
}
