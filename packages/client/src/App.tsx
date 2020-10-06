import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import Header from './components/Header';
import Home from './components/Home';
import Lookup from './components/Lookup';
import LookupResult from './components/Lookup/Result';

library.add(faSpinner);

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-dark">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/lookup" component={Lookup} />
          <Route exact path="/lookup/:name" component={LookupResult} />
        </Switch>
      </Router>
    </div>
  );
}
