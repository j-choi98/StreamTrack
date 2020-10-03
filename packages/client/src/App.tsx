import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import Header from './components/Header';
import Home from './components/Home';
import Lookup from './components/Lookup';

library.add(faSpinner);

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-dark">
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/lookup" component={Lookup} />
        </Switch>
      </div>
    </Router>
  );
}
